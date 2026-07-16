export interface Coordenadas {
  latitud: number;
  longitud: number;
}

export interface Imagen {
  url: string;
  descripcion: string;
  esPrincipal: boolean;
}

export interface Atraccion {
  nombre: string;
  descripcion: string;
  tipo: string;
  imagenes: string[];
}

export interface Caracteristicas {
  esCostero: boolean;
  esMontañoso: boolean;
  tieneRio: boolean;
  tieneCastillo: boolean;
  tieneIglesia: boolean;
}

export interface Evento {
  nombre: string;
  fecha: string;
  descripcion: string;
}

export interface Gastronomia {
  nombre: string;
  descripcion: string;
}

export interface Historia {
  fundacion?: string;
  declaracionMonumento?: number;
  candidaturaUnesco?: boolean;
}

export interface AparicionMedia {
  titulo: string;
  tipo: 'cine' | 'serie' | 'documental';
  anio?: number;
}

export interface Autocaravanas {
  disponible: boolean;
  precio?: number;
  plazas?: number;
}

export interface Directorios {
  restaurantes?: number;
  alojamientos?: number;
  comercios?: number;
}

export interface Pueblo {
  _id?: string;
  nombre: string;
  provincia: string;
  comunidadAutonoma: string;
  descripcion: string;
  coordenadas?: Coordenadas;
  poblacion?: number;
  altitud?: number;
  imagenes?: Imagen[];
  atracciones?: Atraccion[];
  caracteristicas?: Caracteristicas;
  eventos?: Evento[];
  gastronomia?: Gastronomia[];
  anioIncorporacion?: number;
  historia?: Historia;
  aparicionesMedia?: AparicionMedia[];
  webcamUrl?: string;
  autocaravanas?: Autocaravanas;
  puntosRecargaElectrica?: number;
  afluenciaTuristica?: string;
  directorios?: Directorios;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
  message?: string;
}

export interface PueblosStats {
  totalPueblos: number;
  pueblosPorComunidad: { [key: string]: number };
  pueblosPorProvincia: { [key: string]: number };
  caracteristicas: {
    montaña: number;
    costero: number;
    medieval: number;
    patrimonio: number;
  };
}
