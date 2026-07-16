# 🏘️ Pueblos Bonitos de España - PWA

Aplicación Web Progresiva (PWA) desarrollada con Angular 21 y PrimeNG 21 para explorar los pueblos más bonitos de España. Incluye información detallada, galerías de imágenes, búsqueda en tiempo real y funcionalidad offline.

🔗 **En producción**: https://pueblos-bonitos-espana.vercel.app (consume la API en https://pueblos-bonitos-api.vercel.app)

![Angular](https://img.shields.io/badge/Angular-21-red?style=for-the-badge&logo=angular)
![PrimeNG](https://img.shields.io/badge/PrimeNG-21-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![PWA](https://img.shields.io/badge/PWA-Enabled-green?style=for-the-badge)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Resolución de imágenes](#-resolución-de-imágenes)
- [PWA](#-pwa)
- [API](#-api)
- [Despliegue](#-despliegue)
- [Autor](#-autor)

## ✨ Características

### Funcionalidades Principales
- 🔍 **Búsqueda en tiempo real** por nombre, provincia o comunidad autónoma
- 🗺️ **Listado completo** de los pueblos bonitos de España
- 📱 **Diseño responsive** adaptado a móvil, tablet y desktop
- 🖼️ **Galerías de imágenes** con visor fullscreen (PrimeNG Galleria)
- 📊 **Información detallada** de cada pueblo (descripción, historia, gastronomía, eventos)
- 🏷️ **Sistema de tags** por características (costero, castillo, iglesia, río)
- 📴 **Modo offline** gracias a Service Workers
- ⚡ **Rendimiento optimizado** con lazy loading de rutas

### Características Técnicas
- **PWA completa** instalable en dispositivos
- **Arquitectura moderna** con standalone components e `inject()`
- **Control flow nativo** de Angular (`@if`/`@for`), sin `*ngIf`/`*ngFor`
- **Variables de entorno** para desarrollo y producción
- **Resolución de imágenes robusta**: mapea el nombre de cada pueblo a su foto local real, con fallback a un placeholder si no existe
- **Consumo de API REST** con HttpClient

## 🛠️ Tecnologías

### Frontend
- **Angular 21** - Framework principal
- **PrimeNG 21** + **@primeuix/themes** (preset Lara) - Componentes UI y tema
- **PrimeIcons** / **PrimeFlex** - Iconos y utilidades CSS
- **TypeScript 5.9** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva

### PWA
- **@angular/service-worker** - Service Worker de Angular (`ngsw-config.json`)

### Herramientas de Desarrollo
- **Angular CLI** (`@angular/build`, esbuild) - Bundler y CLI
- **ESLint 10** (flat config) + `angular-eslint` + `typescript-eslint` + Prettier
- **pnpm** - Gestor de paquetes

## 📋 Requisitos Previos

- **Node.js** ≥20
- **pnpm**

```bash
node --version
pnpm --version
```

## 🚀 Instalación

```bash
git clone https://github.com/cmurestudillos/pueblos-bonitos-espana.git
cd pueblos-bonitos-espana
pnpm install
```

### Variables de entorno

**src/environments/environment.ts** (desarrollo, apunta a la API local):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000/api',
  assetsUrl: '/assets/pueblos',
};
```

**src/environments/environment.production.ts** (producción):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://pueblos-bonitos-api.vercel.app/api',
  assetsUrl: '/assets/pueblos',
};
```

## ⚙️ Configuración

### Imágenes de Pueblos

Las fotos reales de los pueblos están en `src/assets/pueblos/`, nombradas con el slug normalizado del pueblo (sin acentos, minúsculas). `src/app/utils/pueblo-image.util.ts` mapea el `nombre` que devuelve la API a su fichero local; si un pueblo no tiene foto, se muestra un placeholder SVG en línea.

### Iconos PWA

Los iconos están en `public/icons/` y se referencian desde `public/manifest.webmanifest`.

## 💻 Uso

### Servidor de Desarrollo
```bash
pnpm start
```

Navega a `http://localhost:4200/`.

### Compilar para Producción
```bash
pnpm run build
```

Los archivos compilados se generan en `dist/pueblos-bonitos-espana/browser/`.

### Probar la PWA
```bash
pnpm run build
cd dist/pueblos-bonitos-espana/browser
npx http-server -p 8080
```

### Tests
```bash
pnpm test
```

## 📁 Estructura del Proyecto
```
pueblos-bonitos-espana/
├── src/
│   ├── app/
│   │   ├── components/          # navbar, footer
│   │   ├── pages/                # pueblos-list, pueblo-detail
│   │   ├── services/              # pueblos.service.ts
│   │   ├── models/                 # pueblo.interface.ts
│   │   ├── utils/                   # pueblo-image.util.ts (resolución de imágenes)
│   │   ├── routes/                   # app.routes.ts
│   │   ├── app.component.ts
│   │   └── app.config.ts
│   ├── assets/
│   │   └── pueblos/               # Fotos reales de los pueblos
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.production.ts
│   ├── styles.scss
│   └── index.html
├── public/                        # favicon, manifest.webmanifest, icons/ (copiado a dist/ en el build)
├── angular.json
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── ngsw-config.json
```

## 🖼️ Resolución de imágenes

La API devuelve URLs de imagen placeholder (`https://ejemplo.com/...`) que no corresponden a ningún fichero real. `pueblo-image.util.ts` ignora esas URLs y en su lugar:

1. Normaliza el `nombre` del pueblo a un slug (sin acentos, minúsculas, solo alfanumérico).
2. Busca ese slug en un mapa estático generado a partir de los ficheros reales de `src/assets/pueblos/` (con unos pocos alias para nombres compuestos o grafías distintas, p. ej. "Covarrubias" → `covarubias.jpg`).
3. Si no hay coincidencia, devuelve un placeholder SVG en línea (no hay foto para ese pueblo).

## 📱 PWA

### Service Worker
El Service Worker cachea assets estáticos (`app` group, prefetch), imágenes (`assets` group, lazy) y las respuestas de la API (`api-pueblos` data group, estrategia `freshness`, apuntando a la API de producción).

### Instalación
La PWA puede instalarse en dispositivos móviles, escritorio y navegadores compatibles (Chrome, Edge, Safari).

## 🔌 API

Esta aplicación consume [pueblos-bonitos-api](https://github.com/cmurestudillos/pueblos-bonitos-api). Endpoints principales usados:
```
GET  /api/pueblos              # Listado completo
GET  /api/pueblos/nombre/:nombre  # Detalle por nombre
```

## 🚀 Despliegue

**En producción**: https://pueblos-bonitos-espana.vercel.app

### Vercel (recomendado)
```bash
pnpm dlx vercel
```

Antes de desplegar: comprueba que `environment.production.ts` apunta a la URL real de la API (https://pueblos-bonitos-api.vercel.app/api) y configura CORS en el backend.

## 👨‍💻 Autor

**Carlos** - Full Stack Developer

## 📄 Licencia

MIT
