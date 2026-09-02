import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'documentoVip',
  title: 'Documentos VIP (Clientes)',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Documento',
      description: 'Ej: PDT 621 - Agosto 2026',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clienteEmail',
      title: 'Correo del Cliente (¡MUY IMPORTANTE!)',
      description: 'Escribe el correo exacto del cliente. Solo él podrá ver este archivo.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo de Documento',
      type: 'string',
      options: {
        list: ['Declaración PDT', 'Planilla', 'Estado Financiero', 'Reporte Tributario', 'Otro'],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha de Emisión o Periodo',
      type: 'date',
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo Privado (PDF, Excel, etc.)',
      type: 'file',
      options: { storeOriginalFilename: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})