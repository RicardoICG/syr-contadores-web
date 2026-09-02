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
      name: 'categoria',
      title: 'Área / Categoría',
      description: '¿A qué área de la empresa pertenece este recurso?',
      type: 'string',
      options: {
        list: ['Tributaria', 'Laboral', 'Contable'],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor del Documento',
      type: 'string',
      options: {
        list: ['Ricardo Cervantes', 'Sheila'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'descripcion',
      title: 'Breve Descripción',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'icono',
      title: 'Icono (Emoji)',
      type: 'string',
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo para descargar',
      type: 'file',
      options: { storeOriginalFilename: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})