# Women CISO 2026 - 10,000 Becas AI

Plataforma web para el evento Women CISO 2026 que conecta talento en IA y ciberseguridad con sponsors y reclutadores.

## 🎨 Características del Diseño

- **Tema blanco y limpio** con Space Grotesk como tipografía principal
- **Colores de acento**: Púrpura (#9C27B0) y Azul (#3B82F6)
- **Estilo UX premium**: Bordes redondeados, sombras suaves, efectos 3D
- **Animaciones fluidas** con transiciones suaves
- **Responsive** - Se adapta a todos los dispositivos
- **Video de fondo** en el Hero con efecto de opacidad

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
10000becas/
├── public/                      # Archivos estáticos
│   ├── Iniciovideo.mp4         # Video del hero
│   ├── LOGO.png                # Logo del sitio (favicon)
│   ├── sponsor1_logo.png       # Imágenes de sponsors
│   ├── speaker1.png            # Fotos de speakers (agregar aquí)
│   └── ...
├── src/
│   ├── components/             # Componentes React
│   │   ├── Navigation.jsx      # Barra de navegación
│   │   ├── Hero.jsx            # Sección principal con video
│   │   ├── About.jsx           # Sobre el evento
│   │   ├── Scholarships.jsx    # Información de becas
│   │   ├── SponsorLevels.jsx   # Niveles de patrocinio
│   │   ├── SponsorsDisplay.jsx # Grid de sponsors
│   │   ├── Speakers.jsx        # Speakers confirmados
│   │   ├── Agenda.jsx          # Agenda del evento
│   │   ├── Testimonials.jsx    # Testimonios
│   │   └── Footer.jsx          # Footer del sitio
│   ├── speakers.js             # Configuración de speakers
│   ├── sponsors.js             # Configuración de sponsors
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globales
│   ├── index.css               # Variables CSS y estilos base
│   └── main.jsx                # Punto de entrada
├── index.html                  # HTML principal
└── package.json                # Dependencias
```

## ➕ Cómo Agregar Speakers

1. **Coloca la imagen** en la carpeta `public/` con el nombre `speaker1.png`, `speaker2.png`, etc.

2. **Edita `src/speakers.js`**:

```javascript
export const speakersList = [
  {
    image: '/speaker1.png',
    name: 'Nombre Completo',
    title: 'Cargo - Empresa',
    bio: 'Breve biografía del speaker.'
  },
  {
    image: '/speaker2.png',
    name: 'Otro Speaker',
    title: 'Cargo - Empresa',
    bio: 'Otra biografía.'
  },
  // Agrega más speakers...
]
```

## ➕ Cómo Agregar Sponsors

1. **Coloca la imagen** en la carpeta `public/` con el nombre `sponsor2_logo.png`, `sponsor3_logo.png`, etc.

2. **Edita `src/sponsors.js`**:

```javascript
export const sponsorsList = [
  { id: 1, name: 'Sponsor 1', image: '/sponsor1_logo.png' },
  { id: 2, name: 'Sponsor 2', image: '/sponsor2_logo.png' },
  { id: 3, name: 'Sponsor 3', image: '/sponsor3_logo.png' },
  // Agrega más sponsors...
]
```

## 🎬 Cambiar el Video del Hero

El video de fondo se encuentra en `public/Iniciovideo.mp4`. Para cambiarlo:

1. Reemplaza el archivo `Iniciovideo.mp4` en la carpeta `public/`
2. El video se reproduce automáticamente en loop sin sonido
3. La opacidad se ajusta en `src/components/Hero.css` (`.hero-video`)

## 🎨 Personalización de Colores

Los colores se definen en `src/index.css`:

```css
:root {
  --color-bg: #ffffff;          /* Fondo blanco */
  --color-bg-alt: #f8f9fa;      /* Fondo alternativo */
  --color-primary: #9C27B0;     /* Púrpura */
  --color-secondary: #3B82F6;   /* Azul */
  --color-accent: #FF00FF;      /* Magenta */
  --color-text: #1a1a1a;       /* Texto principal */
  --color-text-muted: #555555;  /* Texto secundario */
}
```

## 📝 Componentes Principales

### Hero (`Hero.jsx`)
- Video de fondo con opacidad ajustada
- Título principal con sombra lila/azul cielo
- Estadística con efecto flotante
- Botones de CTA (Registro y Explora Sponsors)

### Navigation (`Navigation.jsx`)
- Logo en la barra de navegación
- Links suaves a cada sección
- Fondo blanco semitransparente con blur

### Speakers (`Speakers.jsx`)
- Grid responsive con fotos de speakers
- Efecto 3D al hover (elevación y rotación)
- Nombre, cargo y biografía de cada speaker
- Configurado en `src/speakers.js`

### Sponsors (`SponsorsDisplay.jsx`)
- Grid responsive de sponsors
- Efectos hover con escala y sombras
- Configurado en `src/sponsors.js`

### SponsorLevels (`SponsorLevels.jsx`)
- 5 niveles de patrocinio con precios
- Lista de beneficios por nivel
- Botón de contacto por email

### Footer (`Footer.jsx`)
- Links de registro (Becas y General)
- Redes sociales (Twitter, LinkedIn, Instagram)
- Email de contacto
- Efectos hover estilo botón con colores morados

## 🎯 Secciones del Sitio

1. **Inicio/Hero** - Video de fondo con CTAs
2. **Sobre** - Temas del evento (Threat Hunting, AI Security, Leadership)
3. **Becas** - Información de las 10,000 becas disponibles
4. **Niveles de Patrocinio** - 5 niveles desde Supporter hasta Visionario
5. **Sponsors** - Grid de patrocinadores confirmados
6. **Speakers** - Ponentes confirmados con fotos
7. **Agenda** - Cronograma del evento (3 días)
8. **Testimonios** - Experiencias de becados
9. **Contacto/Footer** - Enlaces de registro y redes sociales

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- **Desktop** (1200px+) - Grid completo
- **Tablet** (768px - 1199px) - Grid ajustado
- **Móvil** (< 768px) - Una columna, elementos apilados

## 🎨 Estilos UX Premium

### Bordes Redondeados
- `--radius-sm: 12px`
- `--radius-md: 20px`
- `--radius-lg: 32px`
- `--radius-xl: 50px`

### Sombras
- `--shadow-soft`: Sombras suaves para elementos
- `--shadow-medium`: Sombras medias para cards
- `--shadow-glow`: Sombras con efecto glow para hover

### Transiciones
- `--transition-smooth`: Transiciones suaves cubic-bezier

## 📧 Contacto

- **Email**: comunicacion@womenciso.com
- **Fechas**: 8, 9 y 10 de Mayo 2026
- **Ubicación**: Ciudad de México, México

## 🔗 Links Útiles

- Registro Becas: https://forms.gle/9SZKdnwyHPqkNKm36
- Registro General: https://forms.gle/VRveooeuCU5ToQEP6
- Twitter: https://twitter.com/womenciso
- LinkedIn: https://linkedin.com/company/womenciso
- Instagram: https://instagram.com/womenciso

---

**Women CISO 2026** - 10,000 Becas AI para Mujeres en Ciberseguridad

© 2026 Women CISO. Todos los derechos reservados.
