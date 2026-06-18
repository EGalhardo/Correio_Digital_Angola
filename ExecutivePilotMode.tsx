/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw,
  Landmark,
  Activity,
  Lock,
  User,
  Building2
} from 'lucide-react';
import { AppMode, LanguageCode } from '../../types';

interface PilotStep {
  id: string;
  targetTab: string;
  title: string;
  subtitle: string;
  speechText: string;
  scrollPosition: number;
  approvalQuestion: string;
}

const PILOT_STEPS_BY_MODE: Record<AppMode, PilotStep[]> = {
  admin: [
    {
      id: 'admin-1-dashboard', targetTab: 'gov-dashboard', title: 'Painel da Administração Central',
      subtitle: 'Apresentação de Métricas Nacionais e de Soberania Digital', scrollPosition: 420,
      speechText: 'Excelência, seja muito bem-vindo à Apresentação Interactiva do Correio Digital Angola. O ecrã que observa atua como a central de comando da Governação Eletrónica nacional. Monitorizamos em tempo real os fluxos de correio chancelado, a emissão de certidões e os alertas do SOC. Vou rolar a página verticalmente para analisarmos os gráficos de tráfego de Estado.',
      approvalQuestion: 'Apresentei as métricas globais de Soberania. Deseja que eu transite a apresentação para as Correspondências Nacionais de Estado?'
    },
    {
      id: 'admin-2-correspondencias', targetTab: 'gov-correspondencias', title: 'Correspondências Nacionais',
      subtitle: 'Barramento Integrado de Expedientes com Força Probatória', scrollPosition: 350,
      speechText: 'Nesta secção, a plataforma processa a distribuição autêntica e oficial de expedientes entre a Administração Central, Cidadãos e Instituições Aderentes. Todos os ficheiros transferidos recebem uma assinatura criptográfica SHA-256 e o carimbo de validade permanente da República de Angola.',
      approvalQuestion: 'Validei a grelha de expedientes do Estado. Permite-me mudar de página para a malha de Gestão e Interoperabilidade com os mais de 450 órgãos públicos?'
    },
    {
      id: 'admin-3-interoperabilidade', targetTab: 'gov-interoperabilidade', title: 'Interoperabilidade Institucional',
      subtitle: 'Ponto de Barramento Ciber-Seguro entre 105 Órgãos Mapeados', scrollPosition: 450,
      speechText: 'Aqui gerimos o ecossistema federado. O portal integra 105 grandes entidades de Soberania, Tribunais Superiores, SME e AGT, assegurando redundância automática por canais SMS e USSD caso ocorra falha nas operadoras de internet móvel.',
      approvalQuestion: 'Apresentei os balcões centralizados do Estado. Autoriza a navegação da plataforma para analisar o protocolo de Ciber-Defesa na área de Segurança SOC?'
    },
    {
      id: 'admin-4-seguranca', targetTab: 'gov-seguranca', title: 'Segurança Cibernética SOC',
      subtitle: 'Protocolo de Contenção SOC-AN-2026 e Auditoria Biométrica', scrollPosition: 400,
      speechText: 'Excelência, esta é a secção de auditoria cibernética do ecossistema. A partir daqui, a tutela tem acesso direto à chave unificada de emergência SOC-AN-2026, concebida para suspender e proteger preventivamente credenciais faciais ou identidades sob quarentena estatal por motivos de segurança e soberania.',
      approvalQuestion: 'Demonstrei as salvaguardas de soberania de dados. Permite-me transitar para a vossa Conta Administrativa Executiva e concluir a apresentação?'
    },
    {
      id: 'admin-5-perfil', targetTab: 'gov-perfil', title: 'Conta da Administração Executiva',
      subtitle: 'Consolidação de Duplo Fator e Rastro Autenticado', scrollPosition: 100,
      speechText: 'Chegámos ao final da apresentação interactiva. Aqui têm a vossa credencial de membro da Administração Central, auditada sob dupla camada biométrica com força probatória em todo o território nacional.',
      approvalQuestion: 'A Apresentação Interactiva de Administração Central terminou com sucesso. Deseja retomar o comando livre da plataforma Correio Digital de Angola?'
    }
  ],
  institution: [
    {
      id: 'inst-1-home', targetTab: 'home', title: 'Balcão de Atendimento Institucional',
      subtitle: 'Recepção Autêntica de Petições de Cidadãos e Requerimentos', scrollPosition: 380,
      speechText: 'Oficial de Atendimento, seja muito bem-vindo à Apresentação Interactiva da Instituição. O seu painel base agrupa todos os ofícios, petições e requerimentos documentais submetidos pelos utentes à sua entidade. Vou deslocar a vertical para ver as pendências de resposta expedita.',
      approvalQuestion: 'Apresentei as métricas de submissão do balcão. Autoriza o avanço para a página de Correio Institucional de Entrada?'
    },
    {
      id: 'inst-2-correio', targetTab: 'correspondencias', title: 'Gestão de Expediente de Entrada',
      subtitle: 'Tramitação de Ofícios com Força Jurídica Permanente', scrollPosition: 350,
      speechText: 'Nesta Caixa de Entrada Institucional, o utente comunica com o vosso serviço de forma cifrada e bi-direcional. Cada resposta formal que o operador despacha gera proativamente um Protocolo Nacional SHA-256 e entrega a resposta no Bilhete de Identidade Digital do requerente.',
      approvalQuestion: 'Apresentei a caixa de ofícios da instituição. Deseja que navegue a plataforma para a página de Emissão Documental e Faturas?'
    },
    {
      id: 'inst-3-documentos', targetTab: 'documentos', title: 'Central de Emissão Documental',
      subtitle: 'Emissão e Validação de Certidões, Guia de Impostos e Faturas', scrollPosition: 400,
      speechText: 'Aqui a vossa instituição emite e valida certidões de conformidade, faturas de serviços e guias de liquidação de impostos. Os documentos gerados propagam-se instantaneamente para a Carteira Digital Única dos utentes angolanos.',
      approvalQuestion: 'Validei as emissões documentais. Permite-me apresentar a página de configuração do Assistente de Inteligência Artificial?'
    },
    {
      id: 'inst-4-ia', targetTab: 'inst-ai-assistant', title: 'Assistente de IA Corporativa',
      subtitle: 'Configuração dos Fóruns de Inteligência Artificial e Resumos', scrollPosition: 300,
      speechText: 'Este é o seu centro de treino corporativo. A instituição possui a liberdade absoluta de adicionar manuais de atendimento, regras tributárias ou prazos de atendimento para que a IA da plataforma responda automaticamente aos cidadãos com extrema eficiência e clareza.',
      approvalQuestion: 'Apresentei o painel de treino da vossa IA. Deseja concluir a apresentação na vossa Ficha Corporativa Profissional?'
    },
    {
      id: 'inst-5-perfil', targetTab: 'perfil', title: 'Ficha Corporativa e Operadores',
      subtitle: 'Controlo de Agentes e Averbamentos Profissionais', scrollPosition: 100,
      speechText: 'Concluímos a apresentação interactiva. A vossa entidade encontra-se devidamente chancelada e certificada pelos pontos de barramento do Estado da República de Angola para uma operação rápida, económica e transparente.',
      approvalQuestion: 'A Apresentação Interactiva do Balcão Institucional terminou. Deseja retomar a navegação livre no portal Correio Digital de Angola?'
    }
  ],
  user: [
    {
      id: 'user-1-home', targetTab: 'home', title: 'Painel do Cidadão Angolano',
      subtitle: 'A modernização dos serviços públicos na palma da sua mão', scrollPosition: 390,
      speechText: 'Prezado Cidadão, seja muito bem-vindo à Apresentação Interactiva do Correio Digital Angola. Transformamos o seu Bilhete de Identidade no seu endereço digital oficial, garantindo que notificações, certidões e avisos importantes do Governo cheguem de forma segura e cifrada diretamente ao seu telemóvel, libertando-o das filas e deslocações físicas. No seu painel principal, monitorizamos alertas nacionais e o resumo de trâmites. Vou rolar a página verticalmente para vermos as instituições conectadas.',
      approvalQuestion: 'Apresentei o seu painel pessoal de cidadania. Deseja que eu mude a plataforma para a secção de Correio e Diálogo com as Instituições?'
    },
    {
      id: 'user-2-correio', targetTab: 'correspondencias', title: 'Diálogo Oficial com as Instituições',
      subtitle: 'Comunicações Juridicamente Válidas com a AGT, SME e Serviços', scrollPosition: 360,
      speechText: 'Esta é a sua Caixa de Correio Oficial. Todas as conversas estão organizadas de forma limpa por órgãos como o Serviço de Migração e Estrangeiros ou a Administração Geral Tributária. Receba, assine eletronicamente com o PIN do seu BI Digital e despache requerimentos com o mesmo valor jurídico de um papel timbrado original.',
      approvalQuestion: 'Apresentei a sua correspondência com o Estado. Permite-me navegar para a página de Documentos, Faturas e Certidões?'
    },
    {
      id: 'user-3-documentos', targetTab: 'documentos', title: 'Tramitação de Documentos e Faturas',
      subtitle: 'Facturas Eletrónicas da ENDE, EPAL e Consulta de IPU', scrollPosition: 420,
      speechText: 'Na área de Documentos, pode consultar guias de impostos ou liquidar faturas de energia e água emitidas em todo o território nacional. O nosso assistente de inteligência artificial de voz está sempre à disposição para simplificar e explicar os prazos e termos jurídicos difíceis.',
      approvalQuestion: 'Apresentei a sua tramitação documental. Autoriza o deslocamento para a sua Carteira Digital Única e Offline?'
    },
    {
      id: 'user-4-carteira', targetTab: 'carteira', title: 'Carteira Digital Offline Ciber-Segura',
      subtitle: 'Armazenamento Offline com Validação Jurídica por Código QR', scrollPosition: 400,
      speechText: 'Esta é a sua Carteira Segura. Os seus documentos civis fundamentais, como o BI Digital ou Passaporte, ficam guardados localmente no telemóvel para apresentação regular a fiscais de Estado ou de trânsito em Angola através da verificação de código QR, sem sequer precisar de um plano de internet ativo.',
      approvalQuestion: 'Demonstrei a segurança da sua carteira offline. Deseja finalizar a apresentação na sua Ficha Civil Biométrica?'
    },
    {
      id: 'user-5-perfil', targetTab: 'perfil', title: 'Ficha Civil Nacional e Autenticação Biométrica',
      subtitle: 'Averbamentos Canónicos e Transparência Integrada', scrollPosition: 100,
      speechText: 'A apresentação interactiva chegou ao fim. Aqui está a sua ficha civil e biográfica, devidamente escudada por autenticação biométrica tridimensional. O Correio Digital de Angola orgulha-se de abrir o caminho para um Estado proativo e acolhedor que serve o povo na palma da mão.',
      approvalQuestion: 'A Apresentação Interactiva do Cidadão foi concluída com sucesso. Deseja voltar à navegação livre na plataforma Correio Digital Angola?'
    }
  ]
};

