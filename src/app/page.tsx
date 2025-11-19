import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">PORTAFOLIO</h1>
          <div className="space-x-8">
            <a href="#sobre-mi" className="hover:text-blue-600 transition">Sobre mí</a>
            <a href="#proyectos" className="hover:text-blue-600 transition">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            ¡Hola! Soy <span className="text-blue-600">Jose Santiago Tasco Fernandez</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Estudiante de de quinto semestre de Ingeniera de software de la universiad cooperativa de colombia campus pasto
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#proyectos" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Ver proyectos
            </a>
            <a href="#contacto" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/tu-foto.jpg" // pon aquí tu foto en public/tu-foto.jpg (o usa un placeholder)
                alt="Tu nombre"
                width={400}
                height={400}
                className="rounded-full shadow-2xl mx-auto"
              />
            </div>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                ¡Hola! Soy un apasionado de la tecnología con una curiosidad innata y una mentalidad creativa, moldeada por mi interés profundo en videojuegos, música, anime y literatura. Estas pasiones no solo forman parte de mi día a día, sino que alimentan mi forma de pensar y estimulan mi imaginación.
              </p>
              <p>
                Actualmenteme encuentro en pleno desarrollo como futuro desarrollador fullstack. Mi enfoque está puesto en dominar tanto tecnologías frontend como backend
              </p>
              <p>
                Me considero una persona en constante evolución fortaleciendo fundamentos técnicos, perfeccionando habilidades blandas 🎮
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Proyectos destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Nombre del Proyecto</h3>
                <p className="text-gray-600 mb-4">
                  Breve descripción del proyecto. Tecnologías usadas: React, Node.js, etc.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
                  <a href="#" className="text-blue-600 hover:underline">Live Demo →</a>
                </div>
              </div>
            </div>

            {/* Repite el bloque de arriba para más proyectos */}
            {/* Puedes copiar y pegar 2-3 veces más */}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Hablamos?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Estoy abierto a nuevas oportunidades y colaboraciones.
          </p>
          <a
            href="josefernandez0037@gmail.com"
            className="inline-block px-10 py-5 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Envíame un email
          </a>
          <div className="flex justify-center gap-8 mt-12">
            <a href="https://github.com/tuusuario" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://twitter.com/tuusuario" target="_blank" className="hover:text-blue-400 transition">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t">
        © 2025 JoseTasco. Hecho con Next.js
      </footer>
    </>
  );
}