/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, 
  Scale, 
  Briefcase, 
  FolderOpen, 
  Factory, 
  Award, 
  MapPin, 
  Search, 
  ArrowLeft, 
  Check, 
  ChevronRight, 
  Building,
  X,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { instituicoes_publicas_angola, CategoriaAngola, InstituicaoAngola } from '../../constants/instituicoes_publicas_angola';

function renderCatIcon(nomeIcone: string, size = 20) {
  switch (nomeIcone) {
    case 'Landmark': return <Landmark size={size} />;
    case 'Scale': return <Scale size={size} />;
    case 'Briefcase': return <Briefcase size={size} />;
    case 'FolderOpen': return <FolderOpen size={size} />;
    case 'Factory': return <Factory size={size} />;
    case 'Award': return <Award size={size} />;
    case 'MapPin': return <MapPin size={size} />;
    default: return <Building2 size={size} />;
  }
}

interface InstitutionalRecipientPickerProps {
  value: string;
  onChange: (institutionName: string) => void;
  disabled?: boolean;
}

export function InstitutionalRecipientPicker({
  value,
  onChange,
  disabled = false
}: InstitutionalRecipientPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-fechar se o utilizador clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Limpar busca quando a categoria muda
  const handleSelectCategory = (catId: string) => {
    setSelectedCatId(catId);
    setSearchTerm('');
  };

  // Voltar à etapa de categorias
  const handleBackToCategories = () => {
    setSelectedCatId(null);
    setSearchTerm('');
  };

  // As instituições filtradas pela categoria ativa
  const filteredInstitutions = useMemo(() => {
    if (!selectedCatId) return [];
    return instituicoes_publicas_angola.dados.filter(inst => inst.categoria === selectedCatId);
  }, [selectedCatId]);

  // Os resultados finais baseados no searchTerm
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return filteredInstitutions;
    const term = searchTerm.toLowerCase();
    return filteredInstitutions.filter(
      inst => 
        inst.nome.toLowerCase().includes(term) || 
        inst.sigla.toLowerCase().includes(term)
    );
  }, [filteredInstitutions, searchTerm]);

  // A instituição atual selecionada (se houver) para dar info rica
  const selectedInstitutionObj = useMemo(() => {
    if (!value) return null;
    const valNormalized = value.trim().toLowerCase();
    return instituicoes_publicas_angola.dados.find(
      inst => 
        inst.nome.toLowerCase() === valNormalized || 
        inst.sigla.toLowerCase() === valNormalized ||
        valNormalized.includes(inst.sigla.toLowerCase())
    );
  }, [value]);

  const handleFinishSelection = (inst: InstituicaoAngola) => {
    onChange(inst.nome);
    setShowSuccessFeedback(true);
    setTimeout(() => {
      setShowSuccessFeedback(false);
      setIsOpen(false);
      setSelectedCatId(null);
      setSearchTerm('');
    }, 450);
  };

  return (
    <div className="relative font-sans text-left" ref={containerRef}>
      {/* Botão de Trigger (Substitui o Select / Input antigo) */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full bg-white border rounded-2xl px-5 py-3.5 md:py-4 text-xs md:text-sm font-bold focus:ring-4 focus:ring-primary/10 transition-all outline-none flex items-center justify-between cursor-pointer active:scale-[0.99] select-none ${
          isOpen ? 'border-primary ring-2 ring-primary/20 shadow-md bg-slate-50/50' : 'border-line hover:border-slate-400 shadow-3xs text-primary'
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-100' : ''}`}
      >
        <div className="flex items-center gap-3 truncate min-w-0">
          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {selectedInstitutionObj ? (
              <Building size={16} className="text-primary" />
            ) : (
              <Search size={16} className="text-slate-500" />
            )}
          </div>
          <div className="flex flex-col text-left truncate min-w-0">
            {value ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="truncate font-black text-slate-900 text-xs md:text-sm">{value}</span>
                  {selectedInstitutionObj && (
                    <span className="bg-primary/10 text-primary border border-primary/20 text-[9px] font-black font-mono uppercase px-2 py-0.5 rounded-md shrink-0">
                      {selectedInstitutionObj.sigla}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold text-slate-400 mt-0.5">
                  {selectedInstitutionObj ? selectedInstitutionObj.categoria : 'Destinatário Institucional Customizado'}
                </span>
              </>
            ) : (
              <span className="text-slate-400 font-semibold text-xs md:text-sm">Selecione uma instituição (450+ órgãos)...</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {showSuccessFeedback && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-600 flex items-center gap-1">
              <CheckCircle2 size={18} className="fill-emerald-100 text-emerald-600 animate-bounce" />
            </motion.div>
          )}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-slate-400 transition-transform ${isOpen ? 'rotate-180 bg-slate-200 text-slate-700' : 'hover:bg-slate-100'}`}>
            ▼
          </div>
        </div>
      </button>

      {/* Popover Customizado com Seleção em Etapas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] bg-white border border-slate-200/80 rounded-[28px] shadow-2xl overflow-hidden flex flex-col max-h-[460px] md:max-h-[500px]"
          >
            {/* Header do Popover */}
            <div className="bg-gradient-to-r from-slate-900 via-[#0c2340] to-indigo-950 px-6 py-4 text-white flex items-center justify-between shrink-0 shadow-sm relative">
              <div className="flex items-center gap-3">
                {selectedCatId ? (
                  <button
                    type="button"
                    onClick={handleBackToCategories}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white cursor-pointer border-0 bg-transparent transition-all shrink-0 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider"
                    title="Voltar para as categorias"
                  >
                    <ArrowLeft size={16} />
                    <span>Categorias</span>
                  </button>
                ) : (
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20 shrink-0">
                    <Building2 size={18} className="text-indigo-200" />
                  </div>
                )}
                <div className="truncate">
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-indigo-300">
                    {selectedCatId ? 'Etapa 2 de 2' : 'Filtro Institucional (Etapa 1 de 2)'}
                  </div>
                  <h4 className="text-sm md:text-base font-black italic tracking-tight uppercase truncate mt-0.5">
                    {selectedCatId ? selectedCatId : 'Escolha a Categoria do Estado'}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer bg-transparent border-0 shrink-0 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conteúdo Dinâmico com Framer Motion Slide */}
            <div className="flex-1 overflow-hidden relative flex flex-col bg-slate-50/30">
              <AnimatePresence mode="wait">
                {!selectedCatId ? (
                  /* --- ETAPA 1: LISTA DE CATEGORIAS --- */
                  <motion.div
                    key="etapa-categorias"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1 overflow-y-auto p-3.5 md:p-4 space-y-2 custom-scrollbar"
                  >
                    {instituicoes_publicas_angola.categorias.map(cat => {
                      const numInst = instituicoes_publicas_angola.dados.filter(d => d.categoria === cat.id).length;
                      return (
                        <motion.button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          whileHover={{ scale: 1.01, backgroundColor: '#f8fafc' }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full bg-white hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-3xs flex items-center justify-between text-left transition-all cursor-pointer group"
                        >
                          <div className="flex items-start gap-4 min-w-0 flex-1">
                            <div className="w-11 h-11 rounded-2xl bg-indigo-50 group-hover:bg-primary group-hover:text-white text-indigo-755 border border-indigo-100 flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                              {renderCatIcon(cat.icone, 22)}
                            </div>
                            <div className="space-y-1 min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-black text-slate-900 text-xs md:text-sm group-hover:text-primary transition-colors truncate">
                                  {cat.nome}
                                </span>
                                <span className="bg-slate-100 group-hover:bg-indigo-100 group-hover:text-indigo-800 text-slate-600 text-[10px] font-extrabold px-2 py-0.5 rounded-full font-mono shrink-0 transition-colors">
                                  {numInst} órgãos
                                </span>
                              </div>
                              <p className="text-[11px] font-semibold text-slate-500 leading-normal line-clamp-2">
                                {cat.descricao}
                              </p>
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ) : (
                  /* --- ETAPA 2: FILTRAGEM E SELEÇÃO DAS INSTITUIÇÕES --- */
                  <motion.div
                    key="etapa-instituicoes"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1 flex flex-col overflow-hidden"
                  >
                    {/* Campo de Busca Rápida na Categoria */}
                    <div className="p-3.5 md:p-4 bg-white border-b border-slate-200/80 shrink-0 relative">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                          type="text"
                          autoFocus
                          placeholder={`Buscar instituição em ${selectedCatId}...`}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full bg-slate-100/80 border border-slate-200 rounded-2xl pl-11 pr-10 py-3 text-xs md:text-sm font-bold text-slate-900 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                        />
                        {searchTerm && (
                          <button
                            type="button"
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-[10px] font-black border-0 cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Lista das Instituições Filtradas */}
                    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-1.5 custom-scrollbar">
                      {searchResults.length > 0 ? (
                        searchResults.map((inst) => {
                          const isSelected = inst.nome === value;
                          return (
                            <motion.button
                              key={inst.nome}
                              type="button"
                              onClick={() => handleFinishSelection(inst)}
                              whileHover={{ scale: 1.01, backgroundColor: isSelected ? '#eff6ff' : '#ffffff' }}
                              whileTap={{ scale: 0.99 }}
                              className={`w-full p-3.5 md:p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group shadow-3xs ${
                                isSelected 
                                  ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-100 text-slate-900 font-extrabold' 
                                  : 'bg-white hover:bg-white border-slate-200/80 text-slate-750 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono font-black text-xs ${
                                  isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary'
                                }`}>
                                  {inst.sigla.slice(0, 3)}
                                </div>
                                <div className="truncate min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className={`text-xs md:text-sm truncate block font-black ${
                                      isSelected ? 'text-blue-950 font-black' : 'text-slate-900 group-hover:text-primary'
                                    }`}>
                                      {inst.nome}
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block mt-0.5">
                                    SIGLA: {inst.sigla}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 ml-3">
                                {isSelected ? (
                                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs animate-pulse">
                                    <Check size={14} className="stroke-[3]" />
                                  </div>
                                ) : (
                                  <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-primary transition-colors flex items-center gap-1">
                                    <span>Seleccionar</span>
                                    <ChevronRight size={14} />
                                  </span>
                                )}
                              </div>
                            </motion.button>
                          );
                        })
                      ) : (
                        <div className="p-8 text-center text-slate-400 space-y-2">
                          <Building className="mx-auto text-slate-300" size={32} />
                          <p className="text-xs md:text-sm font-extrabold">Nenhum órgão público localizado para "{searchTerm}"</p>
                          <p className="text-[10px] font-medium">Verifique os termos da pesquisa ou tente outra categoria.</p>
                        </div>
                      )}
                    </div>

                    {/* Rodapé: Alterar Categoria */}
                    <div className="p-3.5 bg-slate-100 border-t border-slate-200 shrink-0 flex items-center justify-between text-xs font-black">
                      <span className="text-slate-500 uppercase tracking-widest text-[10px] pl-1">
                        Mostrando {searchResults.length} {searchResults.length === 1 ? 'órgão' : 'órgãos'}
                      </span>
                      <button
                        type="button"
                        onClick={handleBackToCategories}
                        className="text-primary hover:text-indigo-800 transition-colors cursor-pointer bg-transparent border-0 hover:underline flex items-center gap-1 py-1 px-2 uppercase tracking-wider text-[10.5px]"
                      >
                        <ArrowLeft size={13} />
                        <span>Alterar Categoria</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
