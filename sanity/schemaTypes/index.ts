import { type SchemaTypeDefinition } from 'sanity'
import recurso from './recurso'
import articulo from './articulo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recurso, articulo],
}