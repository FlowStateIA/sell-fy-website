import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  TrendingUp,
  Mic,
  DollarSign,
  BarChart3,
  Calendar,
  CreditCard
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          SELL<span className="text-red-600">-FY</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#producto" className="text-gray-400 hover:text-white transition-colors">
            Producto
          </a>
          <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
            Nosotros
          </a>
          <a href="#precios" className="text-gray-400 hover:text-white transition-colors">
            Precios
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://app.sell-fy.app"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Log In
          </a>
          <a
            href="https://calendly.com/sell-fy/30min"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all hover:scale-105"
          >
            Agenda una Consultoría
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-gray-950 to-gray-950" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            La plataforma de gestión para equipos de ventas de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              alto rendimiento
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Elimina el Excel y el WhatsApp. Gestiona ventas, comisiones, auditorías con IA y analítica en tiempo real — todo desde una sola plataforma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://calendly.com/sell-fy/30min"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-red-600/50"
            >
              Agenda una Consultoría
            </a>
            <button className="px-8 py-4 border border-gray-700 hover:border-gray-600 text-white rounded-lg text-lg transition-all hover:bg-gray-900">
              Conoce más
            </button>
          </div>

          {/* Placeholder for dashboard screenshot */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent h-1/3 bottom-0 z-10" />
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2 backdrop-blur-sm">
              <div className="bg-gray-950 rounded-lg aspect-video flex items-center justify-center">
                <p className="text-gray-600 text-lg">Dashboard Screenshot Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Gestión de Ventas',
      description: 'Registra, rastrea y analiza cada venta con trazabilidad completa'
    },
    {
      icon: Mic,
      title: 'Auditorías con IA (Jarvis)',
      description: 'Transcripción y análisis automático de llamadas de ventas'
    },
    {
      icon: DollarSign,
      title: 'Comisiones Automáticas',
      description: 'Liquidaciones transparentes, sin Excel, sin conflictos'
    },
    {
      icon: BarChart3,
      title: 'Analytics en Tiempo Real',
      description: 'Dashboard con KPIs, tasa de cierre, ranking de closers'
    },
    {
      icon: Calendar,
      title: 'Agendas Inteligentes',
      description: 'Integración con Google Calendar, seguimientos automáticos'
    },
    {
      icon: CreditCard,
      title: 'Gestión de Cobros',
      description: 'Cuotas, renovaciones y cartera organizada por rol'
    }
  ]

  return (
    <section id="producto" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Todo lo que necesitas para vender más
          </h2>
          <p className="text-xl text-gray-400">
            Herramientas profesionales para equipos de alto rendimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index
}: {
  icon: any;
  title: string;
  description: string;
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-red-600/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="relative">
        <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
          <Icon className="w-6 h-6 text-red-600" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Agenda una consultoría gratuita',
      description: 'Conversamos con tu equipo para entender tus necesidades'
    },
    {
      number: '02',
      title: 'Configuración en 24 horas',
      description: 'Configuramos tu equipo en la plataforma en menos de un día'
    },
    {
      number: '03',
      title: 'Empieza a vender mejor',
      description: 'Tu equipo empieza a vender con datos, no con intuición'
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-400">
            Empieza a usar Sell-fy en tres pasos simples
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  description,
  index
}: {
  number: string;
  title: string;
  description: string;
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="text-center"
    >
      <div className="text-6xl font-bold text-red-600/20 mb-4">{number}</div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </motion.div>
  )
}

function Pricing() {
  return (
    <section id="precios" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Consultoría + Software
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Plataforma completa + acompañamiento experto para escalar tu equipo de ventas
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Plan Empresarial
              </h3>
              <p className="text-gray-400 text-lg">
                Solución personalizada para tu equipo
              </p>
            </div>

            <ul className="text-left space-y-4 mb-8 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <span>Plataforma completa con todas las funcionalidades</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <span>Configuración y onboarding personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <span>Soporte prioritario y capacitación continua</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                <span>Integraciones personalizadas</span>
              </li>
            </ul>

            <a
              href="https://calendly.com/sell-fy/30min"
              className="inline-block w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-red-600/50"
            >
              Agenda una Consultoría
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">
              SELL<span className="text-red-600">-FY</span>
            </div>
            <p className="text-gray-400 text-sm">
              Flow State IA LLC — © 2026
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#producto" className="text-gray-400 hover:text-white transition-colors">
              Producto
            </a>
            <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
              Nosotros
            </a>
            <a href="#precios" className="text-gray-400 hover:text-white transition-colors">
              Precios
            </a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