interface ExecutivePilotModeProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tabId: string) => void;
  currentLanguage: LanguageCode;
  appMode?: AppMode;
}

export function ExecutivePilotMode({
  isOpen,
  onClose,
  onNavigateTab,
  currentLanguage,
  appMode = 'user'
}: ExecutivePilotModeProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showApprovalPrompt, setShowApprovalPrompt] = useState(false);
  const [speechMuted, setSpeechMuted] = useState(false);
  
  const currentStepsList = PILOT_STEPS_BY_MODE[appMode] || PILOT_STEPS_BY_MODE.user;
  const currentStep = currentStepsList[stepIdx] || currentStepsList[0];
  const activeSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop synthesizing
  const stopSynthesis = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // Keep step index within bounds if appMode changes abruptly
  useEffect(() => {
    setStepIdx(0);
  }, [appMode]);

  // Coordinated Speech Synthesis & Automatic Smooth Vertical Scrolling
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    let isMounted = true;
    stopSynthesis();
    setShowApprovalPrompt(false);

    // 1. Orquestração da Navegação da Aba no Portal
    onNavigateTab(currentStep.targetTab);

    // 2. Transmissão por Voz via Web Speech Synthesis (Suporte Autónomo Offline & Resiliente)
    const speakStep = () => {
      if (speechMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setTimeout(() => {
          if (isMounted) {
            window.scrollTo({ top: currentStep.scrollPosition, behavior: 'smooth' });
          }
        }, 1200);
        setTimeout(() => {
          if (isMounted) setShowApprovalPrompt(true);
        }, 4500);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(currentStep.speechText);
      utterance.lang = 'pt-PT'; // Institutional natural Portuguese voice preset
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      activeSynthRef.current = utterance;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setTimeout(() => {
          if (isMounted) {
            console.log(`[Apresentação Interactiva] Rolar a página na vertical (${appMode}): top = ${currentStep.scrollPosition}px na aba ${currentStep.targetTab}`);
            window.scrollTo({ top: currentStep.scrollPosition, behavior: 'smooth' });
          }
        }, 1800);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        if (isMounted) {
          setShowApprovalPrompt(true);
        }
      };

      utterance.onerror = (e) => {
        setIsSpeaking(false);
        if (isMounted) {
          setShowApprovalPrompt(true);
        }
      };

      window.speechSynthesis.speak(utterance);
    };

    const startHandler = setTimeout(speakStep, 600);

    return () => {
      isMounted = false;
      clearTimeout(startHandler);
      stopSynthesis();
    };
  }, [stepIdx, isOpen, isPlaying, speechMuted, currentStep, appMode]);

  // Encerramento
  const handleExitPilot = () => {
    stopSynthesis();
    setIsPlaying(false);
    onClose();
  };

  // Aceitação da Orquestração
  const handleApproveAction = () => {
    if (stepIdx < currentStepsList.length - 1) {
      setStepIdx(prev => prev + 1);
      setIsPlaying(true);
      setShowApprovalPrompt(false);
    } else {
      handleExitPilot();
    }
  };

  // Pausar na página atual para livre consulta
  const handlePausePilot = () => {
    stopSynthesis();
    setIsPlaying(false);
    setShowApprovalPrompt(false);
  };

  // Retomar áudio do passo atual
  const handleRepeatSpeech = () => {
    setIsPlaying(true);
    setShowApprovalPrompt(false);
    stopSynthesis();
    setTimeout(() => {
      setIsPlaying(true);
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[99999] pointer-events-none flex items-end justify-center font-sans">
      <div className="max-w-[880px] w-full bg-slate-900/95 backdrop-blur-xl border-2 border-[#0055ff]/40 rounded-[32px] p-6 shadow-[0_0_80px_rgba(0,85,255,0.25)] text-white pointer-events-auto transition-all relative overflow-hidden">
        
        {/* Fundo Decorativo de Brilho */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[#0055ff]/20 via-indigo-500/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        {/* Barra de Status e Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-[#0055ff]/20 border border-[#0055ff]/50 text-[#66a3ff] flex items-center justify-center shrink-0 shadow-lg shadow-[#0055ff]/10">
              {isSpeaking ? (
                <Sparkles size={22} className="text-[#66a3ff] animate-spin" />
              ) : appMode === 'institution' ? (
                <Building2 size={22} className="text-[#66a3ff]" />
              ) : appMode === 'user' ? (
                <User size={22} className="text-[#66a3ff]" />
              ) : (
                <Landmark size={22} className="text-[#66a3ff]" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#0055ff]/15 text-[#99c2ff] border border-[#0055ff]/40 text-[9.5px] font-black uppercase font-mono px-2 py-0.5 rounded-md tracking-wider">
                  APRESENTAÇÃO INTERACTIVA &bull; PASSO {stepIdx + 1}/{currentStepsList.length}
                </span>
                <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  isPlaying ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  {isPlaying ? 'A rolar a página em explicação' : 'Pausado para livre consulta'}
                </span>
              </div>
              <h3 className="text-base md:text-xl font-black text-white tracking-tight uppercase truncate mt-1">
                {currentStep.title}
              </h3>
            </div>
          </div>

          {/* Comandos Auxiliares */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSpeechMuted(!speechMuted)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer border border-slate-700/60"
              title={speechMuted ? "Ativar Áudio da Apresentação" : "Silenciar Áudio"}
            >
              {speechMuted ? <VolumeX size={17} className="text-rose-400" /> : <Volume2 size={17} className="text-[#66a3ff] animate-pulse" />}
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer border border-slate-700/60 flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
              title={isPlaying ? "Pausar Orquestração" : "Retomar Assistente"}
            >
              {isPlaying ? <Pause size={17} className="text-amber-400" /> : <Play size={17} className="text-emerald-400" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pausar' : 'Retomar'}</span>
            </button>

            <button
              type="button"
              onClick={handleApproveAction}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer border border-slate-700/60 flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
              title="Avançar diretamente para a página seguinte"
            >
              <SkipForward size={17} className="text-blue-400" />
              <span className="hidden sm:inline">Saltar</span>
            </button>

            <button
              type="button"
              onClick={handleExitPilot}
              className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-100 transition-all cursor-pointer border border-rose-500/30 flex items-center justify-center ml-2"
              title="Sair da Apresentação Interactiva"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Informação Operacional Injetada pela IA no Ecrã */}
        <div className="py-4 space-y-2 text-left">
          <span className="text-[10px] font-black uppercase text-[#66a3ff] font-mono tracking-widest block flex items-center gap-1.5">
            <Activity size={13} className="text-[#66a3ff]" />
            <span>TRANSMISSÃO AUDIOVISUAL DA SECÇÃO:</span>
          </span>
          <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed bg-slate-950/70 border border-slate-800 p-4 rounded-2xl">
            {currentStep.speechText}
          </p>
        </div>

        {/* --- HUMAN-IN-THE-LOOP MOLDURA DE APROVAÇÃO OBRIGATÓRIA --- */}
        <AnimatePresence>
          {showApprovalPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-gradient-to-r from-[#002266] via-indigo-950 to-slate-950 border-2 border-[#00dd82] rounded-2xl p-5 shadow-2xl mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="w-11 h-11 rounded-xl bg-[#00dd82]/20 border border-[#00dd82] text-[#00dd82] flex items-center justify-center shrink-0 animate-pulse">
                  <ShieldCheck size={24} className="stroke-[2.5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-black uppercase font-mono tracking-wider text-[#00dd82] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00dd82] inline-block animate-ping" />
                    <span>PERGUNTA INTERACTIVA PARA O OPERADOR</span>
                  </div>
                  <h4 className="text-sm md:text-base font-black text-white leading-normal mt-0.5">
                    {currentStep.approvalQuestion}
                  </h4>
                </div>
              </div>

              {/* Botões do Ecrã de Aprovação */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleRepeatSpeech}
                  className="px-4 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-slate-650 cursor-pointer shadow-sm active:scale-95"
                >
                  <RotateCcw size={15} className="text-[#66a3ff]" />
                  <span>Repetir Explicação</span>
                </button>

                <button
                  type="button"
                  onClick={handlePausePilot}
                  className="px-4 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-slate-650 cursor-pointer shadow-sm active:scale-95"
                >
                  <Lock size={15} className="text-amber-400" />
                  <span>Pausar / Focar Aqui</span>
                </button>

                <button
                  type="button"
                  onClick={handleApproveAction}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#00dd82] to-[#00925d] hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-[#00dd82]/20 flex items-center gap-2 cursor-pointer transition-all active:scale-95 border-0 font-sans"
                >
                  <Check size={16} className="stroke-[3]" />
                  <span>{stepIdx < currentStepsList.length - 1 ? 'Mudar de Página' : 'Concluir Apresentação'}</span>
                  <ArrowRight size={15} className="stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
