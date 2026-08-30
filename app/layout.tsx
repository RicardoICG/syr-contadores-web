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
      <body className={inter.className}>
        
        {/* BARRA DE NAVEGACIÓN ADAPTADA A CELULARES */}
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            
            {/* Logo de S&R Contadores */}
            <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter hover:scale-105 transition-transform">
              S&R<span className="text-white text-lg font-medium tracking-normal ml-1">Contadores</span>
            </Link>

            {/* Enlaces de navegación (Ahora 100% visibles en celular) */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 w-full md:w-auto">
              <Link href="/" className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">
                Inicio
              </Link>
              <Link href="/blog" className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">
                Blog
              </Link>
              
              {/* Calculadora (Texto corto en celular, largo en PC) */}
              <Link href="/calculadora" className="text-xs md:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 bg-cyan-950/30 px-2 py-1.5 md:px-3 md:py-1.5 rounded-lg border border-cyan-900/50">
                <span>📊</span> 
                <span className="hidden sm:inline">Calculadora de Rentabilidad</span>
                <span className="sm:hidden">Calculadora</span>
              </Link>
              
              {/* Botón VIP */}
              <Link href="/login" className="px-3 py-1.5 md:px-5 md:py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm font-bold rounded-lg border border-slate-700 transition-all flex items-center gap-1 md:gap-2">
                <span>🔒</span> VIP
              </Link>
            </div>
            
          </div>
        </nav>

        {/* CONTENIDO DINÁMICO */}
        {children}
        
      </body>
    </html>
  );
}