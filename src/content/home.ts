/**
 * Contenido de la página principal (orgánica).
 *
 * Todo el copy vive acá para poder revisarlo y editarlo de corrido, sin tocar
 * JSX — el Hero y los capítulos lo tenían hardcodeado en sus componentes, así
 * que un cambio de mensaje había que buscarlo en cinco archivos.
 *
 * Reglas de marca que cumple este archivo (docs/marca/guia-marca-y-copy.md del
 * repo de la app):
 *  - Voz de tú, verbos concretos, nunca juzgar personas.
 *  - Venta (lo acordado) y cobro (lo que entró) no se mezclan nunca.
 *  - Un solo CTA en toda la página: agendar demo. Decidido por David el 2026-11-13.
 *  - Ninguna cifra sin decir qué se midió y en qué período.
 *  - Prueba social: sólo Manstery y CSM, y sin porcentajes ni cifras de crecimiento.
 *  - El lema cierra la página, no la abre: el competidor usa un titular casi
 *    idéntico arriba, y abrir con el nuestro nos haría parecer la copia.
 */

import type { FeatureSectionData } from '../components/FeatureSection'

import dataImg from '../assets/data.png'
import data2Img from '../assets/data2.png'
import audit1Img from '../assets/audit1.png'
import audit2Img from '../assets/audit2.png'
import audit3Img from '../assets/audit3.png'
import audit4Img from '../assets/audit4.png'
import ventas1Img from '../assets/ventas1.png'
import ventas2Img from '../assets/ventas2.png'
import ventas3Img from '../assets/ventas3.png'
import ventas4Img from '../assets/ventas4.png'
import analytics1Img from '../assets/analytics1.png'
import analytics2Img from '../assets/analytics2.png'

/** El único CTA de la página. Si cambia, cambia en un solo lugar. */
export const CTA_LABEL = 'Agendar demo'

export const nav = {
  producto: 'Producto',
  precios: 'Precios',
  entrar: 'Entrar',
}

/**
 * Hero. El titular es una pregunta y no una afirmación a propósito: es la
 * pregunta que el dueño reconoce y hoy no puede contestar sin pedir un reporte.
 */
export const hero = {
  eyebrow: 'Del embudo a la llamada al cobro',
  headline: '¿Qué embudo te dejó más dinero cobrado este mes?',
  /** La parte del titular que va en marfil pleno; el resto queda un tono abajo. */
  headlineEmphasis: 'más dinero cobrado',
  subheadline:
    'SellNode es el CRM para equipos que venden por llamada. Conecta el origen, la llamada y el cobro de cada venta, para que la respuesta esté en una pantalla y no en tres hojas de cálculo.',
  ctaSub: 'Implementación acompañada. Tu equipo registrando su operación en menos de 8 días.',
}

/**
 * Capítulo 01 — el dolor como cadena causal, no como lista de quejas.
 * Sale del genoma de marketing: herramientas separadas → consolidación manual →
 * reportes tardíos → decisiones con información incompleta.
 */
export const problem = {
  eyebrow: '01 — Dónde se pierde la respuesta',
  title: 'Tener datos no es tener control.',
  body:
    'Tu negocio ya registra todo. El CRM tiene los contactos, el calendario tiene las llamadas, la hoja de cálculo tiene las comisiones y el procesador tiene los pagos. El problema no es que falten datos: es que para saber qué pasó, alguien tiene que reunirlos.',
  steps: [
    { tag: '01', title: 'Herramientas separadas', body: 'Cada una registra los eventos y las cifras a su manera.' },
    { tag: '02', title: 'Consolidación a mano', body: 'Alguien revisa, corrige y cruza los registros cada semana.' },
    { tag: '03', title: 'Reportes que llegan tarde', body: 'El número aparece cuando la decisión ya se tomó.' },
    { tag: '04', title: 'Decisiones incompletas', body: 'Escalas el embudo que llena el formulario, no el que cobra.' },
  ],
  close:
    'Para entender una semana había que mirar tres fuentes, cuatro trackers y escribirle a los closers. De ahí salió nuestra forma de trabajar.',
}

