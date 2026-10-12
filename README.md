# corvoweb

Sitio web de Corvo hecho con Astro. Original, inspirado a grandes rasgos en
la estructura de sitios de launchers (hero con demo, features, extensiones,
download, blog) sin copiar contenido ni diseño.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # salida en dist/
```

## Estructura

```
src/
├── layouts/
│   ├── Base.astro          # head, header, footer, OG tags
│   └── Post.astro          # layout de posts del blog
├── components/
│   ├── Header.astro        # nav sticky con blur
│   ├── Footer.astro
│   ├── PaletteMockup.astro # réplica CSS del launcher (usa la paleta real)
│   ├── WorkflowShowcase.astro # demos por tabs con capturas reales
│   ├── AppFrame.astro      # marco de app que envuelve las capturas
│   ├── FeatureList.astro   # lista tipográfica de features (sin cards)
│   ├── Icon.astro          # set de iconos SVG propios, stroke 1.5
│   ├── DownloadButtons.astro
│   └── KeyCap.astro        # teclas tipo ⌥ Space
├── pages/
│   ├── index.astro         # hero + bento de features + descargas + CTA
│   ├── features.astro      # grid de comandos + arquitectura
│   ├── extensions.astro    # shipped + roadmap batch 1
│   ├── download.astro      # brew, dmg, AppImage, deb, msi, source
│   ├── releases.astro      # historial de releases
│   ├── blog/               # índice + posts (.md con layout en frontmatter)
│   └── 404.astro
├── data/
│   └── releases.ts         # releases desde la API de GitHub, con fallback offline
└── styles/global.css       # tokens de diseño (paleta de corvo-ui)
```

## Paleta

Los tokens de `global.css` salen de `crates/corvo-ui/src/lib.rs` en corvo:

| Token | Valor | Origen |
|---|---|---|
| `--corvo-surface` | `#17181A` | `COLOR_BACKGROUND` |
| `--corvo-accent` | `#34D399` | `COLOR_ACCENT` |
| `--corvo-selected` | `#113C30` | `COLOR_ROW_SELECTED` |
| `--corvo-keycap` | `#2D3034` | `COLOR_KEYCAP` |
| `--corvo-text-dim` | `#8E8E93` | `COLOR_TEXT_DIM` |

Si cambia la paleta del launcher, actualizar ambos lados.

## Releases

`src/data/releases.ts` pide las releases a la API de GitHub en build time y
cae a `FALLBACK_TAG` si no hay red. Al publicar un tag nuevo basta con subir
esa etiqueta con sus notas: la home, el botón de descarga y `/releases` toman
la versión, la fecha y los enlaces del propio release. `FALLBACK_TAG` se
actualiza a mano en cada release para que la vista offline no quede en una
versión vieja.

## Brand

Los assets de marca son los mismos de la app (`corvo/assets/`):

| Archivo web | Origen | Uso |
|---|---|---|
| `public/favicon.ico` | `assets/corvoIcon.ico` | favicon (7 tamaños) |
| `public/brand/corvo-icon.png` | `assets/corvoIcon.png` | header, footer, apple-touch-icon, og:image |
| `public/brand/corvo-mark.png` | `assets/images/CorvoMark.png` | reserva (fondo negro, no transparente) |

Si la app cambia de icono, recopiar esos archivos. `corvo-mark.png` tiene
fondo negro sólido; para usarlo sobre otros fondos hace falta una versión
con transparencia desde el SVG de origen.

## Screenshots y demos

El hero usa `PaletteMockup.astro`, una réplica del launcher en CSS puro
(sin imágenes binarias). Cuando haya screenshots reales:

1. Soltar las imágenes en `public/showcase/` (PNG, ~2x para retina).
2. Crear un componente `Showcase.astro` o reemplazar `PaletteMockup` en el
   hero por la imagen real.
3. Para GIF/video de demo, agregar `public/demo/` y una sección propia.

## QA visual

`tools/shots.mjs` captura páginas en desktop y móvil para revisión de
diseño. Requiere un navegador por CDP: `obscura serve --allow-private-network -p 9222`
y `npm run preview` corriendo.

```bash
node tools/shots.mjs   # escribe /tmp/corvo-*.png
```
