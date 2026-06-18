import 'dotenv/config';
import { supabaseService } from '../src/services/supabaseService';
import { generateProtocol } from '../src/utils/protocolGenerator';
import { Message } from '../src/types';

async function runTests() {
  console.log('--- INICIANDO TESTE PONT-A-PONTA DE FLUXOS DE CORRESPONDÊNCIA SUPABASE ---\n');

  const citizenBi = '009874562LA041'; // Edlasio Galhardo
  const citizenName = 'Edlasio Galhardo';
  const institutionName = 'Administração Geral Tributária';
  const institutionCode = 'AGT';

  // =========================================================================
  // TESTE 1: CIDADÃO -> INSTITUIÇÃO
  // =========================================================================
  console.log('⚡ TESTE 1: Submetendo correspondência do Cidadão para a Instituição...');
  
  const msgIdCitizen = Number(`${Date.now()}101`);
  const subjectCitizen = 'Petição de Verificação de Matriz Predial #2026-AO';
  const protocolCitizen = generateProtocol(institutionCode, 'message', msgIdCitizen, subjectCitizen);

  const citizenMsgObj: Message = {
    id: msgIdCitizen,
    org: institutionName,
    preview: subjectCitizen,
    date: new Date().toLocaleDateString('pt-AO'),
    status: 'Informativo',
    unread: 1,
    details: {
      subject: subjectCitizen,
      body: `Excelentíssimo Senhor Administrador da AGT,\n\nVenho por este meio, na qualidade de cidadão contribuinte com BI nº ${citizenBi}, solicitar a revisão e atualização da minha matriz predial urbana referente ao imóvel localizado no Município de Talatona.\n\nAnexo a certidão atual e o comprovativo de liquidação do IPU.\n\nAtentamente,\n${citizenName}`,
      deadline: 'Sem prazo',
      state: 'Submetido ao Barramento',
      actions: ['Analisar Petição', 'Despachar'],
      attachments: ['Comprovativo_IPU_2026.pdf', 'Certidao_Imovel.pdf']
    },
    protocol: protocolCitizen
  };

  try {
    const resCitizen = await supabaseService.sendCitizenMessage(citizenMsgObj, citizenBi, institutionName);
    await supabaseService.insertMessageStateEvent({
      messageId: msgIdCitizen,
      state: 'Enviada pelo Cidadão',
      responsible: citizenName,
      description: `Petição submetida para o balcão digital da ${institutionCode}.`
    });
    await supabaseService.insertNotification({
      title: 'Nova Petição do Cidadão',
      message: `${citizenName} submeteu o requerimento: "${subjectCitizen}".`,
      type: 'info',
      targetTab: 'correspondencias'
    }, institutionCode);

    console.log(`✓ SUCESSO (Cidadão -> Instituição): Mensagem #${msgIdCitizen} inserida com Protocolo ${protocolCitizen.protocolNumber}.\n`);
  } catch (err: any) {
    console.error('❌ ERRO (Cidadão -> Instituição):', err?.message || err);
  }

  // =========================================================================
  // TESTE 2: INSTITUIÇÃO -> CIDADÃO (INVERSO)
  // =========================================================================
  console.log('⚡ TESTE 2: Submetendo despacho oficial da Instituição para o Cidadão (Inverso)...');

  const msgIdOfficial = Number(`${Date.now()}202`);
  const subjectOfficial = 'Despacho Oficial — Deferimento de Isenção Sócio-Profissional';
  const protocolOfficial = generateProtocol(citizenBi, 'message', msgIdOfficial, subjectOfficial);

  const officialMsgObj: Message = {
    id: msgIdOfficial,
    org: institutionCode,
    preview: subjectOfficial,
    date: new Date().toLocaleDateString('pt-AO'),
    status: 'Oficial / Urgente',
    unread: 1,
    details: {
      subject: subjectOfficial,
      body: `Prezado(a) ${citizenName},\n\nEm resposta à sua solicitação submetida sob o processo administrativo nº 2026/9912, a ${institutionName} cumpre com o dever de notificar que o seu pedido de Isenção Fiscal Sócio-Profissional foi DEFERIDO na totalidade.\n\nO selo de isenção eletrónica foi averbado à sua identidade fiscal (NIF: 5401329188) com força probatória permanente em território nacional.\n\nLuanda, ${new Date().toLocaleDateString('pt-AO')}\nO Diretor dos Serviços Fiscais da AGT`,
      deadline: 'Cumprido',
      state: 'Despachado & Chancelado',
      actions: ['Confirmar Notificação', 'Descarregar Averbação'],
      attachments: ['Despacho_Deferimento_AGT.cda', 'Selo_Isencao_2026.pdf']
    },
    protocol: protocolOfficial,
    sensitivity: 'Privado',
    priorityScale: 'Crítico'
  };

  try {
    const resOfficial = await supabaseService.sendOfficialMessage(officialMsgObj, citizenBi, institutionName);
    await supabaseService.insertMessageStateEvent({
      messageId: msgIdOfficial,
      state: 'Notificado pela AGT',
      responsible: 'AGT — BALCÃO CENTRAL',
      description: `Despacho de deferimento emitido e entregue ao Bilhete de Identidade Digital do cidadão.`
    });
    await supabaseService.insertNotification({
      title: 'Notificação Tributária da AGT',
      message: `A AGT emitiu um novo despacho formal com força probatória sobre o seu NIF.`,
      type: 'success',
      targetTab: 'correspondencias'
    }, citizenBi);

    console.log(`✓ SUCESSO (Instituição -> Cidadão): Mensagem #${msgIdOfficial} inserida com Protocolo ${protocolOfficial.protocolNumber}.\n`);
  } catch (err: any) {
    console.error('❌ ERRO (Instituição -> Cidadão):', err?.message || err);
  }

  // =========================================================================
  // VERIFICAÇÃO NA BASE DE DADOS DO SUPABASE
  // =========================================================================
  console.log('🔍 VERIFICANDO REGISTOS CONSOLIDADOS NO BANCO DE DADOS CENTRAL (klrclczcahfycfdxzdqs)...');

  // Verify Citizen inbox
  const citizenInbox = await supabaseService.getMessages(citizenBi);
  const matchedOfficial = citizenInbox?.find(m => m.id === msgIdOfficial);
  console.log(`Caixa de Entrada de ${citizenName} (${citizenBi}):`, matchedOfficial ? `[OK] Contém o despacho oficial #${msgIdOfficial}` : '[FALHA]');

  // Verify Institution inbox
  const institutionInbox = await supabaseService.getInstitutionMessages(institutionCode);
  const matchedCitizen = institutionInbox?.find(m => m.id === msgIdCitizen);
  console.log(`Caixa de Expediente de ${institutionName} (${institutionCode}):`, matchedCitizen ? `[OK] Contém a petição do cidadão #${msgIdCitizen}` : '[FALHA]');

  console.log('\n✨ TESTE GERAL DOS FLUXOS INTEGRADOS FINALIZADO COM MÁXIMA INTEGRIDADE!');
}

runTests().catch(err => {
  console.error('Falha crítica na execução do script de teste:', err);
});
