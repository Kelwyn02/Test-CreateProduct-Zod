import { z } from "zod";

export const seoSchema = z.object({
  productSeoUrl: z.string().url("Por favor, insira uma URL válida (ex: https://...)").optional().or(z.literal("")),
  
  productSeoTitle: z.string().optional()
.refine(val => val && val.length >= 3, "O título é obrigatório."),

  productSeoDescription: z.string().optional() .refine(val => val && val.length >= 3, "A descrição é obrigatória."),

productSeoKeywords: z.string().optional(),
});

export type SeoFormData = z.infer<typeof seoSchema>;