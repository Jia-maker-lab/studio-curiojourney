import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// visionTool 已移除以避免部署錯誤
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CurioJourney',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [structureTool()],

  server: {
    port: parseInt(process.env.PORT, 10) || 3333,
    host: '0.0.0.0',
  },

  schema: {
    types: schemaTypes,
  },
})