/** Capítulo 02 — el cambio de paradigma: por qué un CRM genérico no alcanza. */
export const whyNotCrm = {
  eyebrow: '02 — Por qué un CRM no alcanza',
  title: 'Un CRM genérico no conoce tu modelo de venta.',
  body:
    'Los CRM están hechos para pipelines de contactos. Tu operación tiene setters que agendan, closers que cierran, duplas que rinden distinto, cuotas que vencen, comisiones que se liquidan y una entrega que arranca cuando la venta termina. SellNode está construido sobre esa forma de vender.',
  items: [
    {
      title: 'Setters y closers, no «usuarios»',
      body: 'Cada rol ve su trabajo: el setter sus agendas, el closer sus ventas, el director el período completo.',
    },
    {
      title: 'Venta y cobro son dos números',
      body: 'Lo acordado y lo que entró a caja no se mezclan nunca en una sola cifra.',
    },
    {
      title: 'La llamada queda adentro',
      body: 'La grabación, su auditoría y el motivo de pérdida viven en la misma ficha de la venta.',
    },
  ],
}

/**
 * Capítulo 03 — el mecanismo. Es la idea del nodo del logo: tres entradas que
 * viven separadas y se reúnen en un punto, leídas de origen a resultado.
 */
export const mechanism = {
  eyebrow: '03 — Cómo se conecta',
  title: 'Conecta el origen, la llamada y el cobro de cada venta.',
  body:
    'Es la idea del nodo de nuestro logo: tres entradas que suelen vivir separadas y se reúnen en un punto. Se lee de izquierda a derecha, del origen al resultado.',
  steps: [
    {
      tag: '01 / Origen',
      title: 'De qué embudo vino',
      body: 'Cada agenda carga su embudo y su setter, así la venta nace con el origen puesto.',
    },
    {
      tag: '02 / La llamada',
      title: 'Qué pasó adentro',
      body: 'La grabación se audita sola: score por fase, el momento que conviene revisar y la objeción que apareció.',
    },
    {
      tag: '03 / El cobro',
      title: 'Cuánto entró y cuánto falta',
      body: 'Cuotas, renovaciones, cartera y la comisión que se desbloquea cuando el dinero entra.',
    },
  ],
  close: 'Con las tres piezas unidas, la pregunta del dueño se contesta en una pantalla.',
}

/** Rótulo del capítulo 04, que son las cuatro secciones de producto de abajo. */
export const productChapter = {
  eyebrow: '04 — Así se ve',
}

