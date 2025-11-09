import { z } from "zod";

export const websitesSchema = z.object({
  web1: z.boolean().optional(),
  web2: z.boolean().optional(),
  web3: z.boolean().optional(),
  web4: z.boolean().optional(),
});

export type WebsitesFormData = z.infer<typeof websitesSchema>;