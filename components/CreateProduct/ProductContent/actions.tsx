import { z } from "zod";

export const contentSchema = z.object({
    content: z.string().min(10, "O conteúdo deve ter pelo menos 10 caracteres."),
});

export type ContentFormData = z.infer<typeof contentSchema>;