import { defineType, defineField } from 'sanity'
import { VideoIcon } from '@sanity/icons'

export const contentItem = defineType({
  name: 'contentItem',
  title: 'Content Item',
  type: 'document',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Article', value: 'article' },
          { title: 'Talk', value: 'talk' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Ex: YouTube, Medium, Dev.to, Blog, Conference',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link para o conteúdo externo',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Imagem de preview',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Cor neon do card (hex)',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'large' },
          { title: 'Small', value: 'small' },
          { title: 'Tall', value: 'tall' },
          { title: 'Wide', value: 'wide' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  orderings: [
    { title: 'Published (newest)', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
