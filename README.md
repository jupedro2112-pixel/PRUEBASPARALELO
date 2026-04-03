# Stake.com - Clon de Casino y Apuestas Deportivas

Réplica fiel del sitio web Stake.com con todas las funcionalidades visuales y animaciones.

## 🌐 URL de Prueba

**Sitio desplegado**: https://fi7oysut4pllg.ok.kimi.link

## 🎯 Características Implementadas

### Diseño Visual
- ✅ Paleta de colores exacta (fondo #1A1D24, acento #00E701)
- ✅ Tipografía Inter
- ✅ Layout responsive (desktop, tablet, mobile)
- ✅ Sidebar fijo izquierdo con navegación
- ✅ Header fijo superior con menú desplegable

### Secciones
1. **Hero** - Tarjetas 3D interactivas con efecto tilt al mover el mouse
2. **Barra de Búsqueda** - Selector de categoría + input de búsqueda + tabs
3. **Juegos en Tendencia** - Carrusel horizontal con tarjetas de juegos
4. **Deportes en Tendencia** - Carrusel horizontal con tarjetas de deportes
5. **Promociones** - Grid de tarjetas promocionales
6. **Apuestas en Vivo** - Tabla con tabs (Casino/Deportes/Carrera)
7. **FAQ** - Acordeón expandible
8. **Footer** - Links organizados por categorías
9. **Cookie Banner** - Banner de aceptación de cookies

### Animaciones
- 🎴 Efecto 3D tilt en tarjetas del hero
- ✨ Glow verde en hover de tarjetas
- 🔴 Pulsación del indicador "en vivo"
- 📜 Carruseles con scroll snap
- 🎯 Hover effects en botones y links
- 📋 Acordeón suave en FAQ

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS Transitions + Custom hooks

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── layout/
│       ├── Header.tsx      # Header fijo con navegación
│       ├── Sidebar.tsx     # Sidebar izquierdo con iconos
│       └── CookieBanner.tsx # Banner de cookies
├── sections/
│   ├── Hero.tsx            # Sección hero con tarjetas 3D
│   ├── SearchBar.tsx       # Barra de búsqueda
│   ├── TrendingGames.tsx   # Carrusel de juegos
│   ├── TrendingSports.tsx  # Carrusel de deportes
│   ├── Promotions.tsx      # Sección de promociones
│   ├── LiveBets.tsx        # Tabla de apuestas
│   ├── FAQ.tsx             # Sección de preguntas frecuentes
│   └── Footer.tsx          # Footer completo
├── data/
│   └── games.ts            # Datos de juegos y deportes
├── App.tsx                 # Componente principal
└── index.css               # Estilos globales
```

## 🚀 Instrucciones de Despliegue

### 1. Instalación de Dependencias

```bash
cd /mnt/okcomputer/output/app
npm install
```

### 2. Desarrollo Local

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

### 3. Build de Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

### 4. Despliegue

Para desplegar en cualquier servidor estático, sube el contenido de la carpeta `dist/`:

```bash
# Ejemplo con Vercel
vercel --prod dist/

# Ejemplo con Netlify
netlify deploy --prod --dir=dist

# O simplemente copia los archivos a tu servidor
scp -r dist/* user@server:/var/www/html/
```

## 🎨 Tokens de Diseño

### Colores
| Token | Valor | Uso |
|-------|-------|-----|
| `--stake-bg` | #1A1D24 | Fondo principal |
| `--stake-card` | #23262E | Fondo de tarjetas |
| `--stake-accent` | #00E701 | Verde neón (CTA) |
| `--stake-surface` | #2C3038 | Superfaces hover |
| `--stake-border` | #3A3F4A | Bordes |
| `--stake-muted` | #9CA3AF | Texto secundario |

### Tipografía
- **Font Family**: Inter, sans-serif
- **Headings**: 2.5rem (h1), 1.5rem (h2), 1.125rem (h3)
- **Body**: 0.875rem
- **Line Height**: 1.5

### Espaciado
- **Max Width**: 1400px
- **Section Padding**: 40px
- **Grid Gap**: 16px
- **Card Radius**: 12px
- **Button Radius**: 8px

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (Sidebar visible)
- **Tablet**: 768px - 1024px (Sidebar colapsado)
- **Mobile**: < 768px (Sidebar oculto, menú hamburguesa)

## 🔧 Personalización

Para modificar los datos de juegos o deportes, edita el archivo `src/data/games.ts`:

```typescript
export const trendingGames: Game[] = [
  {
    id: '1',
    name: 'Nombre del Juego',
    provider: 'Proveedor',
    players: 1000,
    image: 'url-de-la-imagen',
    color: 'from-color-500 to-color-600',
  },
  // ...
];
```

## 📄 Licencia

Este proyecto es una réplica educativa del sitio Stake.com. No está afiliado ni respaldado por Stake.
