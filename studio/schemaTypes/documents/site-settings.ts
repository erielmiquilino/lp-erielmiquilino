import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'profileName',
      title: 'Profile Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileTitle',
      title: 'Profile Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'string',
      description: 'Texto do botão principal (ex: INSERT COIN)',
    }),
    defineField({
      name: 'footerGameOverText',
      title: 'Footer Game Over Text',
      type: 'string',
      description: 'Ex: GAME OVER',
    }),
    defineField({
      name: 'footerCtaText',
      title: 'Footer CTA Text',
      type: 'string',
      description: 'Ex: Thanks for playing. Insert coin to continue...',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          fields: [
            defineField({ name: 'id', type: 'string', title: 'ID (anchor)', validation: (rule) => rule.required() }),
            defineField({ name: 'label', type: 'string', title: 'Label', validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { label: 'label', id: 'id' },
            prepare: ({ label, id }) => ({ title: label || id, subtitle: id }),
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
