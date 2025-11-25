import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const imageSchema = z.object({
  productImageAndVideoImages: z.any()
    .refine((files) => files && files.length <= 5, "Você pode enviar no máximo 5 imagens.")
    .refine((files) => files && Array.from(files).every(
      (file: unknown) => (file as { size: number }).size <= MAX_FILE_SIZE
    ), `Cada imagem deve ter no máximo 5MB.`)
    .refine((files) => files && Array.from(files).every(
      (file: unknown) => ACCEPTED_IMAGE_TYPES.includes((file as { type: string }).type)
    ), "Apenas arquivos .jpg, .png ou .webp são aceitos.")
    .optional()
});

export type ImageFormData = z.infer<typeof imageSchema>;