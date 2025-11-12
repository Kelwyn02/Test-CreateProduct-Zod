import { z } from "zod";

export const downloadSchema = z.object({
    productDownloadable: z.boolean().optional(),
});

export type DownloadFormData = z.infer<typeof downloadSchema>;