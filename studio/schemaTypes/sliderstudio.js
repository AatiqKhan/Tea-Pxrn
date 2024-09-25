import {defineField, defineType} from 'sanity'

export const sliderStudio = defineType({
  name: 'slider',
  title: 'Slider',
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
