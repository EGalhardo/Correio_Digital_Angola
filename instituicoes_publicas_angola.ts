/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InstituicaoAngola {
  nome: string;
  sigla: string;
  categoria: string;
}

export interface CategoriaAngola {
  id: string;
  nome: string;
  icone: string;
  descricao: string;
  instituicoes?: InstituicaoAngola[];
}

export const instituicoes_publicas_angola: {
  categorias: CategoriaAngola[];
  dados: InstituicaoAngola[];
} = {
  categorias: [
    {
      id: "Órgãos de Soberania",
      nome: "Órgãos de Soberania",
      icone: "Landmark",
      descricao: "Presidência da República, Assembleia Nacional e Órgãos Executivos Centrais de Estado",
    },
    {
      id: "Tribunais e Justiça",
      nome: "Tribunais e Órgãos de Justiça",
      icone: "Scale",
      descricao: "Tribunais Superiores, Procuradoria Geral, Provedoria de Justiça e Tribunais da Relação",
    },
    {
      id: "Ministérios Centralizados",
      nome: "Ministérios Centralizados",
      icone: "Briefcase",
      descricao: "Departamentos Ministeriais da Administração Central do Estado Angolano",
    },
    {
      id: "Institutos e Serviços Públicos",
      nome: "Institutos e Serviços Públicos",
      icone: "FolderOpen",
      descricao: "Serviço de Migração (SME), Administração Tributária (AGT), INSS, INE e Entidades de Apoio",
    },
    {
      id: "Empresas Públicas e Utilitários",
      nome: "Empresas Públicas e Utilitários",
      icone: "Factory",
      descricao: "Distribuição de Energia (ENDE), Águas (EPAL), Sonangol, Telecomunicações e Portos",
    },
    {
      id: "Saúde, Ensino e Ciência",
      nome: "Saúde, Ensino e Ciência",
      icone: "Award",
      descricao: "Hospitais Nacionais de Referência, Centros de Pesquisa e Universidades Públicas",
    },
    {
      id: "Governos Provinciais e Locais",
      nome: "Governos Provinciais e Locais",
      icone: "MapPin",
      descricao: "Governos Provinciais (GPL, etc.) e Administrações Municipais de todo o País",
    }
  ],
  dados: [
    // --- Órgãos de Soberania ---
    { nome: "Presidência da República de Angola", sigla: "PR", categoria: "Órgãos de Soberania" },
    { nome: "Assembleia Nacional de Angola", sigla: "AN", categoria: "Órgãos de Soberania" },
    { nome: "Vice-Presidência da República de Angola", sigla: "VPR", categoria: "Órgãos de Soberania" },
    { nome: "Casa Civil do Presidente da República", sigla: "CCPR", categoria: "Órgãos de Soberania" },
    { nome: "Casa Militar do Presidente da República", sigla: "CMPR", categoria: "Órgãos de Soberania" },
    { nome: "Gabinete do Secretário Geral do Presidente da República", sigla: "GSGPR", categoria: "Órgãos de Soberania" },
    { nome: "Conselho de Segurança Nacional", sigla: "CSN", categoria: "Órgãos de Soberania" },
    
    // --- Tribunais e Justiça ---
    { nome: "Tribunal Constitucional de Angola", sigla: "TC", categoria: "Tribunais e Justiça" },
    { nome: "Supremo Tribunal de Justiça", sigla: "STJ", categoria: "Tribunais e Justiça" },
    { nome: "Tribunal de Contas de Angola", sigla: "TdB", categoria: "Tribunais e Justiça" },
    { nome: "Supremo Tribunal Militar", sigla: "STM", categoria: "Tribunais e Justiça" },
    { nome: "Procuradoria Geral da República", sigla: "PGR", categoria: "Tribunais e Justiça" },
    { nome: "Provedoria de Justiça da República de Angola", sigla: "PdJ", categoria: "Tribunais e Justiça" },
    { nome: "Tribunal da Relação de Luanda", sigla: "TRL", categoria: "Tribunais e Justiça" },
    { nome: "Tribunal da Relação de Benguela", sigla: "TRB", categoria: "Tribunais e Justiça" },
    { nome: "Tribunal da Relação da Huíla", sigla: "TRH", categoria: "Tribunais e Justiça" },
    { nome: "Inspecção Geral da Administração do Estado", sigla: "IGAE", categoria: "Tribunais e Justiça" },

    // --- Ministérios Centralizados ---
    { nome: "Ministério das Finanças", sigla: "MINFIN", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Justiça e dos Direitos Humanos", sigla: "MINJUSDH", categoria: "Ministérios Centralizados" },
    { nome: "Ministério do Interior", sigla: "MININT", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Defesa Nacional e Veteranos da Pátria", sigla: "MINDENVP", categoria: "Ministérios Centralizados" },
    { nome: "Ministério das Relações Exteriores", sigla: "MIREX", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Administração do Território", sigla: "MAT", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Administração Pública, Trabalho e Segurança Social", sigla: "MAPTSS", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Saúde", sigla: "MINSA", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Educação", sigla: "MED", categoria: "Ministérios Centralizados" },
    { nome: "Ministério do Ensino Superior, Ciência, Tecnologia e Inovação", sigla: "MESCTI", categoria: "Ministérios Centralizados" },
    { nome: "Ministério dos Recursos Minerais, Petróleo e Gás", sigla: "MIREMPET", categoria: "Ministérios Centralizados" },
    { nome: "Ministério das Telecomunicações, Tecnologias de Informação e Comunicação Social", sigla: "MINTTICS", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Energia e Águas", sigla: "MINEA", categoria: "Ministérios Centralizados" },
    { nome: "Ministério das Obras Públicas, Urbanismo e Habitação", sigla: "MINOPUH", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Economia e Planeamento", sigla: "MEP", categoria: "Ministérios Centralizados" },
    { nome: "Ministério dos Transportes", sigla: "MINTRANS", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Agricultura e Florestas", sigla: "MINAGRIF", categoria: "Ministérios Centralizados" },
    { nome: "Ministério das Pescas e Recursos Marinhos", sigla: "MINPESMAR", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Indústria e Comércio", sigla: "MINDCOM", categoria: "Ministérios Centralizados" },
    { nome: "Ministério do Turismo", sigla: "MINTUR", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Cultura", sigla: "MINCULT", categoria: "Ministérios Centralizados" },
    { nome: "Ministério do Ambiente", sigla: "MINAMB", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Acção Social, Família e Promoção da Mulher", sigla: "MASFAMU", categoria: "Ministérios Centralizados" },
    { nome: "Ministério da Juventude e Desportos", sigla: "MINJUD", categoria: "Ministérios Centralizados" },

    // --- Institutos e Serviços Públicos ---
    { nome: "Administração Geral Tributária", sigla: "AGT", categoria: "Institutos e Serviços Públicos" },
    { nome: "Serviço de Migração e Estrangeiros", sigla: "SME", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional de Segurança Social", sigla: "INSS", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional de Estatística", sigla: "INE", categoria: "Institutos e Serviços Públicos" },
    { nome: "Polícia Nacional de Angola", sigla: "PNA", categoria: "Institutos e Serviços Públicos" },
    { nome: "Serviço de Protecção Civil e Bombeiros", sigla: "SPCB", categoria: "Institutos e Serviços Públicos" },
    { nome: "Serviço de Investigação Criminal", sigla: "SIC", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional de Apoio às Micro, Pequenas e Médias Empresas", sigla: "INAPEM", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional de Gestão de Bolsas de Estudo", sigla: "INAGBE", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional das Indústrias Culturais e Criativas", sigla: "INICC", categoria: "Institutos e Serviços Públicos" },
    { nome: "Agência de Investimento Privado e Promoção das Exportações", sigla: "AIPEX", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Angolano das Comunicações", sigla: "INACOM", categoria: "Institutos e Serviços Públicos" },
    { nome: "Instituto Nacional de Defesa do Consumidor", sigla: "INADEC", categoria: "Institutos e Serviços Públicos" },
    { nome: "Arquivo Nacional de Angola", sigla: "ANA", categoria: "Institutos e Serviços Públicos" },
    { nome: "Conservatória dos Registos Centrais de Luanda", sigla: "CRCL", categoria: "Institutos e Serviços Públicos" },
    { nome: "Imprensa Nacional - Empresa Pública", sigla: "INEP", categoria: "Institutos e Serviços Públicos" },

    // --- Empresas Públicas e Utilitários ---
    { nome: "Empresa Nacional de Distribuição de Electricidade", sigla: "ENDE", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Empresa Pública de Águas de Luanda", sigla: "EPAL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Sociedade Nacional de Combustíveis de Angola", sigla: "SONANGOL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Empresa de Produção de Electricidade", sigla: "PRODEL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Rede Nacional de Transporte de Electricidade", sigla: "RNT", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Unitel - Serviços de Telecomunicações", sigla: "UNITEL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Angola Telecom", sigla: "ANGOLATEL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Caminho de Ferro de Luanda", sigla: "CFL", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Caminho de Ferro de Benguela", sigla: "CFB", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Empresa Portuária de Luanda", sigla: "PORTO-LUANDA", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Empresa Portuária do Lobito", sigla: "PORTO-LOBITO", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Empresa Nacional de Exploração de Aeroportos e Navegação Aérea", sigla: "ENANA", categoria: "Empresas Públicas e Utilitários" },
    { nome: "Bolsa de Dívida e Valores de Angola", sigla: "BODIVA", categoria: "Empresas Públicas e Utilitários" },

    // --- Saúde, Ensino e Ciência ---
    { nome: "Hospital Josina Machel (Maria Pia)", sigla: "HJM", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Hospital Américo Boavida", sigla: "HAB", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Complexo Hospitalar de Doenças Cárdio-Pulmonares Cardeal Dom Alexandre do Nascimento", sigla: "CHDCP", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Maternidade Lucrécia Paim", sigla: "MLP", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Hospital Pediátrico David Bernardino", sigla: "HPDB", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Hospital Geral Especializado Neves Bendinha", sigla: "HGENB", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Hospital Geral de Luanda", sigla: "HGL", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Hospital Prenda", sigla: "HPRENDA", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Universidade Agostinho Neto", sigla: "UAN", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Universidade Katyavala Bwila", sigla: "UKB", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Universidade Mandume ya Ndemufayo", sigla: "UMN", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Universidade Kimpa Vita", sigla: "UNIKIVI", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Universidade 11 de Novembro", sigla: "UON", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Instituto Nacional de Investigação em Saúde", sigla: "INIS", categoria: "Saúde, Ensino e Ciência" },
    { nome: "Instituto Nacional de Investigação e Desenvolvimento da Educação", sigla: "INIDE", categoria: "Saúde, Ensino e Ciência" },

    // --- Governos Provinciais e Locais ---
    { nome: "Governo Provincial de Luanda", sigla: "GPL", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial de Benguela", sigla: "GPB", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial da Huíla", sigla: "GPH", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial de Cabinda", sigla: "GPC", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Huambo", sigla: "GPHUAMBO", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Bié", sigla: "GPBIE", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial da Lunda Sul", sigla: "GPLS", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial da Lunda Norte", sigla: "GPLN", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Moxico", sigla: "GPM", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial de Malanje", sigla: "GPMAL", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Uíge", sigla: "GPUIGE", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Namibe", sigla: "GPNAM", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Cunene", sigla: "GPCUN", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Zaire", sigla: "GPZAI", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Bengo", sigla: "GPBENGO", categoria: "Governos Provinciais e Locais" },
    { nome: "Governo Provincial do Cuando Cubango", sigla: "GPCC", categoria: "Governos Provinciais e Locais" },
    { nome: "Administração Municipal do Kilamba Kiaxi", sigla: "AMKK", categoria: "Governos Provinciais e Locais" },
    { nome: "Administração Municipal de Talatona", sigla: "AMT", categoria: "Governos Provinciais e Locais" },
    { nome: "Administração Municipal de Viana", sigla: "AMV", categoria: "Governos Provinciais e Locais" },
    { nome: "Administração Municipal do Cazenga", sigla: "AMC", categoria: "Governos Provinciais e Locais" }
  ]
};

// Auto populate the institutions inside categories for immediate reference helper
instituicoes_publicas_angola.categorias.forEach(cat => {
  cat.instituicoes = instituicoes_publicas_angola.dados.filter(d => d.categoria === cat.id);
});
