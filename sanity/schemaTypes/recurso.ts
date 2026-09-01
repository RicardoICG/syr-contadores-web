import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recurso',
  title: 'Recursos y Descargas',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Recurso',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor del Documento',
      description: '¿Quién de los socios elaboró este recurso?',
      type: 'string',
      options: {
        list: ['Ricardo Cervantes', 'Sheila'], // Lista de opciones rápidas
        layout: 'radio' // Se mostrará como botones para elegir rápido
      }
    }),
    defineField({
      name: 'descripcion',
      title: 'Breve Descripción',
      description: 'Aparecerá en la tarjeta de la página web (Máximo 200 caracteres).',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'icono',
      title: 'Icono (Emoji)',
      description: 'Pon un emoji para identificar el archivo. Ej: 📊 para Excel, 📄 para PDF, 📝 para Word.',
      type: 'string',
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo para descargar',
      description: 'Sube aquí tu Excel, Word o PDF.',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})