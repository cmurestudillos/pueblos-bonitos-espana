import { environment } from '../../environments/environment';

/**
 * SVG en base64 mostrado cuando un pueblo no tiene foto local disponible.
 */
export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';

/**
 * Nombre real de cada fichero en src/assets/pueblos, indexado por el slug normalizado
 * de su nombre de archivo (sin acentos, minúsculas, solo alfanumérico).
 */
const IMAGE_FILENAMES: Record<string, string> = {
  agulo: 'agulo.jpg',
  ainsa: 'ainsa.jpg',
  albarracin: 'albarracin.jpg',
  alcaladeljucar: 'alcaladeljucar.jpg',
  alcudia: 'alcudia.jpg',
  almagro: 'almagro.jpg',
  almonasterlareal: 'almonasterlareal.jpg',
  alpuente: 'alpuente.jpg',
  alquezar: 'alquezar.jpg',
  ampudia: 'ampudia.jpeg',
  anento: 'anento.jpg',
  anso: 'anso.jpg',
  arties: 'arties.jpeg',
  atienza: 'atienza.jpg',
  ayllon: 'ayllon.jpg',
  bagergue: 'bagergue.jpg',
  banosdelaencina: 'banosdelaencina.jpg',
  barcenamayor: 'barcenamayor.jpg',
  beget: 'beget.jpg',
  berlangadeduero: 'berlangadeduero.jpg',
  betancuria: 'betancuria.jpeg',
  bonilladelasierra: 'bonilladelasierra.jpeg',
  briones: 'briones.jpg',
  bubion: 'bubion.jpg',
  bulnes: 'bulnes.jpg',
  calaceite: 'calaceite.jpg',
  caleruega: 'caleruega.jpg',
  candelario: 'candelario.jpg',
  cantavieja: 'cantavieja.png',
  capileira: 'capileira.jpg',
  carmona: 'carmona.jpg',
  castellardelafrontera: 'castellardelafrontera.jpg',
  castrillodelospolvazares: 'castrillodelospolvazares.jpeg',
  castrocaldelas: 'castrocaldelas.jpeg',
  castrojeriz: 'castrojeriz.jpg',
  chinchon: 'chinchon.jpg',
  ciudadrodrigo: 'ciudadrodrigo.jpg',
  comillas: 'comillas.jpg',
  covarubias: 'covarubias.jpg',
  cudillero: 'cudillero.jpeg',
  culla: 'culla.jpg',
  durro: 'durro.jpg',
  elburgodeosma: 'elburgodeosma.jpeg',
  elcastelldeguadalest: 'elcastelldeguadalest.jpg',
  fornalutx: 'fornalutx.jpg',
  frias: 'frias.jpg',
  frigiliana: 'frigiliana.jpg',
  garachico: 'garachico.jpg',
  garos: 'garos.jpeg',
  genalguacil: 'genalguacil.jpeg',
  grazalema: 'grazalema.jpg',
  guadalupe: 'guadalupe.jpg',
  hita: 'hita.jpg',
  jerezdeloscaballeros: 'jerezdeloscaballeros.jpeg',
  laalberca: 'laalberca.jpg',
  lafresneda: 'lafresneda.jpg',
  laguardia: 'laguardia.jpg',
  lastres: 'lastres.png',
  ledesma: 'ledesma.jpg',
  lerma: 'lerma.jpeg',
  letur: 'letur.jpeg',
  lierganes: 'lierganes.jpg',
  linaresdemora: 'linaresdemora.jpeg',
  llerena: 'llerena.jpg',
  lucainenadelastorres: 'lucainenadelastorres.jpeg',
  maderuelo: 'maderuelo.jpg',
  medinaceli: 'medinaceli.jpg',
  mirambel: 'mirambel.jpeg',
  mirandadelcastanar: 'mirandadelcastanar.jpg',
  mogarraz: 'mogarraz.jpg',
  mogrovejo: 'mogrovejo.jpg',
  mojacar: 'mojacar.jpg',
  molinaseca: 'molinaseca.jpg',
  mondonedo: 'mondonedo.jpg',
  monteagudodelasvicarias: 'monteagudodelasvicarias.jpg',
  morella: 'morella.jpeg',
  nijar: 'nijar.jpg',
  nuevobaztan: 'nuevobaztan.jpg',
  olivenza: 'olivenza.jpg',
  oseira: 'oseira.webp',
  pampaneira: 'pampaneira.jpg',
  parauta: 'parauta.jpeg',
  pastrana: 'pastrana.jpg',
  pedraza: 'pedraza.jpg',
  penalbadesantiago: 'penalbadesantiago.jpg',
  peniscola: 'peniscola.jpeg',
  pontemaceira: 'pontemaceira.jpg',
  potes: 'potes.jpg',
  pozadelasal: 'pozadelasal.jpg',
  puebladesanabria: 'puebladesanabria.jpeg',
  puentedey: 'puentedey.jpg',
  puertomingalvo: 'puertomingalvo.jpg',
  robledillodegata: 'robledillodegata.jpeg',
  rodadeisabena: 'rodadeisabena.jpeg',
  roncal: 'roncal.jpg',
  rubielosdemora: 'rubielosdemora.jpg',
  sajazarra: 'sajazarra.jpg',
  sanmartindetrevejo: 'sanmartindetrevejo.jpg',
  santagadeadelcid: 'santagadeadelcid.jpg',
  santillanadelmar: 'santillanadelmar.jpg',
  seguradelasierra: 'seguradelasierra.jpg',
  sepulveda: 'sepulveda.jpg',
  setenildelasbodegas: 'setenildelasbodegas.jpg',
  sosdelreycatolico: 'sosdelreycatolico.jpg',
  tazones: 'tazones.jpg',
  teguise: 'teguise.jpeg',
  tejeda: 'tejeda.jpeg',
  torazu: 'torazu.jpg',
  trevejo: 'trevejo.jpeg',
  trevelez: 'trevelez.jpeg',
  trujillo: 'trujillo.jpeg',
  ujue: 'ujue.jpeg',
  uruena: 'urueña.jpg',
  valderrobres: 'valderrobres.jpg',
  valverdedelavera: 'valverdedelavera.jpg',
  valverdedelosarroyos: 'valverdedelosarroyos.png',
  vejerdelafrontera: 'vejerdelafrontera.jpg',
  vilafames: 'vilafames.jpg',
  vilanovadosinfantes: 'vilanovadosinfantes.jpg',
  villanuevadelosinfantes: 'villanuevadelosinfantes.jpg',
  viniegradeabajo: 'viniegradeabajo.jpeg',
  viniegradearriba: 'viniegradearriba.jpeg',
  vinuesa: 'vinuesa.jpeg',
  yanguas: 'yanguas.jpeg',
  zahara: 'zahara.jpg',
  zuheros: 'zuheros.jpg',
};

