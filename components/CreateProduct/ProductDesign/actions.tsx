import { z } from "zod";

export const designSchema = z.object({
  theme: z.string(),
  layout: z.string(),
  productOptions: z.string(),
  layoutUpdate: z.string(),
})
.refine(data => data.theme, { message: "Tema é obrigatório.", path: ["theme"] })
.refine(data => data.layout, { message: "Layout é obrigatório.", path: ["layout"] })
.refine(data => data.productOptions, { message: "Opção de produto é obrigatória.", path: ["productOptions"] })
.refine(data => data.layoutUpdate, { message: "Atualização de layout é obrigatória.", path: ["layoutUpdate"] });

export type DesignFormData = z.infer<typeof designSchema>;