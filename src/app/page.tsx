// Archivo: src/app/page.tsx
// Página principal de Maily T Cuida AI
// Contiene la estructura general, secciones, componentes y lógica de la landing page principal.

"use client"

// Importaciones de React y hooks
import { useState, useEffect } from "react"
// Importación de componentes UI personalizados
import { Button } from "../../button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card"
import { Badge } from "../../badge"
// Importación de íconos de Lucide React
import {
  Heart,
  Activity,
  TrendingUp,
  Calendar,
  Pill,
  FileText,
  Brain,
  ShoppingCart,
  Download,
  Stethoscope,
  Thermometer,
  Shield,
  Users,
  Star,
  ChevronRight,
  Play,
  GraduationCap,
  Code,
  Palette,
  Database,
  Zap,
  Globe,
} from "lucide-react"
// Importación de componente de imagen optimizada de Next.js
import Image from "next/image"

// Frases motivacionales sobre salud que se muestran de forma rotativa
const medicalQuotes = [
  "La salud no lo es todo, pero sin ella, todo lo demás es nada. - Arthur Schopenhauer",
  "Prevenir es mejor que curar. - Desiderius Erasmus",
  "El cuerpo humano es el mejor farmacéutico. Puede producir las drogas adecuadas en las dosis correctas.",
  "La medicina cura a veces, alivia a menudo, consuela siempre. - Hipócrates",
]

// Lista de funcionalidades principales de la app, cada una con su ícono, título, descripción y color
const features = [
  {
    icon: Activity,
    title: "Signos Vitales Completos",
    description:
      "Registra y monitorea peso, estatura, frecuencia cardíaca, presión arterial, saturación de oxígeno, temperatura, glucosa y más.",
    color: "bg-red-500",
  },
  {
    icon: TrendingUp,
    title: "Gráficas Inteligentes",
    description:
      "Visualiza tu historial médico con gráficas individuales e integrales. Exporta reportes en PDF profesionales.",
    color: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "Análisis con IA",
    description:
      "Obtén análisis empáticos y profesionales de tus signos vitales usando inteligencia artificial avanzada.",
    color: "bg-purple-500",
  },
  {
    icon: Calendar,
    title: "Calendario Médico",
    description: "Programa citas, ejercicios y eventos. Gestiona tu agenda de salud de manera integral.",
    color: "bg-green-500",
  },
  {
    icon: Pill,
    title: "Gestión de Medicamentos",
    description: "Programa medicamentos con notificaciones automáticas y alarmas nativas. Nunca olvides una dosis.",
    color: "bg-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "Tienda de Dispositivos",
    description: "Descubre dispositivos médicos recomendados: relojes inteligentes, básculas, oxímetros y más.",
    color: "bg-teal-500",
  },
]

// Estadísticas rápidas que se muestran en la sección de stats
const stats = [
  { number: "13+", label: "Signos Vitales", icon: Heart },
  { number: "24/7", label: "Monitoreo", icon: Shield },
  { number: "IA", label: "Análisis Avanzado", icon: Brain },
  { number: "PDF", label: "Reportes", icon: FileText },
]

