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
        storeOriginalFilename: true, // Esto mantiene el nombre original de tu archivo
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})