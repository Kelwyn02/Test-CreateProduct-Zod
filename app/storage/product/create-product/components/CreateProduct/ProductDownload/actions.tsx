import { z } from "zod";

export const downloadSchema = z.object({
    downloadable: z.boolean().optional(),
});

export type DownloadFormData = z.infer<typeof downloadSchema>;