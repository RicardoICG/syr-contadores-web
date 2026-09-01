import { type SchemaTypeDefinition } from 'sanity'
import recurso from './recurso'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recurso],
}