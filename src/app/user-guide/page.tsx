"use client"

import { useState, useEffect } from "react"
import { Button } from "../../../button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../card"
import { Badge } from "../../../badge"
import {
  Heart,
  Activity,
  Calendar,
  FileText,
  Brain,
  Download,
  Users,
  ChevronRight,
  Home,
  CheckCircle,
  ArrowLeft,
  Smartphone,
  Bot,
  FlaskConical,
  Zap,
  Lock,
  RefreshCw,
  Headphones,
} from "lucide-react"
import Image from "next/image"

const userQuotes = [
  "Tu salud es tu responsabilidad, pero no tienes que hacerlo solo.",
  "Cuando las personas tienen información clara, toman mejores decisiones sobre su bienestar.",
  "La prevención es la mejor medicina, y Maily te ayuda a prevenir.",
  "Tu salud, tu control, tu futuro.",
]

const features = [
  {
    icon: Home,
    title: "Home - Tu Centro de Control",
    description: "Tu hub de salud personal con consejos actualizados y conexión directa con nuestra IA.",
    color: "bg-blue-500",
    details: [
      "Tarjetas informativas con consejos de salud actualizados",
      "Botón Maily que te conecta directamente con nuestra IA",
      "Contacto con especialistas para atención profesional",
      "Resumen rápido de tu estado de salud actual",
    ],
  },
  {
    icon: Activity,
    title: "Enfermería - Monitoreo Inteligente",
    description: "Tu centro de control de signos vitales con cálculo automático de IMC y gráficas detalladas.",
    color: "bg-red-500",
    details: [
      "Cálculo automático de IMC con visualización clara",
      "Gráficas individuales de cada signo vital",
      "Gráfica integral con análisis de IA",
      "Botón flotante azul para ingresar nuevos datos",
      "Recomendaciones personalizadas basadas en tus valores",
    ],
  },
  {
    icon: FileText,
    title: "Recetas - Organización Digital",
    description: "Transforma tus recetas físicas en documentos digitales organizados y accesibles.",
    color: "bg-green-500",
    details: [
      "Captura fotos de tus recetas médicas",
      "Guarda en PDF para acceso permanente",
      "Organiza por fecha y especialidad médica",
      "Comparte fácilmente con médico o farmacia",
    ],
  },
  {
    icon: Calendar,
    title: "Calendario - Tu Agenda de Salud",
    description: "Tu organizador personal de salud con programación inteligente y recordatorios.",
    color: "bg-purple-500",
    details: [
      "Programación inteligente de medicamentos con alarmas",
      "Seguimiento de ejercicio y rutinas de actividad",
      "Recordatorios de citas médicas",
      "Celebración de cumpleaños y fechas importantes",
      "Integración con alarmas del teléfono",
    ],
  },
  {
    icon: FlaskConical,
    title: "Laboratorio - Archivo Digital",
    description: "Tu historial médico digital para resultados de laboratorio organizados y accesibles.",
    color: "bg-orange-500",
    details: [
      "Captura y almacena resultados de laboratorio",
      "Organiza por fecha y tipo de examen",
      "Acceso rápido a tu historial médico completo",
      "Comparte resultados con especialistas",
    ],
  },
]

const whyChooseMaily = [
  {
    icon: Smartphone,
    title: "Interfaz intuitiva",
    description: "Fácil de usar para cualquier edad",
  },
  {
    icon: Bot,
    title: "IA empática",
    description: "Recomendaciones personalizadas y motivadoras",
  },
  {
    icon: Lock,
    title: "Privacidad total",
    description: "Tus datos están seguros y son tuyos",
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones constantes",
    description: "Siempre con las últimas innovaciones",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Estamos aquí para ayudarte",
  },
]

