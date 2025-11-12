import { z } from "zod";

export const contentSchema = z.object({
    productContent: z.string().optional()
        .refine(val => val && val.length >= 10, "O conteúdo deve ter pelo menos 10 caracteres."),
});

export type ContentFormData = z.infer<typeof contentSchema>;