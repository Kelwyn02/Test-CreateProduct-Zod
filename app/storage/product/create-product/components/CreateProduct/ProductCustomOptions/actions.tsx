import { z } from "zod";

export const customOptionSchema = z.object({
    productCustomOptionsTitle: z.string().optional().or(z.literal("")),

    productCustomOptionsType: z.string().optional().or(z.literal("")),

    productCustomOptionsRequired: z.boolean().optional(),

    productCustomOptionsPrice: z.coerce.number().min(0, "O preço não pode ser negativo.").optional(),

    productCustomOptionsPriceType: z.string().optional().or(z.literal("")),

    productCustomOptionsCode: z.string().optional(),

    productCustomOptionsMaxChars: z.coerce.number().int("Deve ser um número inteiro.").min(0).optional(),
});

export type CustomOptionFormData = z.infer<typeof customOptionSchema>;