import { type SchemaTypeDefinition } from 'sanity'
import recurso from './recurso'
import articulo from './articulo'
import documentoVip from './documentoVip' // <-- Aquí importamos el nuevo molde

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recurso, articulo, documentoVip], // <-- Aquí lo agregamos a la lista
}