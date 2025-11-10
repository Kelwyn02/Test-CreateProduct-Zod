import { z } from "zod";

export const attributeSchema = z.object({
    activity: z.string(),
}).refine(data => data.activity && data.activity.length > 0, {
    message: "É preciso selecionar uma atividade.",
    path: ["activity"],
});

export type AttributeFormData = z.infer<typeof attributeSchema>;