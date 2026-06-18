import { translateText } from '../src/utils/translator';
import { LanguageCode } from '../src/types';

const langs: LanguageCode[] = ['pt', 'um', 'ki', 'kk', 'ch', 'ng', 'kw', 'nh', 'fi'];
const termosDeTeste = [
  "Painel", "Correio", "Contactos", "Conta", "Trabalhadores", 
  "PESQUISA POR VOZ", "O que pretende consultar hoje?",
  "Destaques & Novidades", "Abrir Pasta Digital"
];

console.log('🌐 AUDITORIA DE TRADUÇÃO I18N EM LÍNGUAS NACIONAIS DE ANGOLA 🌐\n');

termosDeTeste.forEach(termo => {
  console.log(`--- TERMO: "${termo}" ---`);
  langs.forEach(l => {
    const trad = translateText(termo, l);
    console.log(`  [${l.toUpperCase()}]: ${trad}`);
  });
  console.log('');
});
