'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from '@/components/footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#home" className="text-2xl font-bold">
              <span className="text-blue-400">J</span>M
            </Link>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`capitalize ${activeSection === item ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-2xl capitalize hover:text-blue-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>
        <div className="text-center relative z-10">

          <Image
            src="/profile.jpg"
            alt="Jefferson Max"
            width={300}
            height={0}
            className="rounded-full mx-auto mb-8  shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Jefferson Max
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Desarrollador Web Creativo y Productivo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="#projects">Ver Mis Proyectos</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gray-700 border-none shadow-xl">
              <CardContent className="p-6">
                <p className="text-lg mb-6 text-gray-300">
                  Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales.
                  Mi enfoque combina creatividad con eficiencia, siempre buscando soluciones innovadoras
                  para los desafíos tecnológicos actuales.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Con experiencia en tecnologías front-end y back-end, disfruto construyendo aplicaciones
                  web completas y escalables que no solo cumplen con los requisitos técnicos, sino que
                  también ofrecen una experiencia de usuario excepcional.
                </p>
                <blockquote className="text-xl italic text-blue-400 text-center border-l-4 border-blue-400 pl-4">
                  "La innovación distingue a los líderes de los seguidores." - Steve Jobs
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Aula virtual", tech: ["React", "Node.js", "Next.js", "PostgreSQL", "TypeScript"] },
              { name: "Portfolio Website", tech: ["Next.js", "Tailwind CSS"] },
              { name: "Task Manager", tech: ["Vue.js", "Firebase"] }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-800 border-none overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src='/consulting.png'
                    alt={`Proyecto ${index + 1}`}
                    width={500}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                    <p className="text-gray-400 mb-4">Una breve descripción del proyecto y las tecnologías utilizadas en su desarrollo.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-500 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="#">Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Mis Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['nest', 'node', 'js', 'react', 'php', 'git', 'postgresql', 'typescript', 'githab', 'mysql','python'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full  ">
                  <img
                    src={`/icons/${skill}.png`}
                    alt={skill}
                    className="w-15 h-15 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">¿Listo para trabajar juntos?</h2>
          <p className="text-xl mb-8 text-gray-300">Contáctame y hagamos realidad tu próximo proyecto.</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
            <Link href="mailto:jefferson.max@example.com">Envíame un Email</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* end code Footer */}

    </div>
  )
}

