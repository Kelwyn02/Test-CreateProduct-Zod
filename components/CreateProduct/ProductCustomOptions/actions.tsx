import { z } from "zod";

export const customOptionSchema = z.object({
    title: z.string().refine(val => val && val.length > 0, "O título é obrigatório."),
    optionType: z.string().refine(val => val, "O tipo de opção é obrigatório."),
    required: z.boolean().optional(),
    price: z.coerce.number().positive("O preço deve ser positivo."),
    priceType: z.string().refine(val => val, "O tipo de preço é obrigatório."),
    code: z.string().optional(),
    maxChars: z.coerce.number().int("Deve ser um número inteiro.").positive("Deve ser positivo."),
});

export type CustomOptionFormData = z.infer<typeof customOptionSchema>;