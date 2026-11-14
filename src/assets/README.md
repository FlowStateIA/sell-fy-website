# Capturas del producto

Las imágenes de esta carpeta son las que la home muestra dentro del marco de
navegador. **Para cambiar una, deja el archivo nuevo con el mismo nombre.** No
hay que tocar código: `src/content/home.ts` las importa por nombre.

Si borras un archivo, la sección no se rompe: muestra un hueco rotulado con el
nombre que espera.

> El hero ya no usa captura: muestra la demo viva (`src/components/ProductDemo.tsx`,
> con sus datos en `src/content/productDemo.ts`). `dashboard.png` quedó sin uso.

| Archivo | Pantalla que debe mostrar | Dónde sale |
|---|---|---|
| `data.png`, `data2.png` | Inteligencia de clientes: dolores, objeciones, patrones | Capítulo 04, sección 1 |
| `audit1.png` … `audit4.png` | Auditoría de llamada: score por fase, mapa, plan de mejora | Capítulo 04, sección 2 |
| `ventas1.png` … `ventas4.png` | Ventas, cuotas, cartera y comisiones | Capítulo 04, sección 3 |
| `analytics1.png`, `analytics2.png` | Analítica: comparación de embudos y closers | Capítulo 04, sección 4 |

## Cómo tomarlas

- **Ancho 2560 px** (o pantalla retina a 1280), para que no se vean blandas.
- **Sin el cromo del navegador**: el marco lo pone la web. Captura sólo el
  contenido de la app.
- **Tema oscuro**, que es el de la app y el de la página.
- **Mismo período en todas**: la guía de marca pide que los datos de ejemplo
  sean coherentes entre pantallas. Si una dice «este mes», todas.
- **Datos de ejemplo verosímiles**, nunca cifras de un cliente real.
- PNG. Si pesa más de ~400 KB, pásala por un compresor antes de subirla.
