import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'articulo',
  title: 'Artículos del Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Artículo',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      title: 'Área / Categoría',
      description: '¿De qué tema trata este artículo?',
      type: 'string',
      options: {
        list: ['Tributaria', 'Laboral', 'Contable'],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor del Artículo',
      type: 'string',
      options: {
        list: ['Ricardo Cervantes', 'Sheila'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'slug',
      title: 'URL del Artículo',
      type: 'slug',
      options: { source: 'titulo' }
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'date',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido del Artículo',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', title: 'Insertar Cuadro/Tabla', options: { hotspot: true } }
      ]
    }),
  ],
})