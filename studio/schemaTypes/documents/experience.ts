import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Ex: 2022 - PRESENT',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      description: 'Estilo arcade (ex: LVL 99)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Ordenação no Studio (menor = primeiro)',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