export const featureSections: FeatureSectionData[] = [
  {
    title: 'Tu cliente ya te dijo\ncómo venderle',
    description:
      'Cada llamada trae los dolores, las objeciones y las aspiraciones que tu cliente dice en voz alta. SellNode las extrae y las agrupa por oferta, para que el copy de tu embudo use las palabras del cliente y no las tuyas.',
    images: [dataImg, data2Img],
    url: 'app.sell-fy.app/inteligencia/clientes',
    expects: 'src/assets/data.png · data2.png',
    subFeatures: [
      {
        number: '1.1',
        label: 'Perfil del cliente',
        description: 'Dolores, aspiraciones y objeciones extraídos de cada llamada.',
        detail: {
          title: 'Perfil del cliente',
          body: 'Cada llamada de ventas contiene lo que tu cliente dice en voz alta: el problema que lo trajo, el resultado que espera, su disposición y su urgencia. Jarvis lo extrae y lo agrupa por oferta.',
          specs: [
            { label: 'Dolor dominante', value: 'El problema que tu cliente nombra primero en la llamada' },
            { label: 'Aspiración principal', value: 'Qué resultado espera obtener con tu solución' },
            { label: 'Disposición', value: 'Cómo llega al momento de la oferta' },
            { label: 'Urgencia', value: 'Qué tan cerca está de decidir' },
          ],
        },
      },
      {
        number: '1.2',
        label: 'Patrones de compra',
        description: 'Objeciones frecuentes, bloqueadores y señales de cierre.',
        detail: {
          title: 'Patrones de compra',
          body: 'SellNode agrupa las objeciones y las señales de cierre que se repiten entre llamadas, para que sepas qué objeción aparece antes de la oferta y en qué etapa se cae.',
          specs: [
            { label: 'Objeciones frecuentes', value: 'Las razones que más se repiten cuando no cierran' },
            { label: 'Bloqueador principal', value: 'El patrón que aparece en más ventas perdidas' },
            { label: 'Señales de cierre', value: 'Lo que dicen las llamadas que terminaron en venta' },
            { label: 'Segmentación', value: 'Filtro por oferta para comparar patrones entre productos' },
          ],
        },
      },
    ],
  },
  {
    title: 'Las llamadas de esta semana,\nauditadas todas.',
    description:
      'Score por fase de la llamada, mapa con marcas de tiempo, el momento donde se puso en riesgo la venta y un plan de mejora por closer. Sin abrir una grabación.',
    images: [audit1Img, audit2Img, audit3Img, audit4Img],
    url: 'app.sell-fy.app/llamadas',
    expects: 'src/assets/audit1.png … audit4.png',
    subFeatures: [
      {
        number: '2.1',
        label: 'Score por fase',
        description: 'Siete fases de la llamada, cada una con su puntaje.',
        detail: {
          title: 'Score por fase',
          body: 'Jarvis evalúa cada llamada en siete fases: apertura, descubrimiento, presentación, objeciones, cierre, control y evaluación de la oferta. Cada fase recibe su puntaje y la llamada un score general de 0 a 100.',
          specs: [
            { label: 'Fases', value: '7 fases evaluadas en cada llamada' },
            { label: 'Mapa de la llamada', value: 'Marcas de tiempo con el puntaje de cada tramo' },
            { label: 'Momento a revisar', value: 'El punto donde la venta se puso en riesgo' },
            { label: 'Criterios', value: 'Configurables por organización' },
          ],
        },
      },
      {
        number: '2.2',
        label: 'Seguimiento por closer',
        description: 'Fortalezas que se repiten, puntos a revisar y consistencia en el tiempo.',
        detail: {
          title: 'Seguimiento por closer',
          body: 'Cada closer tiene un perfil armado con sus auditorías: qué le funciona, qué conviene revisar y cómo se mueve su score entre períodos. El plan de mejora sale de sus propias llamadas, no de una plantilla.',
          specs: [
            { label: 'Fortalezas', value: 'Lo que se repite en sus llamadas cerradas' },
            { label: 'Puntos a revisar', value: 'Los tramos donde pierde control de la conversación' },
            { label: 'Plan de mejora', value: '3 acciones concretas, ordenadas por impacto' },
            { label: 'Consistencia', value: 'Score promedio por período, con su denominador' },
          ],
        },
      },
    ],
  },
  {
    title: 'Vendido y cobrado\nno son el mismo número.',
    description:
      'Ventas, cuotas, renovaciones y reembolsos, cada uno en su fecha. Comisiones que se calculan al registrar la venta y se desbloquean cuando el dinero entra. Aviso cuando una cuota vence.',
    images: [ventas1Img, ventas2Img, ventas3Img, ventas4Img],
    url: 'app.sell-fy.app/ventas',
    expects: 'src/assets/ventas1.png … ventas4.png',
    subFeatures: [
      {
        number: '3.1',
        label: 'Ventas y cobros',
        description: 'Cuotas, renovaciones, avisos de vencimiento y cartera.',
        detail: {
          title: 'Ventas y cobros',
          body: 'La venta guarda lo acordado; los pagos guardan lo que entró, cada uno en su fecha. Así la cartera es la diferencia entre los dos, y no una estimación.',
          specs: [
            { label: 'Estados de venta', value: 'Cobrada, en cuotas, pendiente, caída, reembolsada' },
            { label: 'Avisos', value: 'Cuota vencida, por WhatsApp y correo' },
            { label: 'Cartera', value: 'Pendiente de cobro por closer y por período' },
            { label: 'Recurrencia', value: 'Renovaciones y pagos periódicos' },
          ],
        },
      },
      {
        number: '3.2',
        label: 'Comisiones',
        description: 'Cálculo al registrar la venta y liquidaciones parciales.',
        detail: {
          title: 'Comisiones',
          body: 'Cada venta genera la comisión del closer y la del setter al registrarse. Una comisión puede liquidarse en partes, y queda el registro de cuánto se pagó en cada liquidación.',
          specs: [
            { label: 'Cálculo', value: 'Al registrar la venta, según el porcentaje configurado' },
            { label: 'Liquidaciones', value: 'Parciales o totales, con PDF descargable' },
            { label: 'Estados', value: 'Ganada, bloqueada mientras el cobro no entra, liquidada' },
            { label: 'Visibilidad', value: 'Cada closer ve sus propias comisiones' },
          ],
        },
      },
    ],
  },
  {
    title: 'Dos embudos. El mismo volumen.\nDistinto cobro.',
    description:
      'Compara embudos, closers y duplas en el mismo período. La tasa de cierre dice sobre qué llamadas se calculó, y cada cifra se puede abrir hasta la venta que la originó.',
    images: [analytics1Img, analytics2Img],
    url: 'app.sell-fy.app/analitica',
    expects: 'src/assets/analytics1.png · analytics2.png',
    subFeatures: [
      {
        number: '4.1',
        label: 'Tablero y métricas',
        description: 'Vendido, cobrado, tasa de cierre y comparación entre closers.',
        detail: {
          title: 'Tablero y métricas',
          body: 'El período que elijas, con el mismo corte en todas las pantallas. Cada cifra se puede abrir hasta la venta o la llamada que la originó.',
          specs: [
            { label: 'Salud financiera', value: 'Vendido, cobrado, pendiente y ventas caídas' },
            { label: 'Ejecución comercial', value: 'Llamadas, auditorías y score promedio del período' },
            { label: 'Tasa de cierre', value: 'Dice siempre sobre qué llamadas se calculó' },
            { label: 'Filtros', value: 'Por fecha, closer, embudo y tipo de venta' },
          ],
        },
      },
      {
        number: '4.2',
        label: 'Agendas',
        description: 'Google Calendar, seguimientos y control de ausencias.',
        detail: {
          title: 'Agendas',
          body: 'Sincronización en los dos sentidos con Google Calendar. Los seguimientos quedan programados con su canal, y las ausencias se registran para poder comparar setters.',
          specs: [
            { label: 'Google Calendar', value: 'Sincronización en los dos sentidos' },
            { label: 'Seguimientos', value: 'Programados por canal: WhatsApp, llamada o correo' },
            { label: 'Recordatorios', value: 'Al closer y al lead, automáticos' },
            { label: 'Ausencias', value: 'Registro y comparación de asistencia por setter' },
          ],
        },
      },
    ],
  },
]

