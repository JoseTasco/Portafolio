"use client";

import Image from "next/image";
import { Star } from "lucide-react"; 
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export default function Home() {

  const playlist = [
    "/music/Beneath the Mask.mp3",
    "/music/Action!.mp3",
    "/music/Fantasy.mp3"
  ];

  const trackNames = [
    "Beneath the Mask - Persona 5",
    "Action!",
    "Fantasy"
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + playlist.length) % playlist.length;
    setCurrentTrack(prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrack];
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">PORTAFOLIO</h1>
          <div className="space-x-8">
            <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Inicio</a>
            <a href="#sobre-mi" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Sobre mí</a>
            <a href="#experiencia" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Experiencia</a>
            <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Proyectos</a>
            <a href="#testimonios" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Testimonios</a>
            <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero / Bienvenida / Intro CV */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/tu-foto.jpg"
            alt="Tu nombre"
            width={200}
            height={200}
            className="rounded-full shadow-2xl mx-auto mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            ¡Hola! Soy <span className="text-blue-600 dark:text-blue-400">Jose Santiago Tasco Fernandez</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Estudiante de quinto semestre de Ingeniera de software de la universidad cooperativa de Colombia campus pasto
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#proyectos" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Ver proyectos
            </a>
            <a href="#contacto" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí (adicional, para intro personal) */}
      <section id="sobre-mi" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/tu-foto.jpg"
                alt="Tu nombre"
                width={400}
                height={400}
                className="rounded-full shadow-2xl mx-auto"
              />
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <p>¡Hola! Soy un apasionado de la tecnología con una curiosidad innata y una mentalidad creativa, moldeada por mi interés profundo en videojuegos, música, anime y literatura. Estas pasiones no solo forman parte de mi día a día, sino que alimentan mi forma de pensar y estimulan mi imaginación.</p>
              <p>Actualmente me encuentro en pleno desarrollo como futuro desarrollador fullstack. Mi enfoque está puesto en dominar tanto tecnologías frontend como backend</p>
              <p>Me considero una persona en constante evolución fortaleciendo fundamentos técnicos, perfeccionando habilidades blandas 🎮</p>
            </div>
          </div>
        </div>
      </section>

            {/* Experiencia Académica */}
      <section id="experiencia" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Formación Académica
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Universidad - Actual */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">
              <div className="flex items-start gap-5">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-xl">
                  <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Ingeniería de Software
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">
                    Universidad Cooperativa de Colombia
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Campus Pasto, Nariño
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    5° semestre • 2025 – actualidad
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Estudiante activo cursando quito semestre intento dominar todo lo que nos enseñan con proposito de convertirme en un desarrollador full-stack en la actualidad he trabajado en pequeños proyectos haciendo uso de lenguajes python, javascrpit, haciendo uso de herramientas como Next.js, Vercel, bases de datos como MySQL .
                  </p>
                </div>
              </div>
            </div>

            {/* Bachillerato */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition">
              <div className="flex items-start gap-5">
                <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-xl">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6 9v10l6 3 6-3V9l-6 5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Bachiller Académico
                  </h3>
                  <p className="text-xl text-green-600 dark:text-green-400 font-medium mt-1">
                    Institución Educativa INSUCA
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Pasto, Nariño
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Graduado • 24 de junio de 2023
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Finalicé mis estudios de educación media con excelente rendimiento y participación activa en actividades tecnológicas y culturales del colegio.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proyectos (obligatoria) */}
      <section id="proyectos" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-t-xl w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Mi Soundtrack Personal
          </h2>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl animate-pulse flex items-center justify-center">
                <span className="text-5xl"></span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {trackNames[currentTrack]}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Música que me acompaña mientras programo
                </p>
              </div>
            </div>

            <audio ref={audioRef} className="w-full mb-6" controls />

            <div className="flex justify-center gap-10">
              <button
                onClick={prevTrack}
                className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <SkipBack className="w-8 h-8" />
              </button>
              <button
                onClick={togglePlay}
                className="p-6 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition shadow-xl hover:scale-110"
              >
                {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-1" />}
              </button>
              <button
                onClick={nextTrack}
                className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <SkipForward className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios (obligatoria) */}
      <section id="testimonios" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"Tuve la suerte de trabajar con mi compañero Jose tasco durante este semestre y puedo afirmar que es una persona con la que es muy facil trabajar "</p>
              <p className="font-semibold">– "Juan Pablo"</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"Tetimonio 2"</p>
              <p className="font-semibold">– ""</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto (obligatoria) */}
      <section id="contacto" className="py-20 px-6 bg-gray-900 dark:bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <p className="text-xl mb-8 text-gray-300">Envía un mensaje.</p>
          <a href="mailto:josefernandez0037@gmail.com" className="inline-block px-10 py-5 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Envíame un email
          </a>
        </div>
      </section>

      <footer className="py-16 px-6 bg-gray-800 dark:bg-gray-900 text-gray-400 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#proyectos" className="hover:text-white transition">Proyectos</a></li>
                <li><a href="#experiencia" className="hover:text-white transition">Experiencia</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-6">Redes Sociales</h4>
              <ul className="space-y-4 inlin-block">
                <li>
                  <a href="https://github.com/JoseTasco" className="hover:text-white transition block">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/josetasco" className="hover:text-white transition block">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
          </div>

          <div className="pt-10 border-t border-gray-700">
            <p className="text-sm font-medium">
              © 2025 <span className="text-white">Jose Santiago Tasco Fernández</span>
            </p>
            <p className="text-xs mt-3 text-gray-500">
              Hecho con Next.js + Tailwind CSS + Vercel • Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}