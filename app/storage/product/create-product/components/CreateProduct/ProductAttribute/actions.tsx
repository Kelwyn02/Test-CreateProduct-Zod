import { z } from "zod";

export const attributeSchema = z.object({
    productAttributeActivity: z.string().optional()
        .refine(val => val && val.length > 0, {
            message: "É preciso selecionar uma atividade."
        }),
});

export type AttributeFormData = z.infer<typeof attributeSchema>;