/** Capítulo 05 — la metodología. Mantener siempre el orden: comprender, implementar, acompañar. */
export const method = {
  eyebrow: '05 — Cómo trabajamos',
  title: 'Instalar el software no es el trabajo.\nEs el tercio del medio.',
  subtitle:
    'Control Comercial 360: comprende tu operación, organiza tus datos y acompaña a tu equipo para gestionar con mayor claridad.',
  pillars: [
    {
      tag: '01',
      title: 'Diagnóstico del funnel',
      body: 'Antes de configurar nada miramos tu producto, tus etapas, cómo intervienen setters y closers, dónde vive hoy cada dato y qué necesita ver tu director comercial. Una operación con dos embudos y tres closers no necesita lo mismo que una con cinco.',
    },
    {
      tag: '02',
      title: 'Implementación y adopción',
      body: 'Configuramos según el diagnóstico y capacitamos por rol: el closer registra ventas, el setter trabaja agendas, el director consulta el período. El objetivo es que tu equipo esté registrando su operación en menos de 8 días.',
    },
    {
      tag: '03',
      title: 'Acompañamiento y optimización',
      body: 'Hablamos contigo al menos cada quince días para resolver dudas, detectar necesidades nuevas y enseñarte funciones que todavía no usas. Soporte por WhatsApp, con gente de tu industria y en tu idioma.',
    },
  ],
}

/** Capítulo 06 — los titulares. Las filas salen de shared.ts, que comparte con /demo. */
export const replace = {
  eyebrow: '06 — Lo que dejas de pagar',
  title: 'Cinco o seis suscripciones\nque no se hablan entre sí.',
  subtitle: 'SellNode se queda con el trabajo de todas. Con las que quieras conservar, se conecta.',
}

/**
 * Capítulo 07 — las objeciones reales del cliente, con la respuesta que la guía
 * pide: mostrar, no prometer. No nombramos al competidor: la pelea es contra
 * las alternativas que el cliente ya usa.
 */
export const objections = {
  eyebrow: '07 — Lo que ya probaste',
  title: 'El problema no es que esas herramientas sean malas.',
  subtitle:
    'Es que terminas pagando con tiempo y mantenimiento el trabajo de adaptarlas a tu operación.',
  items: [
    {
      title: '«Ya usamos GoHighLevel.»',
      body: 'Sirve para contactos y automatizaciones. No está pensado para una operación de setters y closers high ticket: la atribución por embudo y las comisiones las terminas armando aparte.',
    },
    {
      title: '«Tenemos todo en Airtable.»',
      body: 'Funciona mientras alguien lo mantenga. Cuando suman embudos, vendedores y llamadas, las fórmulas y las versiones del archivo se vuelven el trabajo.',
    },
    {
      title: '«Lo construimos con IA.»',
      body: 'Un prototipo que muestra datos no es un sistema con permisos, excepciones, volumen y métricas bien calculadas. Y construirlo lo paga tu equipo con su tiempo.',
    },
    {
      title: '«Mi director hace los reportes.»',
      body: 'Entonces tu director dedica la semana a recopilar en vez de analizar. El costo de esas horas es el que conviene comparar.',
    },
    {
      title: '«Mi equipo no va a registrar.»',
      body: 'Es la objeción más razonable de todas. Por eso la capacitación es por rol y el acompañamiento del primer mes va incluido.',
    },
  ],
}

