import {defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Recipe Title',
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
      title: 'Recipe Image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
    },
    {
      name: 'cookingTime',
      type: 'number',
      title: 'Cooking Time (minutes)',
    },
    {
      name: 'totalTime',
      type: 'number',
      title: 'Total Time (minutes)',
      description: 'Automatically calculated as preparation + cooking time',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{type: 'string'}],
    },
    {
      name: 'instructions',
      type: 'blockContent',
      title: 'Instructions',
    },
    {
      name: 'nutrition',
      type: 'object',
      title: 'Nutrition Information',
      fields: [
        {name: 'calories', type: 'number', title: 'Calories'},
        {name: 'carbs', type: 'number', title: 'Carbs (g)'},
        {name: 'protein', type: 'number', title: 'Protein (g)'},
        {name: 'fat', type: 'number', title: 'Fat (g)'},
      ],
    },
  ],
})
