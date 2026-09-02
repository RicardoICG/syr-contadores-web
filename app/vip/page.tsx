import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function VIPPage() {
  // Clerk extrae los datos del usuario que acaba de iniciar sesión de forma segura
  const user = await currentUser();

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20 min-h-screen">
      
      {/* Cabecera del Dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 p-8 rounded-2xl mb-8 shadow-xl relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="relative z-10 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Bienvenido, <span className="text-cyan-400">{user?.firstName || 'Cliente'}</span>
          </h1>
          <p className="text-slate-400 text-lg">Tu portal seguro y confidencial de S&R Contadores.</p>
        </div>
        
        <div className="relative z-10 bg-slate-950 p-2 rounded-full border border-slate-800 flex items-center justify-center shadow-lg">
          <div className="scale-125 origin-center mx-2 my-1">
            <UserButton />
          </div>
        </div>
      </div>

      {/* Grid de Servicios del Cliente */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Tarjeta 1: Documentos Tributarios */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900 transition-all group flex flex-col">
          <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">📂</div>
          <h2 className="text-xl font-bold text-white mb-3">Mis Documentos</h2>
          <p className="text-slate-400 text-sm mb-8 flex-grow">
            Accede a tus declaraciones mensuales (PDT), reportes financieros y planillas de forma segura.
          </p>
          <button className="w-full bg-slate-800 text-cyan-400 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700">
            Revisar Archivos
          </button>
        </div>

        {/* Tarjeta 2: Estado Tributario */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 hover:bg-slate-900 transition-all group flex flex-col">
          <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">📊</div>
          <h2 className="text-xl font-bold text-white mb-3">Estado de Cumplimiento</h2>
          <p className="text-slate-400 text-sm mb-8 flex-grow">
            Verifica tus próximos vencimientos con SUNAT y el estado de tus pagos de AFP/ONP.
          </p>
          <button className="w-full bg-slate-800 text-amber-400 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700">
            Ver Cronograma
          </button>
        </div>

        {/* Tarjeta 3: Asesoría y Soporte */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900 transition-all group flex flex-col">
          <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">💬</div>
          <h2 className="text-xl font-bold text-white mb-3">Contacto Directo</h2>
          <p className="text-slate-400 text-sm mb-8 flex-grow">
            Comunícate directamente con tu asesor asignado para consultas urgentes o requerimientos especiales.
          </p>
          <Link href="https://wa.me/51974684397" target="_blank" className="w-full bg-slate-800 text-blue-400 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700 text-center block">
            Solicitar Soporte
          </Link>
        </div>

      </div>
    </main>
  );
}