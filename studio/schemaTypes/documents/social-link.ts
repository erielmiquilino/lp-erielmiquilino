import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Ex: GitHub, LinkedIn, Twitter, Email',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'GitHub', value: 'GitHub' },
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'Twitter', value: 'Twitter' },
          { title: 'Email', value: 'Email' },
        ],
        layout: 'dropdown',
      },
      description: 'Ícone exibido no frontend',
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
