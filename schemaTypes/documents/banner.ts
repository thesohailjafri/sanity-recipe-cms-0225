import {defineType} from 'sanity'

export default defineType({
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Recipe Title',
      description: 'The title of the banner',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resourceReference',
      type: 'reference',
      title: 'Resource Reference',
      description: 'The reference to the resource',
      to: [{type: 'recipe'}, {type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image for the banner, ratio 3:1, size 1080:360',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
  ],
})