/** Capítulo 08 — cualificación. Decir para quién no es también vende. */
export const fit = {
  eyebrow: '08 — Si encaja o no',
  title: 'No es para todos,\ny conviene saberlo antes de la llamada.',
  yes: {
    title: 'Encaja si',
    items: [
      'Vendes programas o mentorías de alto valor por llamadas agendadas',
      'Tienes dos o más closers y alguien que dirige la operación',
      'Trabajas con uno o varios setters',
      'Pasas de 80 o 100 llamadas al mes',
      'Tienes más de un embudo activo y necesitas saber cuál trae dinero',
      'Estás dispuesto a que tu equipo registre en un mismo sitio',
    ],
  },
  no: {
    title: 'No encaja si',
    items: [
      'Estás empezando y todavía no tienes equipo comercial',
      'Vendes sin llamada, por checkout directo',
      'Buscas un CRM básico para unos pocos contactos',
      'Esperas que el software ordene la operación sin que nadie cambie cómo registra',
    ],
  },
}

/**
 * Capítulo 09 — prueba social. Sólo Manstery y CSM, que son los dos casos
 * autorizados, y SIN cifras de crecimiento: no hay ninguna confirmada.
 */
export const cases = {
  eyebrow: '09 — Quiénes ya lo usan',
  title: 'Dos operaciones distintas,\nel mismo problema.',
  items: [
    {
      name: 'Manstery',
      context: 'Mentoría de relaciones, 1,5 millones de seguidores',
      body: 'Cinco embudos y dos setters, con la información repartida entre GoHighLevel y Google Sheets y sin poder atribuir cada venta a su embudo. Hoy tiene sus registros organizados, identifica mejor el origen de las ventas y trabaja con reportes más fiables. Su equipo recibió capacitación.',
    },
    {
      name: 'CSM',
      context: 'Más de cinco closers y dos setters',
      body: 'Centralizó su operación y organizó sus métricas. A los tres meses consideró que la plataforma cubría su operación y pidió un módulo para gestionar la entrega del servicio, que se desarrolló en menos de un mes.',
    },
  ],
  note: 'Sin cifras de crecimiento: contamos solo lo que podemos sostener.',
}

/** Capítulo 10 — planes. Las cifras salen de site.ts; acá sólo va el copy. */
export const pricingCopy = {
  eyebrow: '10 — Planes',
  title: 'No es una licencia.\nEs la implementación y el acompañamiento.',
  body:
    'El pago inicial cubre el diagnóstico, la configuración de tu operación y la capacitación de tu equipo. La mensualidad es la plataforma y el acompañamiento continuo.',
  includes: [
    {
      title: 'La plataforma completa',
      desc: 'Ventas, cobros, comisiones, agendas, analítica y auditorías de llamada. Sin límite de usuarios.',
    },
    {
      title: 'Diagnóstico de tu operación',
      desc: 'Revisamos tus embudos, tu equipo y dónde vive hoy cada dato antes de configurar nada.',
    },
    {
      title: 'Configuración y capacitación',
      desc: 'Dejamos tu organización, roles, ofertas, embudos y permisos armados, y entrenamos por rol.',
    },
    {
      title: 'Acompañamiento cada quince días',
      desc: 'Contacto periódico para resolver dudas, detectar necesidades nuevas y enseñar lo que no usas.',
    },
    {
      title: 'Soporte por WhatsApp',
      desc: 'Con gente que conoce tu industria y en tu idioma. Sin tiquetes ni formularios.',
    },
    {
      title: 'Actualizaciones incluidas',
      desc: 'Las funciones nuevas entran sin costo adicional y sin migraciones de tu parte.',
    },
  ],
}

/** Cierre. Acá sí va el lema, que es donde la guía lo quiere en piezas institucionales. */
export const finalCta = {
  title: 'Sigue cada venta hasta el cobro.',
  subtitle:
    'En la demo vemos tu propia operación: qué se centraliza, qué se conecta y qué necesita tu equipo para registrarla. Si no encaja, es mejor saberlo en esa llamada.',
  ctaSub: 'Treinta minutos. Revisamos tus embudos y tu forma de vender.',
}
