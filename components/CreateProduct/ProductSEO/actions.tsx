import { z } from "zod";

export const seoSchema = z.object({
  url: z.string().url("Por favor, insira uma URL válida (ex: https://...)").or(z.literal("")),
  title: z.string()
    .refine(val => val && val.length >= 3, "O título é obrigatório."),
  description: z.string()
    .refine(val => val && val.length >= 3, "A descrição é obrigatória."),
  keywords: z.string(),
});

export type SeoFormData = z.infer<typeof seoSchema>;