export default function UserGuide() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % userQuotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => (window.location.href = "/")} className="mr-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver
            </Button>
            <Image src="/MailyLog.png" alt="Maily T Cuida Logo" width={40} height={40} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Maily T Cuida</h1>
              <p className="text-sm text-gray-600">Guía para Usuarios</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Users className="w-3 h-3 mr-1" />
            Para Ti
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Maily - Tu Asistente de Salud Personal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubre cómo Maily puede transformar la manera en que cuidas tu salud y la de tu familia
            </p>

            {/* User Quote */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-blue-100 mb-8">
              <p className="text-gray-700 italic text-lg transition-all duration-500">"{userQuotes[currentQuote]}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maily Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">🤔 ¿Por qué nació Maily?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-blue-100 mb-6">
              Maily nació de una visión simple pero poderosa: <strong>poner el control de tu salud en tus manos</strong>
              . En un mundo donde la prevención es la mejor medicina, creemos que cada persona merece tener acceso a
              herramientas inteligentes que le ayuden a tomar decisiones informadas sobre su bienestar.
            </p>
            <p className="text-lg text-blue-100">
              Nuestra aplicación está en constante evolución porque entendemos que la tecnología médica avanza cada día,
              y queremos que tú siempre tengas acceso a las mejores herramientas para cuidar tu salud. El equipo de
              Maily se compromete a mantener la app actualizada con las últimas innovaciones en salud digital.
            </p>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🤖 IA que Cuida de Ti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maily no es solo una app, es tu asistente de salud personal inteligente
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Brain className="w-12 h-12 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold">Tu Compañera de Confianza</h3>
                </div>

                <p className="text-lg text-purple-100 mb-8">
                  Nuestra IA analiza tus signos vitales de manera empática y profesional, dándote recomendaciones
                  personalizadas que te ayudan a:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                      <p className="text-purple-100">Entender qué significan tus números de salud</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                      <p className="text-purple-100">Identificar patrones y tendencias en tu bienestar</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                      <p className="text-purple-100">Recibir consejos prácticos para mejorar tu salud</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                      <p className="text-purple-100">
                        Tomar decisiones informadas sobre cuándo consultar a un profesional
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-center text-purple-100 italic">
                    "La IA de Maily está diseñada para ser tu compañera de confianza, no para reemplazar a los médicos,
                    sino para empoderarte con conocimiento y motivarte a priorizar tu salud."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📱 Funcionalidades Principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada pantalla de Maily está diseñada pensando en tu comodidad y necesidades de salud
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-800">{feature.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div
                    className={`bg-gradient-to-br ${
                      feature.color === 'bg-blue-500' ? 'from-blue-500 to-blue-300' :
                      feature.color === 'bg-red-500' ? 'from-red-500 to-red-300' :
                      feature.color === 'bg-green-500' ? 'from-green-500 to-green-300' :
                      feature.color === 'bg-purple-500' ? 'from-purple-500 to-purple-300' :
                      feature.color === 'bg-orange-500' ? 'from-orange-500 to-orange-300' :
                      'from-gray-500 to-gray-300'
                    } rounded-2xl p-8 text-white shadow-2xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} hover:rotate-0 transition-transform duration-300`}
                  >
                    <feature.icon className="w-20 h-20 mb-6 animate-pulse" />
                    <h4 className="text-2xl font-bold mb-4">{feature.title.split(" - ")[0]}</h4>
                    <p className="text-lg opacity-90">
                      {index === 0 && "Tu punto de partida diario para una vida más saludable"}
                      {index === 1 && "Control total de tus signos vitales con tecnología avanzada"}
                      {index === 2 && "Nunca pierdas una receta médica importante"}
                      {index === 3 && "Organiza tu vida saludable de manera inteligente"}
                      {index === 4 && "Tu historial médico siempre a la mano"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎯 Nuestro Compromiso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maily fue creada para empoderarte a tomar el control de tu salud. Creemos que cuando las personas tienen
              acceso a información clara y herramientas prácticas, toman mejores decisiones sobre su bienestar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">¿Por qué elegir Maily?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseMaily.map((reason, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">🚀 Únete a la Revolución de la Salud Personal</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Descarga Maily hoy y comienza tu viaje hacia una vida más saludable. Recuerda: tu salud es tu
            responsabilidad, pero no tienes que hacerlo solo. Maily está aquí para guiarte, motivarte y empoderarte en
            cada paso del camino.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">¡Tu salud, tu control, tu futuro! 💙</h3>
            <p className="text-xl text-blue-100 mb-6">Maily - Cuidando tu salud, un día a la vez.</p>

            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1C3hOI00-ArYKQI4gp0kgReUiFtOlKUPw/view?usp=sharing",
                  "_blank",
                )
              }
            >
              <Download className="mr-3 h-6 w-6" />
              Descargar Maily Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Un Mensaje del Equipo de Desarrollo</h3>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-center leading-relaxed">
                  Esta aplicación fue desarrollada con la mejor de las intenciones, tengan por seguro que siempre tendrá
                  una
                  <strong className="text-green-600"> versión gratuita para todos</strong>. Este es uno de los proyectos
                  sobre los cuales más hemos trabajado, pero también uno de los primeros.
                </p>

                <p className="text-center leading-relaxed mt-4">
                  Pedimos su comprensión pues seguiremos agregando actualizaciones y mejoras para que todos tengamos una
                  mejor experiencia. Por tu paciencia y preferencia te agradecemos mucho.
                </p>

                <p className="text-center leading-relaxed mt-4 text-blue-600 font-semibold">
                  Nosotros, el equipo de desarrollo, esperamos puedas darle el mejor de los usos para ti y tus
                  familiares.
                </p>
              </div>

              <div className="flex items-center justify-center mt-8 space-x-4">
                <div className="flex items-center space-x-2 text-green-600">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Hecho con amor</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Para la comunidad</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">Siempre gratis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/MailyLog.png" alt="Maily T Cuida" width={40} height={40} className="rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">Maily T Cuida</h3>
                <p className="text-gray-400">Tu Asistente de Salud Personal</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Grupo Camsa</p>
              <p className="text-sm text-gray-500">"Cuidando tu salud, un día a la vez"</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Maily T Cuida - Todos los derechos reservados</p>
            <p className="text-sm text-gray-500 mt-2">Versión Alpha - Siempre gratuita para todos</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
