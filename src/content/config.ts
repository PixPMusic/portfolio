import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      role: z.string(),
      company: z.string(),
      image: image(),
      dates: z.array(z.date()),
      tags: z.array(z.string()),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string().optional(),
            icon: z.string(),
          }),
        )
        .optional(),
    }),
});

const education = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      institution: z.string(),
      image: image(),
      dates: z.array(z.date()),
      description: z.string().optional(),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string().optional(),
            icon: z.string(),
          }),
        )
        .optional(),
    }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      subtitle: z.string().optional(),
      image: image(),
      dates: z.array(z.date().nullable()),
      details: z.array(
        z.object({
          label: z.string(),
          value: z.union([z.string(), z.array(z.string())]),
        }),
      ),
      pdfDetails: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            url: z.string().optional(),
            icon: z.string().optional(),
          }),
        )
        .optional(),
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .optional(),
      tags: z.array(z.string()),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string().optional(),
            icon: z.string(),
          }),
        )
        .optional(),
    }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      relation: z.string(),
      image: image(),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          }),
        )
        .optional(),
      pdfDetails: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            url: z.string().optional(),
            icon: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    skills: z.array(
      z.object({
        id: z.string(),
        level: z.number().optional(),
        description: z.string().optional(),
      }),
    ),
  }),
});

const favorites = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      size: z.enum(['tall', 'square', 'wide']).optional().default('tall'),
      items: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          image: image(),
          url: z.string(),
        }),
      ),
    }),
});

export const collections = {
  experience,
  education,
  portfolio,
  testimonials,
  skills,
  favorites,
};
