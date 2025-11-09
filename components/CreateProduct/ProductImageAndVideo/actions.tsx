import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const imageSchema = z.object({
    images: z.instanceof(FileList)
      .refine(files => files.length > 0, "É preciso enviar pelo menos uma imagem.")
      .refine(files => files.length <= 5, "Você pode enviar no máximo 5 imagens.")
      .refine(files => Array.from(files).every(file => file.size <= MAX_FILE_SIZE), `Cada imagem deve ter no máximo 5MB.`)
      .refine(files => Array.from(files).every(file => ACCEPTED_IMAGE_TYPES.includes(file.type)), "Apenas arquivos .jpg, .png ou .webp são aceitos.")
  });
  
  export type ImageFormData = z.infer<typeof imageSchema>;