// Componente principal de la página
export default function Component() {
  // Estado para la frase motivacional actual
  const [currentQuote, setCurrentQuote] = useState(0)
  // Estado para animación de aparición
  const [isVisible, setIsVisible] = useState(false)

  // Efecto para rotar frases motivacionales cada 5 segundos
  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % medicalQuotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    // Contenedor principal con fondo degradado
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Elementos animados de fondo decorativos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Header principal con logo, título y badge de fase */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo de la app */}
            <Image src="/MailyLog.png" alt="Maily T Cuida Logo" width={40} height={40} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Maily T Cuida AI</h1>
              <p className="text-sm text-gray-600">by Grupo Camsa & Universidad Tecnologica de Acapulco</p>
              {/* Aquí puedes agregar créditos adicionales si lo deseas */}
            </div>
          </div>
          {/* Badge de fase Beta */}
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Play className="w-3 h-3 mr-1" />
            Fase Beta
          </Badge>
        </div>
      </header>

      {/* Sección principal (Hero) con logo grande, título, descripción y botones de acción */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              {/* Logo grande animado */}
              <Image
                src="/MailyLog.png"
                alt="Maily T Cuida"
                width={120}
                height={120}
                className="mx-auto rounded-2xl shadow-2xl animate-pulse"
              />
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Maily T Cuida
              </span>
            </h1>

            {/* Descripción principal */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tu compañero inteligente para el monitoreo de salud. Registra signos vitales, obtén análisis con IA y
              mantén el control total de tu bienestar.
            </p>

            {/* Botones de acción: Descargar APK y Guía de Usuario */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1S3qJchhT5s-Hv6_SSBB0iXB5oUoOPuVy/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar APK
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/user-guide")}
              >
                <Users className="mr-2 h-5 w-5" />
                Guía Completa para Usuarios
              </Button>
            </div>

            {/* Frase motivacional animada */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-blue-100">
              <p className="text-gray-700 italic text-lg transition-all duration-500">&quot;{medicalQuotes[currentQuote]}&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas rápidas */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de funcionalidades principales */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Funcionalidades Principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una suite completa de herramientas médicas diseñadas para profesionales y pacientes
            </p>
          </div>

          {/* Grid de cards de funcionalidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de detalles de funcionalidades */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Explora Cada Funcionalidad</h2>

          <div className="space-y-16">
            {/* Ejemplo: Pantalla de Enfermería */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Pantalla de Enfermería</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Ingresa y visualiza todos tus signos vitales en una interfaz intuitiva. Cada parámetro tiene su propio
                  icono y te lleva directamente a su gráfica histórica.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" /> Peso y Estatura
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" /> Frecuencia Cardíaca y Respiratoria
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" /> Presión Arterial
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" /> Saturación de Oxígeno
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" /> Glucosa, Triglicéridos, Urea
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Thermometer className="w-16 h-16 mb-4 animate-pulse" />
                  <h4 className="text-2xl font-bold mb-2">Monitoreo Integral</h4>
                  <p>Todos tus signos vitales en un solo lugar, organizados y fáciles de consultar.</p>
                </div>
              </div>
            </div>

            {/* Ejemplo: Gráficas */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Gráficas Inteligentes</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Visualiza tu progreso con gráficas individuales para cada signo vital y una vista integral que combina
                  todos los parámetros en colores distintos.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" /> Gráficas históricas individuales
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" /> Vista integral superpuesta
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" /> Exportación a PDF profesional
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" /> Análisis con IA integrado
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <TrendingUp className="w-16 h-16 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold mb-2">Análisis Visual</h4>
                  <p>Comprende tu salud a través de gráficas claras y reportes detallados.</p>
                </div>
              </div>
            </div>

            {/* Ejemplo: Análisis con IA */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Análisis con IA</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Obtén análisis empáticos y profesionales de tus signos vitales usando tecnología de inteligencia
                  artificial avanzada (OpenRouter/Gemini).
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-purple-800 italic">&quot;La IA no reemplaza al médico, pero te ayuda a entender mejor tu salud&quot;</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Brain className="w-16 h-16 mb-4 animate-pulse" />
                  <h4 className="text-2xl font-bold mb-2">Inteligencia Artificial</h4>
                  <p>Análisis personalizado y recomendaciones basadas en tus datos de salud.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de descarga de la app */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">¡Descarga Maily T Cuida Ahora!</h2>
            <p className="text-xl text-green-100 mb-8">
              Únete a la revolución del cuidado de la salud digital. Descarga la versión Beta y comienza a monitorear
              tu bienestar hoy mismo.
            </p>

            {/* Card de descarga con logo y botón */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Image src="/MailyLog.png" alt="Maily T Cuida" width={80} height={80} className="rounded-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Versión Beta Disponible</h3>
              <p className="text-green-100 mb-6">Aplicación nativa para Android - En desarrollo activo</p>

              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1S3qJchhT5s-Hv6_SSBB0iXB5oUoOPuVy/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                <Download className="mr-3 h-6 w-6" />
                Descargar APK
              </Button>
            </div>

            {/* Stats de confianza */}
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Seguro y Confiable</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Fácil de Usar</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Innovador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de colaboradores y equipo */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Colaboradores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El equipo multidisciplinario detrás de Maily T Cuida
            </p>
          </div>

          {/* Card principal del colaborador médico */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 p-8 flex items-center justify-center bg-white/10">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          src="/Medico.jpg"
                          alt="Dr. Jair Cambrón"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Stethoscope className="w-5 h-5" />
                        <span className="text-sm font-medium">Director Médico</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <h3 className="text-3xl font-bold mb-2">Dr. Jair Cambrón</h3>
                    <p className="text-xl text-blue-100 mb-4">
                      Fundador de Clínica CAMSA | Especialista en Longevidad y Medicina Regenerativa
                    </p>
                    <p className="text-lg text-blue-100 mb-6">Vicepresidente de Salud - Coparmex Acapulco</p>

                    <div className="space-y-4 text-white/90">
                      <p>
                        El Dr. Jair Cambrón es un reconocido médico en el ámbito de la longevidad, la medicina
                        regenerativa y el turismo médico en Acapulco, Guerrero. Como fundador de Clínica CAMSA, ha
                        posicionado su proyecto como referente nacional e internacional, atendiendo pacientes de
                        diversas partes del mundo y contribuyendo al desarrollo del turismo wellness en la región.
                      </p>

                      <p>
                        Ha sido galardonado con el{" "}
                        <strong>
                          Primer Lugar en la Feria Internacional LATAM de Innovación y Emprendimiento de Coparmex
                          Nacional
                        </strong>{" "}
                        gracias al desarrollo de Maily Soft, una plataforma digital que facilita la gestión médica, la
                        telemedicina y las recetas electrónicas.
                      </p>

                      <p>
                        Este proyecto sirvió de inspiración y base para la creación de <strong>Maily T-Cuida</strong>,
                        fortaleciendo su compromiso con la salud, la innovación y la tecnología aplicada al bienestar.
                      </p>

                      <p>
                        El Dr. Cambrón ha guiado el enfoque de Maily T-Cuida desde sus inicios, impulsando de forma
                        activa su mejora constante y su desarrollo, con el objetivo de ofrecer a los pacientes una
                        herramienta confiable, accesible y centrada en el bienestar integral.
                      </p>
                    </div>

                    <div className="mt-6 flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <a
                        href="https://www.corporativocamsa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 underline"
                      >
                        www.corporativocamsa.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid de cards del equipo de desarrollo */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Equipo de Desarrolladores</h3>
              <p className="text-lg text-gray-600">Estudiantes de la Universidad Tecnológica de Acapulco</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card: Joseph Quintana */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-64 overflow-hidden">
                      <Image
                        src="/joseph.jpg"
                        alt="Joseph Quintana"
                        width={300}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full">
                      <Code className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Joseph Quintana</h4>
                    <p className="text-blue-600 font-medium mb-3">Desarrollador Principal & Arquitecto de Software</p>
                    <p className="text-gray-600 text-sm mb-4">Estudiante de la Universidad Tecnológica de Acapulco</p>
                    <p className="text-gray-700 text-sm">
                      Responsable de la integración con inteligencia artificial, desarrollo de la calculadora de signos
                      vitales, implementación del sistema de graficación de datos médicos y arquitectura completa del
                      backend. Su expertise en algoritmos y lógica de negocio ha sido fundamental para el funcionamiento
                      robusto de la aplicación.
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                      <Brain className="w-4 h-4 text-purple-500" />
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <Zap className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Danna Liborio */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-64 overflow-hidden">
                      <Image
                        src="/danna.jpg"
                        alt="Danna Liborio"
                        width={300}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-pink-600 text-white p-2 rounded-full">
                      <Palette className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Danna Liborio</h4>
                    <p className="text-pink-600 font-medium mb-3">Diseñadora UX/UI & Experiencia Visual</p>
                    <p className="text-gray-600 text-sm mb-4">Estudiante de la Universidad Tecnológica de Acapulco</p>
                    <p className="text-gray-700 text-sm">
                      Especialista en diseño visual y experiencia de usuario, responsable de crear todas las interfaces
                      de las pantallas de la aplicación. Su trabajo en UX/UI ha logrado que Maily T Cuida sea intuitiva,
                      accesible y visualmente atractiva, priorizando la usabilidad en el contexto médico.
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                      <Palette className="w-4 h-4 text-pink-500" />
                      <Heart className="w-4 h-4 text-red-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card: Kevin Eduardo */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-64 overflow-hidden">
                      <Image
                        src="/kevin.png"
                        alt="Kevin Eduardo"
                        width={300}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full">
                      <Database className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Kevin Eduardo</h4>
                    <p className="text-green-600 font-medium mb-3">Arquitecto de Base de Datos & Gestión de Datos</p>
                    <p className="text-gray-600 text-sm mb-4">Estudiante de la Universidad Tecnológica de Acapulco</p>
                    <p className="text-gray-700 text-sm">
                      Especialista en arquitectura y gestión de bases de datos, encargado del diseño e implementación de
                      toda la estructura de almacenamiento de datos médicos. Su trabajo garantiza la integridad,
                      seguridad y eficiencia en el manejo de información sensible de salud de los usuarios.
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                      <Database className="w-4 h-4 text-green-500" />
                      <Shield className="w-4 h-4 text-blue-500" />
                      <Activity className="w-4 h-4 text-red-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats del equipo */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-6">Nuestro Compromiso</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                  <h5 className="text-lg font-semibold mb-2">Formación Académica</h5>
                  <p className="text-blue-100">Universidad Tecnológica de Acapulco</p>
                </div>
                <div>
                  <Heart className="w-12 h-12 mx-auto mb-4" />
                  <h5 className="text-lg font-semibold mb-2">Pasión por la Salud</h5>
                  <p className="text-blue-100">Tecnología al servicio del bienestar</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h5 className="text-lg font-semibold mb-2">Trabajo en Equipo</h5>
                  <p className="text-blue-100">Colaboración multidisciplinaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con créditos y derechos */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/MailyLog.png" alt="Maily T Cuida" width={40} height={40} className="rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">Maily T Cuida</h3>
                <p className="text-gray-400">Desarrollado por Joseph Quintana</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Grupo Camsa</p>
              <p className="text-sm text-gray-500">&quot;Tu salud es nuestra prioridad&quot;</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Maily T Cuida - Todos los derechos reservados</p>
            <p className="text-sm text-gray-500 mt-2">Versión Beta - En desarrollo continuo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// Fin del archivo page.tsx
