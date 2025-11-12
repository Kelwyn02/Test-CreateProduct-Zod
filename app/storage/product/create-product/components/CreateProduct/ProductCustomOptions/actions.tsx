import { z } from "zod";

export const customOptionSchema = z.object({
    productCustomOptionsTitle: z.string().optional().refine(val => val && val.length > 0, "O título é obrigatório."),

    productCustomOptionsType: z.string().optional().refine(val => val, "O tipo de opção é obrigatório."),

    productCustomOptionsRequired: z.boolean().optional(),

    productCustomOptionsPrice: z.coerce.number().positive("O preço deve ser positivo.").optional(),

    productCustomOptionsPriceType: z.string().optional().refine(val => val, "O tipo de preço é obrigatório."),

    productCustomOptionsCode: z.string().optional(),

    productCustomOptionsMaxChars: z.coerce.number().int("Deve ser um número inteiro.").positive("Deve ser positivo.").optional(),
});

export type CustomOptionFormData = z.infer<typeof customOptionSchema>;