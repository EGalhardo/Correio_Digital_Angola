/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MunicipioAngola {
  id: number;
  nome: string;
  comunas: string[];
}

export interface ProvinciaAngola {
  id: number;
  nome: string;
  capital: string;
  codigo: string;
  regiao: string;
  municipios: MunicipioAngola[];
  cidades?: string[];
}

export const PROVINCIAS_ANGOLA: ProvinciaAngola[] = [
  {
    id: 1,
    nome: "Bengo",
    capital: "Caxito",
    codigo: "BGO",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Ambriz", comunas: ["Ambriz", "Bela Vista", "Tabi", "Muxaluando"] },
      { id: 2, nome: "Bula Atumba", comunas: ["Bula Atumba", "Quiage"] },
      { id: 3, nome: "Dande", comunas: ["Caxito", "Mabubas", "Úcua"] },
      { id: 4, nome: "Dembos", comunas: ["Dembos", "Piri", "Quibaxe"] },
      { id: 5, nome: "Nambuangongo", comunas: ["Nambuangongo", "Muxima", "Zala"] },
      { id: 6, nome: "Pango Aluquém", comunas: ["Pango Aluquém", "Quixinje"] }
    ],
    cidades: ["Caxito", "Ambriz", "Bula Atumba", "Nambuangongo", "Pango Aluquém", "Dembos"]
  },
  {
    id: 2,
    nome: "Benguela",
    capital: "Benguela",
    codigo: "BGU",
    regiao: "Centro",
    municipios: [
      { id: 1, nome: "Balombo", comunas: ["Balombo", "Chindumbo", "Maca Mombolo"] },
      { id: 2, nome: "Baía Farta", comunas: ["Baía Farta", "Dombe Grande", "Equimina"] },
      { id: 3, nome: "Benguela", comunas: ["Benguela", "Baia Azul", "Calohanga"] },
      { id: 4, nome: "Bocoio", comunas: ["Bocoio", "Chila", "Cubal do Lumbo", "Monte Belo"] },
      { id: 5, nome: "Caimbambo", comunas: ["Caimbambo", "Catumbela", "Passe"] },
      { id: 6, nome: "Catumbela", comunas: ["Catumbela", "Biopio", "Praia Bebé"] },
      { id: 7, nome: "Chongorói", comunas: ["Chongorói", "Caiate", "Chicuma"] },
      { id: 8, nome: "Cubal", comunas: ["Cubal", "Capupa", "Tumbulo"] },
      { id: 9, nome: "Ganda", comunas: ["Ganda", "Babaera", "Chicuma", "Casseque"] },
      { id: 10, nome: "Lobito", comunas: ["Lobito", "Canata", "Egipto Praia", "Compão"] }
    ],
    cidades: ["Benguela", "Lobito", "Catumbela", "Baía Farta", "Ganda", "Cubal", "Balombo", "Bocoio", "Caimbambo", "Chongorói"]
  },
  {
    id: 3,
    nome: "Bié",
    capital: "Cuíto",
    codigo: "BIE",
    regiao: "Centro",
    municipios: [
      { id: 1, nome: "Andulo", comunas: ["Andulo", "Calucinga", "Cassumbe"] },
      { id: 2, nome: "Camacupa", comunas: ["Camacupa", "Cuanza", "Ringoma", "Umpulo"] },
      { id: 3, nome: "Catabola", comunas: ["Catabola", "Chipeta", "Chivaulo", "Cangote", "Gamba"] },
      { id: 4, nome: "Chinguar", comunas: ["Chinguar", "Chissamba", "Luando"] },
      { id: 5, nome: "Chitembo", comunas: ["Chitembo", "Cangombe", "Cuanza", "Malengue"] },
      { id: 6, nome: "Cuemba", comunas: ["Cuemba", "Sachinemuna"] },
      { id: 7, nome: "Cunhinga", comunas: ["Cunhinga", "Cutato", "Sande"] },
      { id: 8, nome: "Cuíto", comunas: ["Cuíto", "Trumba", "Cambândua"] },
      { id: 9, nome: "Nharea", comunas: ["Nharea", "Dando", "Gamba", "Léua"] }
    ],
    cidades: ["Cuíto", "Andulo", "Camacupa", "Catabola", "Chinguar", "Chitembo", "Cuemba", "Cunhinga", "Nharea"]
  },
  {
    id: 4,
    nome: "Cabinda",
    capital: "Cabinda",
    codigo: "CAB",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Belize", comunas: ["Belize", "Luali", "Miconge"] },
      { id: 2, nome: "Buco-Zau", comunas: ["Buco-Zau", "Inhuca", "Necuto"] },
      { id: 3, nome: "Cabinda", comunas: ["Cabinda", "Malembo", "Tando Zinze"] },
      { id: 4, nome: "Cacongo", comunas: ["Cacongo", "Dinge", "Massabi", "Lândana"] }
    ],
    cidades: ["Cabinda", "Cacongo", "Buco-Zau", "Belize"]
  },
  {
    id: 5,
    nome: "Cuando Cubango",
    capital: "Menongue",
    codigo: "CCU",
    regiao: "Sul",
    municipios: [
      { id: 1, nome: "Calai", comunas: ["Calai", "Maué", "Mavengue"] },
      { id: 2, nome: "Cuangar", comunas: ["Cuangar"] },
      { id: 3, nome: "Cuchi", comunas: ["Cuchi", "Cutato", "Vissati"] },
      { id: 4, nome: "Cuito Cuanavale", comunas: ["Cuito Cuanavale", "Longa", "Lupire"] },
      { id: 5, nome: "Dirico", comunas: ["Dirico", "Diruco", "Mucusso"] },
      { id: 6, nome: "Menongue", comunas: ["Menongue", "Caiundo", "Cutuile", "Missombo"] },
      { id: 7, nome: "Nankova", comunas: ["Nankova"] },
      { id: 8, nome: "Rivungo", comunas: ["Rivungo"] }
    ],
    cidades: ["Menongue", "Cuito Cuanavale", "Cuchi", "Calai", "Dirico", "Cuangar", "Nankova", "Rivungo"]
  },
  {
    id: 6,
    nome: "Cuando Mavinga",
    capital: "Mavinga",
    codigo: "CMV",
    regiao: "Sul",
    municipios: [
      { id: 1, nome: "Mavinga", comunas: ["Mavinga", "Cunjamba", "Luengue", "Neriquinha"] }
    ],
    cidades: ["Mavinga", "Cunjamba"]
  },
  {
    id: 7,
    nome: "Cuanza Norte",
    capital: "N'dalatando",
    codigo: "CNO",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Ambaca", comunas: ["Ambaca", "Bindo", "Camame", "Dimenso", "Luremo", "Tango"] },
      { id: 2, nome: "Banga", comunas: ["Banga", "Aldeia Nova", "Cota"] },
      { id: 3, nome: "Bolongongo", comunas: ["Bolongongo", "Cariamba"] },
      { id: 4, nome: "Cambambe", comunas: ["Cambambe", "Dondo", "Massangano", "Zenza do Itombe"] },
      { id: 5, nome: "Cazengo", comunas: ["Cazengo", "Mabubas", "Cage", "Kixico"] },
      { id: 6, nome: "Golungo Alto", comunas: ["Golungo Alto", "Camabatela", "Quiculungo", "Gombe"] },
      { id: 7, nome: "Gonguembo", comunas: ["Gonguembo", "Cassoneca", "Zala"] },
      { id: 8, nome: "Lucala", comunas: ["Lucala", "Quiculungo", "Tenze"] },
      { id: 9, nome: "N'dalatando", comunas: ["N'dalatando", "Canhoca"] },
      { id: 10, nome: "Samba Cajú", comunas: ["Samba Cajú", "Bula Atumba", "Kabuta"] }
    ],
    cidades: ["N'dalatando", "Cambambe", "Cazengo", "Lucala", "Ambaca", "Bolongongo", "Golungo Alto", "Gonguembo", "Samba Cajú", "Banga"]
  },
  {
    id: 8,
    nome: "Cuanza Sul",
    capital: "Sumbe",
    codigo: "CSU",
    regiao: "Centro",
    municipios: [
      { id: 1, nome: "Amboim", comunas: ["Amboim", "Gabela", "Kikombo"] },
      { id: 2, nome: "Cassongue", comunas: ["Cassongue", "Atóme", "Sanga"] },
      { id: 3, nome: "Conda", comunas: ["Conda", "Cunjo"] },
      { id: 4, nome: "Ebo", comunas: ["Ebo", "Assango", "Quissongo"] },
      { id: 5, nome: "Libolo", comunas: ["Calulo", "Munenga", "Quisseje", "Cabuta"] },
      { id: 6, nome: "Mussende", comunas: ["Mussende", "Quibala", "Cariango"] },
      { id: 7, nome: "Porto Amboim", comunas: ["Porto Amboim", "Capolo", "Kilenda"] },
      { id: 8, nome: "Quibala", comunas: ["Quibala", "Dala Cachibo", "Ebo"] },
      { id: 9, nome: "Quilenda", comunas: ["Quilenda", "Ucu Seles"] },
      { id: 10, nome: "Seles", comunas: ["Seles", "Conda", "Waku Kungo"] },
      { id: 11, nome: "Sumbe", comunas: ["Sumbe", "Gungo", "Quicombo"] },
      { id: 12, nome: "Waku Kungo", comunas: ["Waku Kungo", "Cela", "Kungo"] }
    ],
    cidades: ["Sumbe", "Porto Amboim", "Waku Kungo", "Gabela", "Quibala", "Libolo", "Seles", "Amboim", "Cassongue", "Conda", "Ebo", "Mussende", "Quilenda"]
  },
  {
    id: 9,
    nome: "Cunene",
    capital: "Ondjiva",
    codigo: "CNN",
    regiao: "Sul",
    municipios: [
      { id: 1, nome: "Cahama", comunas: ["Cahama", "Otchinjau"] },
      { id: 2, nome: "Cuanhama", comunas: ["Ondjiva", "Evale", "Nehone", "Môngua", "Naulila"] },
      { id: 3, nome: "Curoca", comunas: ["Curoca", "Oncocua"] },
      { id: 4, nome: "Cuvelai", comunas: ["Cuvelai", "Mupa", "Cambeno"] },
      { id: 5, nome: "Namacunde", comunas: ["Namacunde", "Chiede"] },
      { id: 6, nome: "Ombadja", comunas: ["Ombadja", "Humbe", "Xangongo"] }
    ],
    cidades: ["Ondjiva", "Xangongo", "Cuvelai", "Namacunde", "Cahama", "Curoca", "Ombadja"]
  },
  {
    id: 10,
    nome: "Huambo",
    capital: "Huambo",
    codigo: "HUA",
    regiao: "Centro",
    municipios: [
      { id: 1, nome: "Bailundo", comunas: ["Bailundo", "Bimbe", "Hama", "Lunge"] },
      { id: 2, nome: "Cachiungo", comunas: ["Cachiungo", "Chicala"] },
      { id: 3, nome: "Caála", comunas: ["Caála", "Catata", "Cuima"] },
      { id: 4, nome: "Ecunha", comunas: ["Ecunha", "Quéquémangue"] },
      { id: 5, nome: "Huambo", comunas: ["Huambo", "Calima", "Chipipa", "Alto Hama"] },
      { id: 6, nome: "Londuimbali", comunas: ["Londuimbali", "Lépi"] },
      { id: 7, nome: "Longonjo", comunas: ["Longonjo", "Chilata", "Cumbira"] },
      { id: 8, nome: "Mungo", comunas: ["Mungo", "Cambuengo", "Chinhama"] },
      { id: 9, nome: "Tchicala-Tcholoanga", comunas: ["Tchicala-Tcholoanga", "Tchicuaqueia", "Mbave"] },
      { id: 10, nome: "Tchindjenje", comunas: ["Tchindjenje", "Ngalanga"] },
      { id: 11, nome: "Ukuma", comunas: ["Ukuma", "Mundundo"] }
    ],
    cidades: ["Huambo", "Caála", "Bailundo", "Longonjo", "Cachiungo", "Ecunha", "Londuimbali", "Mungo", "Tchicala-Tcholoanga", "Tchindjenje", "Ukuma"]
  },
  {
    id: 11,
    nome: "Huíla",
    capital: "Lubango",
    codigo: "HUI",
    regiao: "Sul",
    municipios: [
      { id: 1, nome: "Caconda", comunas: ["Caconda", "Gungue", "Cusse", "Quirimbo"] },
      { id: 2, nome: "Cacula", comunas: ["Cacula", "Chibia", "Catchiungo"] },
      { id: 3, nome: "Caluquembe", comunas: ["Caluquembe", "Calepi", "Chicomba", "Nguvu"] },
      { id: 4, nome: "Chiange", comunas: ["Chiange", "Capunda Cavilongo"] },
      { id: 5, nome: "Chibia", comunas: ["Chibia", "Quihita", "Caitou"] },
      { id: 6, nome: "Chicomba", comunas: ["Chicomba", "Cutenda", "Jau"] },
      { id: 7, nome: "Chipindo", comunas: ["Chipindo", "Bambi", "Cusse"] },
      { id: 8, nome: "Cuvango", comunas: ["Cuvango", "Galangue", "Jamba"] },
      { id: 9, nome: "Humpata", comunas: ["Humpata", "Nene", "Quilengues"] },
      { id: 10, nome: "Jamba", comunas: ["Jamba", "Dongo"] },
      { id: 11, nome: "Lubango", comunas: ["Lubango", "Arimba", "Hoque", "Huíla"] },
      { id: 12, nome: "Matala", comunas: ["Matala", "Capelongo", "Mulondo"] },
      { id: 13, nome: "Quilengues", comunas: ["Quilengues", "Dinde", "Impulo"] },
      { id: 14, nome: "Quipungo", comunas: ["Quipungo", "Jau", "Virei"] }
    ],
    cidades: ["Lubango", "Matala", "Chibia", "Quilengues", "Caconda", "Cacula", "Caluquembe", "Chiange", "Chicomba", "Chipindo", "Cuvango", "Humpata", "Jamba", "Quipungo"]
  },
  {
    id: 12,
    nome: "Icolo e Bengo",
    capital: "Catete",
    codigo: "ICB",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Catete", comunas: ["Catete", "Bom Jesus", "Cabiri"] },
      { id: 2, nome: "Icolo e Bengo", comunas: ["Cassoneca", "Calumbo"] }
    ],
    cidades: ["Catete", "Bom Jesus", "Cassoneca"]
  },
  {
    id: 13,
    nome: "Luanda",
    capital: "Luanda",
    codigo: "LUA",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Belas", comunas: ["Belas", "Camama", "Mussulo", "Ramiro"] },
      { id: 2, nome: "Cacuaco", comunas: ["Cacuaco", "Funda", "Quicolo"] },
      { id: 3, nome: "Cazenga", comunas: ["Cazenga", "Hoji-ya-Henda", "Tala Hady"] },
      { id: 4, nome: "Kilamba Kiaxi", comunas: ["Kilamba Kiaxi", "Golfe", "Neves Bendinha"] },
      { id: 5, nome: "Luanda", comunas: ["Ingombota", "Maianga", "Rangel", "Samba", "Sambizanga"] },
      { id: 6, nome: "Talatona", comunas: ["Talatona", "Benfica", "Futungo", "Talatona Centro", "Camama"] },
      { id: 7, nome: "Viana", comunas: ["Viana", "Calumbo", "Zango", "Estalagem", "Viana Sede"] }
    ],
    cidades: ["Luanda", "Viana", "Cacuaco", "Belas", "Talatona", "Kilamba Kiaxi", "Cazenga"]
  },
  {
    id: 14,
    nome: "Lunda Norte",
    capital: "Dundo",
    codigo: "LNO",
    regiao: "Leste",
    municipios: [
      { id: 1, nome: "Cambulo", comunas: ["Cambulo", "Luremo"] },
      { id: 2, nome: "Capenda-Camulemba", comunas: ["Capenda-Camulemba", "Xá-Muteba", "Cuilo-Camulemba"] },
      { id: 3, nome: "Caungula", comunas: ["Caungula", "Xinge"] },
      { id: 4, nome: "Chitato", comunas: ["Dundo", "Chitato", "Luachimo", "Mussungue"] },
      { id: 5, nome: "Cuango", comunas: ["Cuango", "Caungula", "Licua"] },
      { id: 6, nome: "Cuílo", comunas: ["Cuílo", "Luangue"] },
      { id: 7, nome: "Lubalo", comunas: ["Lubalo", "Capaia"] },
      { id: 8, nome: "Lucapa", comunas: ["Lucapa", "Cachimo"] },
      { id: 9, nome: "Lóvua", comunas: ["Lóvua"] }
    ],
    cidades: ["Dundo", "Lucapa", "Capenda-Camulemba", "Chitato", "Cuango", "Cambulo", "Caungula", "Cuílo", "Lubalo", "Lóvua"]
  },
  {
    id: 15,
    nome: "Lunda Sul",
    capital: "Saurimo",
    codigo: "LSU",
    regiao: "Leste",
    municipios: [
      { id: 1, nome: "Cacolo", comunas: ["Cacolo", "Alto Chicapa", "Muvulege"] },
      { id: 2, nome: "Dala", comunas: ["Dala", "Muconda"] },
      { id: 3, nome: "Muconda", comunas: ["Muconda", "Lago Dilolo"] },
      { id: 4, nome: "Saurimo", comunas: ["Saurimo", "Mona Quimbundo", "Sombo"] }
    ],
    cidades: ["Saurimo", "Cacolo", "Dala", "Muconda"]
  },
  {
    id: 16,
    nome: "Malanje",
    capital: "Malanje",
    codigo: "MAL",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Cacuso", comunas: ["Cacuso", "Lombe", "Soqueco"] },
      { id: 2, nome: "Calandula", comunas: ["Calandula", "Cateco-Calandula"] },
      { id: 3, nome: "Cambundi-Catembo", comunas: ["Cambundi", "Dumba Cabango", "Quitapa"] },
      { id: 4, nome: "Cangandala", comunas: ["Cangandala", "Cariai", "Culamagia"] },
      { id: 5, nome: "Caombo", comunas: ["Caombo", "Luquembo"] },
      { id: 6, nome: "Cunda-Dia-Baze", comunas: ["Cunda-Dia-Baze", "Rimba"] },
      { id: 7, nome: "Luquembo", comunas: ["Luquembo", "Xandel"] },
      { id: 8, nome: "Malanje", comunas: ["Malanje", "Cabombo", "Kiwaba Nzogi", "Ngola Luije"] },
      { id: 9, nome: "Marimba", comunas: ["Marimba", "Lemba", "Tala Mungongo"] },
      { id: 10, nome: "Massango", comunas: ["Massango", "Kambamba"] },
      { id: 11, nome: "Mucari", comunas: ["Mucari", "Bângalas", "Quirima"] },
      { id: 12, nome: "Quela", comunas: ["Quela", "Mufuma", "Xavunda"] },
      { id: 13, nome: "Quirima", comunas: ["Quirima", "Kunda Zumba"] },
      { id: 14, nome: "Kunda-Dia-Base", comunas: ["Kunda-Dia-Base", "Micanda"] }
    ],
    cidades: ["Malanje", "Cacuso", "Calandula", "Cambundi-Catembo", "Cangandala", "Caombo", "Cunda-Dia-Baze", "Luquembo", "Marimba", "Massango", "Mucari", "Quela", "Quirima"]
  },
  {
    id: 17,
    nome: "Moxico",
    capital: "Luena",
    codigo: "MOX",
    regiao: "Leste",
    municipios: [
      { id: 1, nome: "Alto Zambeze", comunas: ["Alto Zambeze", "Cassai", "Macondo"] },
      { id: 2, nome: "Bundas", comunas: ["Bundas", "Mussuma", "Ninda"] },
      { id: 3, nome: "Camanongue", comunas: ["Camanongue", "Lago-Dilolo", "Lióvua"] },
      { id: 4, nome: "Cameia", comunas: ["Cameia", "Lutembo", "Chiume"] },
      { id: 5, nome: "Léua", comunas: ["Léua", "Liangongo", "Lucusse"] },
      { id: 6, nome: "Luacano", comunas: ["Luacano", "Lumbala Caquengue"] },
      { id: 7, nome: "Luau", comunas: ["Luau", "Lago Dilolo"] },
      { id: 8, nome: "Luchazes", comunas: ["Luchazes", "Lovua", "Cangombe"] },
      { id: 9, nome: "Luena", comunas: ["Luena", "Cachipoque", "Chienge", "Lumbala Nguimbo"] },
      { id: 10, nome: "Moxico", comunas: ["Moxico", "Lucano", "Lutembo"] }
    ],
    cidades: ["Luena", "Luau", "Cameia", "Léua", "Luacano", "Bundas", "Camanongue", "Luchazes", "Alto Zambeze", "Moxico"]
  },
  {
    id: 18,
    nome: "Moxico Leste",
    capital: "Cazombo",
    codigo: "MXL",
    regiao: "Leste",
    municipios: [
      { id: 1, nome: "Cazombo", comunas: ["Cazombo", "Macondo", "Lóvua"] },
      { id: 2, nome: "Lumbala Nguimbo", comunas: ["Lumbala Nguimbo", "Mussuma"] }
    ],
    cidades: ["Cazombo", "Lumbala Nguimbo"]
  },
  {
    id: 19,
    nome: "Namibe",
    capital: "Moçâmedes",
    codigo: "NAM",
    regiao: "Sul",
    municipios: [
      { id: 1, nome: "Bibala", comunas: ["Bibala", "Caraculo", "Lola", "Virei"] },
      { id: 2, nome: "Camucuio", comunas: ["Camucuio", "Cainde"] },
      { id: 3, nome: "Moçâmedes", comunas: ["Moçâmedes", "Lucira", "Forte Santa Rita"] },
      { id: 4, nome: "Tômbwa", comunas: ["Tômbwa", "Iona", "Mucuio"] },
      { id: 5, nome: "Virei", comunas: ["Virei", "Caitou"] }
    ],
    cidades: ["Moçâmedes", "Tômbwa", "Bibala", "Camucuio", "Virei"]
  },
  {
    id: 20,
    nome: "Uíge",
    capital: "Uíge",
    codigo: "UIG",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Alto Cauale", comunas: ["Alto Cauale", "Macolo", "Quisseque"] },
      { id: 2, nome: "Ambuíla", comunas: ["Ambuíla", "Quimbele"] },
      { id: 3, nome: "Bembe", comunas: ["Bembe", "Lucunga", "Massau"] },
      { id: 4, nome: "Buengas", comunas: ["Bungo", "Caiongo"] },
      { id: 5, nome: "Damba", comunas: ["Damba", "Buela", "Songo"] },
      { id: 6, nome: "Mucaba", comunas: ["Mucaba", "Cangola", "Uamba"] },
      { id: 7, nome: "Negage", comunas: ["Negage", "Dimuca", "Quisele"] },
      { id: 8, nome: "Puri", comunas: ["Puri", "Cuilo Pombo"] },
      { id: 9, nome: "Quitexe", comunas: ["Quitexe", "Aldeia Viçosa", "Mabaia"] },
      { id: 10, nome: "Sanza Pombo", comunas: ["Sanza Pombo", "Cuilo Futa", "Dange"] },
      { id: 11, nome: "Songo", comunas: ["Songo", "Cangombe", "Cubati"] },
      { id: 12, nome: "Uíge", comunas: ["Uíge", "Bengo", "Caiongo", "Kitexe"] },
      { id: 13, nome: "Milunga", comunas: ["Milunga", "Cuilo Camboso"] },
      { id: 14, nome: "Zombo", comunas: ["Zombo", "Bembe", "Cuango Zumbo"] },
      { id: 15, nome: "Maquela do Zombo", comunas: ["Maquela do Zombo", "Cuilo Futa", "Sacandica"] },
      { id: 16, nome: "Bungo", comunas: ["Bungo", "Pangila"] }
    ],
    cidades: ["Uíge", "Negage", "Sanza Pombo", "Quitexe", "Bembe", "Damba", "Maquela do Zombo", "Mucaba", "Puri", "Alto Cauale", "Ambuíla", "Bungo", "Songo", "Zombo", "Milunga"]
  },
  {
    id: 21,
    nome: "Zaire",
    capital: "M'banza Congo",
    codigo: "ZAI",
    regiao: "Norte",
    municipios: [
      { id: 1, nome: "Cuimba", comunas: ["Cuimba", "Luvaca", "Madimba"] },
      { id: 2, nome: "M'banza Congo", comunas: ["M'banza Congo", "Caluca", "Luvu", "Madimba"] },
      { id: 3, nome: "Nóqui", comunas: ["Nóqui", "Lufico", "Mbanza Mona"] },
      { id: 4, nome: "N'zeto", comunas: ["N'zeto", "Quindeje", "Kindoki"] },
      { id: 5, nome: "Soyo", comunas: ["Soyo", "Sumba", "Pedra do Feitiço"] },
      { id: 6, nome: "Tomboco", comunas: ["Tomboco", "Kuikuro"] }
    ],
    cidades: ["M'banza Congo", "Soyo", "N'zeto", "Nóqui", "Cuimba", "Tomboco"]
  }
];
