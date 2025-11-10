import { z } from "zod";

export const giftOptionsSchema = z.object({
  allowMessage: z.boolean().optional(),
  useConfigMessage: z.boolean().optional(),
  allowWrapping: z.boolean().optional(),
  useConfigWrapping: z.boolean().optional(),
  wrappingPrice: z.string().optional()
    .refine(val => !val || !isNaN(Number(val)), {
      message: "O preço deve ser um número.",
    }),
});

export type GiftOptionsFormData = z.infer<typeof giftOptionsSchema>;