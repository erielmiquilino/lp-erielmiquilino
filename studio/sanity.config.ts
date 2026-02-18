import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { CogIcon } from '@sanity/icons'
import { schemaTypes } from './schemaTypes'

const SINGLETONS = ['siteSettings']

export default defineConfig({
  name: 'default',
  title: 'lp-erielmiquilino-cms',

  projectId: 'g6prtivp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !SINGLETONS.includes(listItem.getId() ?? '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
