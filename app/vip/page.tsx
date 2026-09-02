import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { client } from '@/sanity/lib/client'; // <-- Conexión a la base de datos

export const revalidate = 0; // Esto asegura que la bóveda siempre muestre la info en vivo

// Función que cruza el correo de Clerk con la base de datos de Sanity
async function getDocumentosPrivados(email: string) {
  const query = `*[_type == "documentoVip" && clienteEmail == $email] | order(fecha desc) {
    _id,
    titulo,
    tipo,
    fecha,
    "archivoUrl": archivo.asset->url,
    "nombreOriginal": archivo.asset->originalFilename
  }`
  return client.fetch(query, { email })
}

export default async function VIPPage() {
  // Clerk extrae el usuario seguro de la sesión actual
  const user = await currentUser();
  const correoCliente = user?.primaryEmailAddress?.emailAddress || '';
  
  // Llamamos a la base de datos pasándole el correo del cliente para buscar sus archivos
  const documentos = await getDocumentosPrivados(correoCliente);

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20 min-h-screen">
      
      {/* Cabecera del Dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 p-8 rounded-2xl mb-8 shadow-xl relative overflow-hidden">
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
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900 transition-all group flex flex-col">
          <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">📂</div>
          <h2 className="text-xl font-bold text-white mb-3">Mis Documentos</h2>
          <p className="text-slate-400 text-sm mb-8 flex-grow">
            Accede a tus declaraciones mensuales (PDT), reportes financieros y planillas de forma segura.
          </p>
          <a href="#documentos" className="w-full text-center bg-slate-800 text-cyan-400 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700 block">
            Revisar Archivos
          </a>
        </div>

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

      {/* NUEVA SECCIÓN: BANDEJA DE DOCUMENTOS DEL CLIENTE */}
      <div id="documentos" className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span>Bandeja de Archivos</span>
          <span className="bg-cyan-900/50 text-cyan-400 text-sm px-3 py-1 rounded-full border border-cyan-800">
            {documentos.length} {documentos.length === 1 ? 'documento' : 'documentos'}
          </span>
        </h2>
        <p className="text-slate-400 mb-8">Documentos confidenciales asignados a <strong>{correoCliente}</strong>.</p>

        {documentos.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/50">
            <span className="text-4xl block mb-4 text-slate-600">📭</span>
            <p className="text-slate-500">No tienes documentos pendientes de revisión en este momento.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-sm">
                  <th className="pb-4 font-medium pl-2">Documento</th>
                  <th className="pb-4 font-medium">Tipo</th>
                  <th className="pb-4 font-medium">Fecha/Periodo</th>
                  <th className="pb-4 font-medium text-right pr-2">Acción</th>
                </tr>
              </thead>
              <tbody>
                {documentos.map((doc: any) => {
                   // Preparamos el link de descarga directo
                   const linkDescarga = doc.archivoUrl ? `${doc.archivoUrl}?dl=${doc.nombreOriginal || 'documento_syr.pdf'}` : '#';
                   
                   return (
                    <tr key={doc._id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="py-5 pl-2">
                        <p className="font-bold text-white flex items-center gap-3">
                          <span className="text-cyan-500 text-lg">📄</span> {doc.titulo}
                        </p>
                      </td>
                      <td className="py-5 text-slate-300 text-sm">
                        <span className="bg-slate-800 px-3 py-1 rounded text-xs border border-slate-700 font-medium">
                          {doc.tipo}
                        </span>
                      </td>
                      <td className="py-5 text-slate-400 text-sm">
                        {doc.fecha ? new Date(doc.fecha).toLocaleDateString('es-PE', { month: 'long', year: 'numeric' }) : 'N/A'}
                      </td>
                      <td className="py-5 text-right pr-2">
                        {doc.archivoUrl ? (
                          <a 
                            href={linkDescarga} 
                            className="inline-block bg-cyan-700 hover:bg-cyan-500 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-lg shadow-cyan-900/20"
                          >
                            Descargar
                          </a>
                        ) : (
                          <span className="text-slate-500 text-sm italic">Falta archivo</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}