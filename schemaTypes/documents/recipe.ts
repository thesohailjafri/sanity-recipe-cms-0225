import {defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
      title: 'Categories',
    },
    {
      name: 'preparationTime',
      type: 'number',
      title: 'Preparation Time (minutes)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cookingTime',
      type: 'number',
      title: 'Cooking Time (minutes)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'totalTime',
      type: 'number',
      title: 'Total Time (minutes)',
      description: 'Automatically calculated as preparation + cooking time',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instructions',
      type: 'blockContent',
      title: 'Instructions',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nutrition',
      type: 'object',
      title: 'Nutrition Information',
      fields: [
        {name: 'calories', type: 'number', title: 'Calories'},
        {name: 'carbs', type: 'number', title: 'Carbs (g)'},
        {name: 'proteins', type: 'number', title: 'Proteins (g)'},
        {name: 'fats', type: 'number', title: 'Fats (g)'},
      ],
    },
  ],
})
