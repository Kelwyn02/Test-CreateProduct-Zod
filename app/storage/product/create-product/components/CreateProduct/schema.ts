
import { z } from "zod";
import { productInfoSchema } from "./ProductInfo/actions";
import { seoSchema } from "./ProductSEO/actions";
import { contentSchema } from "./ProductContent/actions";
import { imageSchema } from "./ProductImageAndVideo/actions";
import { giftOptionsSchema } from "./ProductGiftOptions/actions";
import { downloadSchema } from "./ProductDownload/actions";
import { designSchema } from "./ProductDesign/actions";
import { customOptionSchema } from "./ProductCustomOptions/actions";
import { attributeSchema } from "./ProductAttribute/actions";

export const globalProductSchema = productInfoSchema
  .merge(seoSchema)
  .merge(contentSchema)
  .merge(imageSchema)
  .merge(giftOptionsSchema)
  .merge(downloadSchema)
  .merge(designSchema)
  .merge(customOptionSchema)
  .merge(attributeSchema);

export type GlobalProductFormData = z.infer<typeof globalProductSchema>;