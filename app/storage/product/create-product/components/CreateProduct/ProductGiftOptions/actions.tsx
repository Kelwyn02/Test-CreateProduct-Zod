import { z } from "zod";

export const giftOptionsSchema = z.object({
  productGiftOptionsAllowMessage: z.boolean().optional(),
  productGiftOptionsUseConfigMessage: z.boolean().optional(),
  productGiftOptionsAllowWrapping: z.boolean().optional(),
  productGiftOptionsUseConfigWrapping: z.boolean().optional(),
  productGiftOptionsWrappingPrice: z.string().optional()
    .refine(val => !val || !isNaN(Number(val)), {
      message: "O preço deve ser um número.",
    }),
});

export type GiftOptionsFormData = z.infer<typeof giftOptionsSchema>;