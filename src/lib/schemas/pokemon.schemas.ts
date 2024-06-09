import { z } from "zod";


export const spritesSchema = z.object({
  back_default: z.string().nullish(),
  back_female: z.string().nullish(),
  back_shiny: z.string().nullish(),
  back_shiny_female: z.string().nullish(),
  front_default: z.string().nullish(),
  front_female: z.string().nullish(),
  front_shiny: z.string().nullish(),
  front_shiny_female: z.string().nullish(),
});
export type sprites = z.infer<typeof spritesSchema>;

export const pokemonCharacterSchema = z.object({
  name: z.string(),
  url: z.string(),
  sprites: spritesSchema.nullish(),
});
export type PokemonCharachter = z.infer<typeof pokemonCharacterSchema>;

//TODO change name
export const apiDataSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: pokemonCharacterSchema.array(),
});
export type ApiData = z.infer<typeof apiDataSchema>;

export const formDetailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  order: z.number(),
  form_order: z.number().nullish(),
  is_deafult: z.boolean().nullish(),
  is_battel_only: z.boolean().nullish(),
  is_mega: z.boolean().nullish(),
  form_name: z.string().nullish(),
  pokemon: pokemonCharacterSchema,
});
export type FormDetails = z.infer<typeof formDetailsSchema>;

export const formSchema = z.object({
  url: z.string(),
  name: z.string(),
});
export type Form = z.infer<typeof formSchema>;

export const pokemonDetailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  forms: z.array(formSchema),
  sprites: spritesSchema.nullish(),
});
export type PokemonDetails = z.infer<typeof pokemonDetailsSchema>;