/**
 * Alias para pueblos cuyo nombre oficial no coincide exactamente con el slug del fichero
 * (nombres compuestos, grafías distintas o alguna errata histórica en el nombre del archivo).
 */
const SLUG_ALIASES: Record<string, string> = {
  covarrubias: 'covarubias', // errata histórica en el nombre del fichero (falta una "r")
  llastres: 'lastres', // nombre oficial "Llastres" (grafía asturiana) vs fichero local "lastres.png"
};

/**
 * Normaliza un nombre de pueblo a un slug comparable: minúsculas, sin acentos/diacríticos
 * y solo caracteres alfanuméricos.
 *
 * @param {string} value Nombre a normalizar (p. ej. `pueblo.nombre`).
 * @returns {string} Slug normalizado.
 */
const slugify = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

/**
 * Resuelve la URL de la imagen local real de un pueblo a partir de su nombre.
 * Si no hay ninguna foto local para ese pueblo, devuelve el placeholder SVG.
 *
 * @param {string} nombre Nombre del pueblo (`pueblo.nombre`).
 * @returns {string} Ruta pública de la imagen o el placeholder si no existe.
 */
export const resolvePuebloImage = (nombre: string): string => {
  const slug = slugify(nombre);
  const filename = IMAGE_FILENAMES[slug] ?? IMAGE_FILENAMES[SLUG_ALIASES[slug]];

  return filename ? `${environment.assetsUrl}/${filename}` : PLACEHOLDER_IMAGE;
};
