import {defineField, defineType} from 'sanity'

export const galleryStudio = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      type: 'string',
    }),
  ],
})
