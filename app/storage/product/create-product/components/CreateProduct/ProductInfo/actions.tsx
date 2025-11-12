import { z } from "zod";

export const productInfoSchema = z.object({
  productInfoActivateProduct: z.boolean().optional(),
  productInfoAdminPermission: z.boolean().optional(),
  productInfoUserSettings: z.boolean().optional(),

  productInfoAttributes: z.string().optional().refine(val => val, "É preciso selecionar um atributo."),

  productInfoName: z.string().optional()
    .refine(val => val && val.length >= 3, { message: "O nome do produto é obrigatório." }),

  productInfoCategory: z.string().optional().refine(val => val, "É preciso selecionar uma categoria."),

  productInfoStockStatus: z.string().optional().refine(val => val, "A situação de estoque é obrigatória."),

  productInfoWeightUnit: z.string().optional(),
  productInfoCode: z.string().optional(),
  productInfoFiscalClass: z.string().optional(),
  productInfoVisibility: z.string().optional(),
  productInfoOriginCountry: z.string().optional(),

  productInfoPrice: z.coerce.number().positive("O preço deve ser positivo.").optional()
    .refine(val => val !== undefined, {
      message: "O preço é obrigatório.",
    }),

  productInfoQuantity: z.coerce.number().int("Deve ser um número inteiro.").positive("Deve ser positiva.").optional()
    .refine(val => val !== undefined, {
      message: "A quantidade é obrigatória.",
    }),

  productInfoWeight: z.coerce.number().positive("O peso deve ser positivo.").optional()
});

export type ProductInfoFormData = z.infer<typeof productInfoSchema>;