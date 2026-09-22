/**
 * Contenido de la página principal (orgánica).
 * Todo el copy vive aquí para poder revisarlo y editarlo de corrido, sin tocar JSX.
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

export const featureSections: FeatureSectionData[] = [
  {
    title: 'Tu cliente ya te dijo\ncómo venderle',
    description:
      'Las personas que ya te compraron tienen la clave para replicar ese resultado cientos de veces. Sell-fy extrae dolores, objeciones y aspiraciones de cada llamada y te entrega un perfil psicológico accionable.',
    images: [dataImg, data2Img],
    subFeatures: [
      {
        number: '1.1',
        label: 'Perfil Psicológico',
        description: 'Extracción automática de dolores, aspiraciones y objeciones de cada cliente.',
        detail: {
          title: 'Perfil Psicológico del Avatar',
          body: 'Cada llamada de ventas contiene la data más valiosa para tu marketing: los dolores reales de tu cliente, sus aspiraciones, su estado emocional y su nivel de urgencia. Jarvis extrae todo esto automáticamente y construye un cerebro de tu avatar.',
          specs: [
            { label: 'Dolor Dominante', value: 'El problema #1 que tu cliente verbaliza en la llamada' },
            { label: 'Aspiración Principal', value: 'Qué resultado espera obtener con tu solución' },
            { label: 'Estado Emocional', value: 'Análisis del tono y disposición del prospecto' },
            { label: 'Nivel de Urgencia', value: 'Qué tan listo está para tomar acción' },
          ],
        },
      },
      {
        number: '1.2',
        label: 'Patrones de Compra',
        description: 'Bloqueadores de conversión, tendencias emocionales y señales de cierre.',
        detail: {
          title: 'Patrones de Compra',
          body: 'Sell-fy detecta patrones recurrentes en las objeciones, bloqueos emocionales y señales de cierre de tus clientes. Esta data te permite personalizar tu embudo para que tu avatar se identifique en cada etapa y te compre sin saber por qué.',
          specs: [
            { label: 'Objeciones Frecuentes', value: 'Las 5 razones principales por las que no cierran' },
            { label: 'Bloqueador #1', value: 'El patrón que más ventas pone en riesgo' },
            { label: 'Señales de Cierre', value: 'Indicadores de que el lead está listo para comprar' },
            { label: 'Segmentación', value: 'Filtro por oferta para ver patrones por producto' },
          ],
        },
      },
    ],
  },
  {
    title: 'Analizar 300 llamadas\nes imposible. Jarvis lo hace.',
    description:
      'Score conductual de 0 a 100, mapa de la llamada, errores costosos y un plan de mejora personalizado por closer. Todo automático, sin escuchar una sola grabación.',
    images: [audit1Img, audit2Img, audit3Img, audit4Img],
    subFeatures: [
      {
        number: '2.1',
        label: 'Score Conductual',
        description: 'Evaluación de 0 a 100 basada en técnica de ventas, manejo de objeciones y cierre.',
        detail: {
          title: 'Score Conductual',
          body: 'Jarvis evalúa cada llamada en 7 dimensiones: Apertura, Descubrimiento, Presentación, Objeciones, Cierre, Control y Evaluación de Oferta. Cada dimensión recibe un puntaje independiente y se genera un score general de 0 a 100.',
          specs: [
            { label: 'Dimensiones', value: '7 áreas evaluadas por llamada' },
            { label: 'Mapa de la Llamada', value: 'Timeline con score por sección y timestamps' },
            { label: 'Error más costoso', value: 'Identificación automática del punto que puso en riesgo la venta' },
            { label: 'Entrenamiento', value: '+3,300 análisis de llamada cargados' },
          ],
        },
      },
      {
        number: '2.2',
        label: 'Insights por Closer',
        description: 'Fortalezas recurrentes, puntos de mejora y consistencia de cada vendedor en el tiempo.',
        detail: {
          title: 'Insights por Closer',
          body: 'Cada closer tiene un perfil de rendimiento basado en sus auditorías. Jarvis identifica patrones de fortaleza, puntos de mejora recurrentes y genera un plan de acción personalizado con nivel de impacto.',
          specs: [
            { label: 'Perfil del Lead', value: 'Dolor dominante, aspiración, estado emocional y urgencia' },
            { label: 'Qué ayudó al cierre', value: 'Técnicas específicas que funcionaron' },
            { label: 'Plan de Mejora', value: '3 acciones concretas con impacto alto/medio' },
            { label: 'Consistencia', value: 'Tracking de score promedio en el tiempo' },
          ],
        },
      },
    ],
  },
  {
    title: 'Sabe de dónde viene\ncada dólar de tu negocio',
    description:
      'Ventas nuevas, cuotas, renovaciones, upsells — todo trackeado. Comisiones automáticas para tu equipo, alertas de pagos vencidos y cartera organizada sin Excel.',
    images: [ventas1Img, ventas2Img, ventas3Img, ventas4Img],
    subFeatures: [
      {
        number: '3.1',
        label: 'Ventas & Cobros',
        description: 'Cuotas, renovaciones, alertas de vencimiento y cartera organizada.',
        detail: {
          title: 'Ventas & Cobros',
          body: 'Trazabilidad completa desde la primera llamada hasta el último cobro. Sabes exactamente de dónde viene cada dólar: ventas nuevas, cuotas, renovaciones, upsells. Alertas automáticas cuando un pago se vence.',
          specs: [
            { label: 'Estados de Venta', value: 'Cobrada, En cuotas, Pendiente, Caída, Reembolsada' },
            { label: 'Alertas', value: 'Notificación automática de cuotas vencidas vía WhatsApp y email' },
            { label: 'Cartera', value: 'Vista organizada por closer con cash pendiente por cobrar' },
            { label: 'Recurrencia', value: 'Tracking de renovaciones y pagos periódicos' },
          ],
        },
      },
      {
        number: '3.2',
        label: 'Comisiones',
        description: 'Liquidaciones automáticas, parciales y transparentes.',
        detail: {
          title: 'Comisiones',
          body: 'Cada venta genera comisiones automáticas para closer y setter. Liquidaciones parciales soportadas — una comisión puede aparecer en múltiples pagos. Todo transparente, sin Excel, sin conflictos.',
          specs: [
            { label: 'Cálculo', value: 'Automático al registrar la venta según % configurado' },
            { label: 'Liquidaciones', value: 'Parciales o totales con PDF profesional descargable' },
            { label: 'Estados', value: 'Ganada, Bloqueada (cash no cobrado), Liquidada' },
            { label: 'Visibilidad', value: 'Cada closer ve solo sus propias comisiones' },
          ],
        },
      },
    ],
  },
  {
    title: 'Deja de improvisar.\nDecide desde la data.',
    description:
      'Revenue, cash collected, tasa de cierre, rendimiento por funnel — todo en tiempo real. Detecta cuellos de botella exactos y oportunidades de mejora antes de que te cuesten.',
    images: [analytics1Img, analytics2Img],
    subFeatures: [
      {
        number: '4.1',
        label: 'Dashboard & KPIs',
        description: 'Revenue, cash collected, tasa de cierre y ranking de closers.',
        detail: {
          title: 'Dashboard & KPIs',
          body: 'Visibilidad total de tu operación comercial. Sabes qué va a pasar y qué tienes que mejorar. Revenue, cash collected, tasa de cierre, rendimiento por funnel, ranking de closers — todo en tiempo real.',
          specs: [
            { label: 'Salud Financiera', value: 'Vendido, cash cobrado, pendiente cobro, ventas caídas' },
            { label: 'Ejecución Comercial', value: 'Tasa de cierre, llamadas, auditorías, score promedio' },
            { label: 'Ranking', value: 'Closers ordenados por cash collected con tasa y score' },
            { label: 'Filtros', value: 'Por fecha, closer, funnel y tipo de venta' },
          ],
        },
      },
      {
        number: '4.2',
        label: 'Agendas',
        description: 'Google Calendar, seguimientos automáticos y control de no-shows.',
        detail: {
          title: 'Agendas Inteligentes',
          body: 'Integración bidireccional con Google Calendar. Seguimientos automáticos con recordatorios por WhatsApp, control de no-shows y métricas de show-up rate por setter.',
          specs: [
            { label: 'Google Calendar', value: 'Sincronización bidireccional automática' },
            { label: 'Seguimientos', value: 'Programados con canal (WhatsApp, llamada, email)' },
            { label: 'Recordatorios', value: 'Notificaciones automáticas al closer y al lead' },
            { label: 'No-shows', value: 'Tracking y métricas de show-up rate por setter' },
          ],
        },
      },
    ],
  },
]
