import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'S&R Contadores | Outsourcing Contable y Tributario',
  description: 'Especialistas en normativa SUNAT, outsourcing contable, tributario, laboral y gestión de costos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased flex flex-col min-h-screen`}>
        
        {/* BARRA DE NAVEGACIÓN SUPERIOR RESPONSIVA */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
            
            <Link href="/" className="flex items-center gap-2 group relative z-10">
              <span className="text-2xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                S&R <span className="text-cyan-600">Contadores</span>
              </span>
            </Link>

            {/* TRUCO CSS PARA MENÚ MÓVIL (Mantiene el archivo del lado del servidor) */}
            <input type="checkbox" id="mobile-menu" className="hidden peer" />
            
            {/* Ícono de Hamburguesa (Solo visible en móviles) */}
            <label htmlFor="mobile-menu" className="md:hidden cursor-pointer text-slate-300 hover:text-white p-2 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>

            {/* Menú Desktop (Oculto en móviles) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">Inicio</Link>
              <Link href="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/recursos" className="text-slate-300 hover:text-cyan-400 transition-colors">Recursos</Link>
              <Link href="/contacto" className="text-sm font-bold text-cyan-400 border border-cyan-800 hover:bg-cyan-900/30 px-5 py-2 rounded-xl transition-all">Contacto</Link>
            </nav>

            {/* Menú Móvil Desplegable (Visible al tocar el ícono de hamburguesa) */}
            <nav className="absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 hidden peer-checked:flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl z-40">
              <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg">Inicio</Link>
              <Link href="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg">Blog</Link>
              <Link href="/recursos" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg">Recursos</Link>
              <Link href="/contacto" className="text-cyan-400 font-bold border border-cyan-800 px-8 py-3 rounded-xl transition-all mt-2">Contacto</Link>
            </nav>

          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* PIE DE PÁGINA PROFESIONAL (INTACTO) */}
        <footer className="bg-[#0b1120] border-t border-slate-800 pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              {/* Columna 1: Marca y Dirección */}
              <div>
                <Link href="/" className="inline-block mb-4">
                  <span className="text-2xl font-black tracking-tighter text-white">
                    S&R <span className="text-cyan-600">Contadores</span>
                  </span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Soluciones contables, tributarias y laborales de alto nivel para blindar y hacer crecer tu negocio.
                </p>
                
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="mt-1 text-cyan-500">📍</span>
                  <div>
                    <p className="font-bold text-white mb-1">Oficina Principal</p>
                    <p>AA.HH Santa Rosa del Sauce</p>
                    <p>MZ. J/LT-3</p>
                    <p>San Juan de Lurigancho, Lima</p>
                  </div>
                </div>
              </div>

              {/* Columna 2: Socios Fundadores */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">Socios Fundadores</h4>
                <div className="space-y-6">
                  {/* Ricardo */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                      <span className="text-cyan-400 font-bold tracking-widest text-sm">RC</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Ricardo Ismael Cervantes Gutierrez</p>
                      <p className="text-slate-400 text-xs mt-0.5">Contador Tributario y Financiero</p>
                    </div>
                  </div>
                  
                  {/* Sheila */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                      <span className="text-blue-400 font-bold tracking-widest text-sm">SP</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Sheila Puchoc Tejeda</p>
                      <p className="text-slate-400 text-xs mt-0.5">Especialista Laboral</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 3: Contacto Directo */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg">Contacto Directo</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-center gap-3">
                    <span className="text-cyan-500">📞</span>
                    <span>+51 974 684 397</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-cyan-500">✉️</span>
                    <a href="mailto:ricardocervantesg@gmail.com" className="hover:text-cyan-400 transition-colors">ricardocervantesg@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-cyan-500">✉️</span>
                    <a href="mailto:sshyla14@gmail.com" className="hover:text-cyan-400 transition-colors">sshyla14@gmail.com</a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>© 2026 S&R Contadores. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <Link href="/terminos" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
                <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Políticas de Privacidad</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* BOTÓN FLOTANTE DE WHATSAPP (CORREGIDO CON MENSAJE PREDEFINIDO) */}
        <a 
          href="https://wa.me/51974684397?text=Hola%2C%20S%26R%20Contadores.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20contables%20y%20tributarios." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5b] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}