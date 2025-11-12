import { z } from "zod";

export const designSchema = z.object({
  productDesignTheme: z.string().optional()
    .refine(data => data, { message: "Tema é obrigatório.", path: ["productDesignTheme"] }),

  productDesignLayout: z.string().optional()
    .refine(data => data, { message: "Layout é obrigatório.", path: ["productDesignLayout"] }),

  productDesignOptions: z.string().optional()
    .refine(data => data, { message: "Opção de produto é obrigatória.", path: ["productDesignOptions"] }),

  productDesignLayoutUpdate: z.string().optional()
    .refine(data => data, { message: "Atualização de layout é obrigatória.", path: ["productDesignLayoutUpdate"] }),
});

export type DesignFormData = z.infer<typeof designSchema>;