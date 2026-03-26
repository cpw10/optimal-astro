import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Common fields for all pages
const seoFields = {
  meta_title: z.string().nullish(),
  meta_description: z.string().nullish(),
};

// Page schemas
const pageSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  ...seoFields,
  draft: z.boolean().default(false),
});

const homepageSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  ...seoFields,
  hero: z.object({
    title: z.string(),
    subtitle: z.string().nullish(),
    cta_text: z.string().nullish(),
    cta_link: z.string().nullish(),
    stat: z.string().nullish(),
  }),
  client_logos: z.array(z.object({
    name: z.string(),
    logo: z.string().nullish(),
  })).nullish(),
  mission: z.object({
    headline: z.string(),
    description: z.string().nullish(),
  }).nullish(),
  services_triptych: z.array(z.object({
    title: z.string(),
    description: z.string().nullish(),
    link: z.string().nullish(),
  })).nullish(),
  cta: z.object({
    headline: z.string(),
    button_text: z.string().nullish(),
    button_link: z.string().nullish(),
  }).nullish(),
  draft: z.boolean().default(false),
});

const contactSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  ...seoFields,
  intro_text: z.string().nullish(),
  address: z.object({
    name: z.string().nullish(),
    street: z.string().nullish(),
    city: z.string().nullish(),
    state: z.string().nullish(),
  }).nullish(),
  form_services: z.array(z.string()).nullish(),
  draft: z.boolean().default(false),
});

// Services schema
const serviceSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  icon: z.string().nullish(),
  sub_services: z.array(z.object({
    title: z.string(),
    description: z.string().nullish(),
    link: z.string().nullish(),
    icon: z.string().nullish(),
  })).nullish(),
  ...seoFields,
  draft: z.boolean().default(false),
});

// Blog schema
const blogSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  date: z.coerce.date(),
  author: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  image: z.string().nullish(),
  ...seoFields,
  draft: z.boolean().default(false),
});

// Team schema
const teamSchema = z.object({
  name: z.string(),
  title: z.string(),
  category: z.string(),
  photo: z.string().nullish(),
  linkedin: z.string().nullish(),
  order: z.number().nullish(),
});

// Case study schema
const caseStudySchema = z.object({
  title: z.string(),
  client: z.string(),
  industry: z.string().nullish(),
  logo: z.string().nullish(),
  description: z.string().nullish(),
  challenge: z.string().nullish(),
  solution: z.string().nullish(),
  results: z.string().nullish(),
  ...seoFields,
  draft: z.boolean().default(false),
});

// Define collections
export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/pages' }),
    schema: z.union([homepageSchema, contactSchema, pageSchema]),
  }),
  services: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/services' }),
    schema: serviceSchema,
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/blog' }),
    schema: blogSchema,
  }),
  team: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/team' }),
    schema: teamSchema,
  }),
  'case-studies': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/case-studies' }),
    schema: caseStudySchema,
  }),
};
