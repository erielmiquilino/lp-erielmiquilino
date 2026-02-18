import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture', value: 'ARCH' },
          { title: 'Frontend', value: 'FE' },
          { title: 'Backend', value: 'BE' },
          { title: 'Ops', value: 'OPS' },
          { title: 'Data', value: 'DATA' },
          { title: 'Mobile', value: 'MOB' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
  orderings: [
    { title: 'Rank', name: 'rankAsc', by: [{ field: 'rank', direction: 'asc' }] },
  ],
})
