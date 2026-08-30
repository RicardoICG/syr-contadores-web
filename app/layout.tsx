import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S&R Contadores | Outsourcing Contable, Tributario y Laboral",
  description: "Blindamos tu empresa contra multas y contingencias en Perú. Contabilidad con tecnología ERP y gestión laboral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Añadimos flexbox al body para que el footer siempre se quede abajo */}
      <body className={`${inter.className} bg-slate-900 flex flex-col min-h-screen`}>
        
        {/* BARRA DE NAVEGACIÓN ADAPTADA A CELULARES */}
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter hover:scale-105 transition-transform">
              S&R<span className="text-white text-lg font-medium tracking-normal ml-1">Contadores</span>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 w-full md:w-auto">
              <Link href="/" className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">Inicio</Link>
              <Link href="/blog" className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">Blog</Link>
              <Link href="/calculadora" className="text-xs md:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 bg-cyan-950/30 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg border border-cyan-900/50">
                <span>📊</span> 
                <span className="hidden sm:inline">Calculadora de Rentabilidad</span>
                <span className="sm:hidden">Calculadora</span>
              </Link>
              <Link href="/login" className="px-3 py-1.5 md:px-5 md:py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm font-bold rounded-lg border border-slate-700 transition-all flex items-center gap-1 md:gap-2">
                <span>🔒</span> VIP
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENIDO DINÁMICO (Aquí se cargan tus páginas) */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* FOOTER PROFESIONAL S&R CONTADORES */}
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 text-slate-400">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Columna 1: Marca y Dirección */}
            <div>
              <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter mb-6 inline-block">
                S&R<span className="text-white text-lg font-medium tracking-normal ml-1">Contadores</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Soluciones contables, tributarias y laborales de alto nivel para blindar y hacer crecer tu negocio.
              </p>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-xl">📍</span>
                <p>
                  <strong className="text-slate-200">Oficina Principal:</strong><br />
                  AA.HH Santa Rosa del Sauce<br />
                  MZ J1 LT-3<br />
                  San Juan de Lurigancho, Lima
                </p>
              </div>
            </div>

            {/* Columna 2: Socios Fundadores */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                Socios Fundadores
              </h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 font-black shadow-inner">
                    RC
                  </div>
                  <div>
                    <p className="text-slate-200 font-bold text-sm">Ricardo Ismael Cervantes Gutierrez</p>
                    <p className="text-xs text-slate-500">Consultor Tributario y Financiero</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-black shadow-inner">
                    SP
                  </div>
                  <div>
                    <p className="text-slate-200 font-bold text-sm">Sheila Puchoc Tejeda</p>
                    <p className="text-xs text-slate-500">Especialista Contable y Laboral</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Contacto Directo
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <a href="https://wa.me/51974684397" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">
                    +51 974 684 397
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:Ricardoiscervantesg@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                    Ricardoiscervantesg@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:s5hyla14@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                    s5hyla14@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/50 text-center md:flex md:justify-between md:text-left text-xs text-slate-600">
            <p>© {new Date().getFullYear()} S&R Contadores. Todos los derechos reservados.</p>
            <div className="mt-2 md:mt-0 space-x-4">
              <Link href="/" className="hover:text-slate-400">Términos y Condiciones</Link>
              <Link href="/" className="hover:text-slate-400">Políticas de Privacidad</Link>
            </div>
          </div>
        </footer>

        {/* BOTÓN WHATSAPP FLOTANTE */}
        <a 
          href="https://wa.me/51974684397?text=Hola%20S%26R%20Contadores,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center gap-0 overflow-hidden"
        >
          {/* Ícono SVG de WhatsApp */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {/* Texto que aparece al pasar el mouse (en PC) */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:ml-3 font-bold text-sm">
            Escríbenos
          </span>
        </a>

      </body>
    </html>
  );
}