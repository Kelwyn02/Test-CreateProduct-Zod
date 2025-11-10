import { z } from "zod";

export const productInfoSchema = z.object({
  activateProduct: z.boolean().optional(),
  adminPermission: z.boolean().optional(),
  userSettings: z.boolean().optional(),
  attributes: z.string().optional().refine(val => val, "É preciso selecionar um atributo."),
  productName: z.string().optional()
    .refine(val => val && val.length >= 3, { message: "O nome do produto é obrigatório." }),
  category: z.string().optional().refine(val => val, "É preciso selecionar uma categoria."),
  stockStatus: z.string().optional().refine(val => val, "A situação de estoque é obrigatória."),
  weightUnit: z.string().optional(),
  productCode: z.string().optional(),
  fiscalClass: z.string().optional(),
  visibility: z.string().optional(),
  originCountry: z.string().optional(),

  price: z.coerce.number({
    error: "O preço é obrigatório.",
  }).positive("O preço deve ser positivo.").optional(),

  quantity: z.coerce.number({
    error: "A quantidade é obrigatória.",
  }).int("Deve ser um número inteiro.").positive("Deve ser positiva.").optional(),
  
  weight: z.coerce.number().positive("O peso deve ser positivo.").optional(),
});

export type ProductInfoFormData = z.infer<typeof productInfoSchema>;