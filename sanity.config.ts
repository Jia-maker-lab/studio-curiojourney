import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from './schemaTypes'
import {defaultStructure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'CurioJourney',
  basePath: '/studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [deskTool({ structure: defaultStructure })],

  server: {
    port: parseInt(process.env.PORT, 10) || 3333,
    host: '0.0.0.0',
  },

  schema: {
    types: schemaTypes,
  },
})
