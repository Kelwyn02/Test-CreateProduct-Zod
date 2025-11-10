import { ProductInfo } from "@/app/storage/product/create-product/components/CreateProduct/ProductInfo"
import { ProductContent } from "@/app/storage/product/create-product/components/CreateProduct/ProductContent"
import { ProductConfig } from "@/app/storage/product/create-product/components/CreateProduct/ProductConfig"
import { ProductImageAndVideo } from "@/app/storage/product/create-product/components/CreateProduct/ProductImageAndVideo"
import { ProductSEO } from "@/app/storage/product/create-product/components/CreateProduct/ProductSEO"
import { ProductRelatedAndSales } from "@/app/storage/product/create-product/components/CreateProduct/ProductRelatedAndSales"
import { ProductCustomOptions } from "@/app/storage/product/create-product/components/CreateProduct/ProductCustomOptions"
import { ProductOnWebsites } from "@/app/storage/product/create-product/components/CreateProduct/ProductOnWebsites"
import { ProductDesign } from "@/app/storage/product/create-product/components/CreateProduct/ProductDesign"
import { ProductGiftOptions } from "@/app/storage/product/create-product/components/CreateProduct/ProductGiftOptions"
import { ProductAttribute } from "@/app/storage/product/create-product/components/CreateProduct/ProductAttribute"
import { ProductDownload } from "@/app/storage/product/create-product/components/CreateProduct/ProductDownload"

export default function CreateProductPage() {
  return (
    <>
      <ProductInfo />
      <ProductContent />
      <ProductConfig />
      <ProductImageAndVideo />
      <ProductSEO />
      <ProductRelatedAndSales />
      <ProductCustomOptions />
      <ProductOnWebsites />
      <ProductDesign />
      <ProductGiftOptions />
      <ProductAttribute />
      <ProductDownload />
    </>
  )
}
