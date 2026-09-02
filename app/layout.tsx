import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs' // <- ¡Importación de Seguridad!
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
    // Envolvemos toda la aplicación con el escudo de seguridad
    <ClerkProvider>
      <html lang="es">
        <body className={`${inter.className} bg-slate-900 flex flex-col min-h-screen`}>
          
          {/* BARRA DE NAVEGACIÓN (Tu diseño intacto) */}
          <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
              <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                S&R<span className="text-white text-lg font-medium tracking-normal ml-1">Contadores</span>
              </Link>
              
              <div className="flex gap-6 text-sm font-semibold text-slate-300">
                <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
                <Link href="/recursos" className="hover:text-cyan-400 transition-colors">Recursos</Link>
              </div>
              
              <div className="flex gap-4">
                <Link href="/calculadora" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-1.5 rounded-full text-sm font-bold border border-slate-700 transition-all flex items-center gap-2">
                  📊 Calculadora de Rentabilidad
                </Link>
                <Link href="/vip" className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-900/20 transition-all flex items-center gap-2">
                  🔒 VIP
                </Link>
              </div>
            </div>
          </nav>

          {/* CONTENIDO DE LAS PÁGINAS */}
          <main className="flex-grow">
            {children}
          </main>

          {/* PIE DE PÁGINA (Tu diseño intacto) */}
          <footer className="bg-[#020817] border-t border-slate-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    <span className="text-blue-400">S&R</span> Contadores
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Soluciones contables, tributarias y laborales de alto nivel para blindar y hacer crecer tu negocio.
                  </p>
                  <div className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-red-500 text-lg">📍</span>
                    <div>
                      <strong className="text-slate-300 block mb-1">Oficina Principal:</strong>
                      AA.HH Santa Rosa del Sauce<br/>MZ J1 LT-3<br/>San Juan de Lurigancho, Lima
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-cyan-500 pl-3">Socios Fundadores</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold">
                        RC
                      </div>
                      <div>
                        <p className="text-slate-200 font-bold text-sm">Ricardo Ismael Cervantes Gutierrez</p>
                        <p className="text-slate-500 text-xs">Consultor Tributario y Financiero</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold">
                        SP
                      </div>
                      <div>
                        <p className="text-slate-200 font-bold text-sm">Sheila Puchoc Tejeda</p>
                        <p className="text-slate-500 text-xs">Especialista Contable y Laboral</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-cyan-500 pl-3">Contacto Directo</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="tel:+51974684397" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                        <span className="text-pink-500">📞</span> +51 974 684 397
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Ricardoiscervantesg@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                        <span className="text-slate-300">✉️</span> Ricardoiscervantesg@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:s5hyla14@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                        <span className="text-slate-300">✉️</span> s5hyla14@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
              
              <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-xs text-center md:text-left">
                  © 2026 S&R Contadores. Todos los derechos reservados.
                </p>
                <div className="flex gap-6 text-xs text-slate-500">
                  <Link href="/terminos" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
                  <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Políticas de Privacidad</Link>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/51974684397" 
              target="_blank" 
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-900/30 transition-transform hover:scale-110 z-50 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}