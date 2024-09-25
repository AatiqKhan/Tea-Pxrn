import {defineField, defineType} from 'sanity'

export const menuStudio = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
  ],
})
