# Imgs Placeholder — Blog técnico sobre placeholders de imagen

Este repositorio contiene un blog técnico con demostraciones prácticas sobre técnicas de placeholder para imágenes en Next.js (blur, SVG estático, color dominante, skeleton y carga sin placeholder). El objetivo es servir como referencia práctica y educativa para equipos que quieren mejorar la experiencia de carga de imágenes.

## Estructura

- `src/app/[lang]`: páginas por idioma (i18n). Cada carpeta incluye las demos: `static`, `dynamic-placeholder`, `skeleton`, `no-placeholder`, `color-placeholder`.
- `src/shared`: componentes reutilizables (`image-with-skeleton.tsx`, utilidades en `utils.ts`, UI compartida).
- `src/app/[lang]/i18n`: diccionarios `en.ts` y `es.ts` con copy y metadata.

## Qué muestra el blog

- Técnicas de placeholder estático con SVG embebido.
- Blur placeholders generados desde la imagen (ej.: Plaiceholder) y cómo pasar el `base64` a `blurDataURL`.
- Skeleton loading usando atributos `data-*` y callbacks de `Image` para evitar re-renderes innecesarios.
- Comparativa de trade-offs (rendimiento, SEO, complejidad).

## Cómo ejecutar (desarrollo)

En este proyecto usamos `pnpm` como gestor de paquetes. En Windows, si ejecutas desde PowerShell o terminal integrada, puedes usar:

```cmd
cmd /c pnpm install
cmd /c pnpm dev
```

Abre `http://localhost:3000` y navega a las rutas bajo `/en` o `/es` para ver las demos.

### Recomendaciones para probar las demos

- En móviles: usa el botón "Reload" en cada demo para limpiar la caché de imágenes antes de comparar estados.
- En desktop: usa throttling en DevTools (ej. Slow 3G) si la transición de placeholder es demasiado rápida.
- Las imágenes del demo tienen un pequeño delay artificial para que los placeholders sean visibles durante la demos; no uses ese delay en producción.

## Notas técnicas relevantes

- `generateBlurPlaceholderSVG` (en `src/shared/utils/utils.ts`) genera un SVG base64 que puede usarse como `blurDataURL`.
- `getBlurPlaceholderImage` usa `plaiceholder` para generar `base64` y color, con fallback al SVG si falla.
- `ImageWithSkeleton` (en `src/shared/components`) usa `data-loaded` y callbacks `onLoadingComplete`/`onError` para cambiar la presentación vía CSS.

## Contribuir

- Edita los textos en `src/app/[lang]/i18n/*.ts` para actualizar copy y metadata.
- Añade nuevos demos en `src/app/[lang]` siguiendo la convención de rutas y el layout existente.

Si quieres que añada una guía de estilo o scripts adicionales para CI, dime y lo incorporo.

---
Actualizado: 20 de abril de 2026
