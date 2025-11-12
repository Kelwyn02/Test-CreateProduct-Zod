'use client'

import { ProductAttributeForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductAttribute/form";
import { ProductContentForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductContent/form";
import { ProductCustomOptionsForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductCustomOptions/form";
import { ProductDesignForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductDesign/form";
import { ProductDownloadForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductDownload/form";
import { ProductGiftOptionsForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductGiftOptions/form";
import { ProductImageAndVideoForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductImageAndVideo/form";
import { ProductInfoForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductInfo/form";
import { ProductSeoForm } from "@/app/storage/product/create-product/components/CreateProduct/ProductSEO/form";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { ProductConfig } from "./components/CreateProduct/ProductConfig";
import { ProductRelatedAndSales } from "./components/CreateProduct/ProductRelatedAndSales";

import { globalProductSchema, GlobalProductFormData } from "./components/CreateProduct/schema";


export default function CreateProductPage() {
  const methods = useForm<GlobalProductFormData>({
    resolver: zodResolver(globalProductSchema),
    defaultValues: {
      productInfoActivateProduct: false,
      productInfoAttributes: "",
      productInfoName: "",
      productInfoPrice: undefined,
      productInfoQuantity: undefined,
      productInfoWeight: undefined,
      productInfoWeightUnit: "",
      productInfoCategory: "",
      productInfoCode: "",
      productInfoFiscalClass: "",
      productInfoStockStatus: "",
      productInfoVisibility: "",
      productInfoOriginCountry: "",
      productInfoAdminPermission: false,
      productInfoUserSettings: true,

      productSeoUrl: "",
      productSeoTitle: "",
      productSeoDescription: "",
      productSeoKeywords: "",

      productImageAndVideoImages: undefined,

      productGiftOptionsAllowMessage: true,
      productGiftOptionsUseConfigMessage: true,
      productGiftOptionsAllowWrapping: true,
      productGiftOptionsUseConfigWrapping: true,
      productGiftOptionsWrappingPrice: "",

      productDownloadable: true,

      productDesignTheme: "",
      productDesignLayout: "",
      productDesignOptions: "",
      productDesignLayoutUpdate: "",

      productCustomOptionsTitle: "",
      productCustomOptionsType: "",
      productCustomOptionsRequired: false,
      productCustomOptionsPrice: undefined,
      productCustomOptionsPriceType: "",
      productCustomOptionsCode: "",
      productCustomOptionsMaxChars: 256,

      productContent: "",

      productAttributeActivity: "",
    }
  });

  const onSubmit: SubmitHandler<GlobalProductFormData> = (data) => {
    console.log("Validando dados globais:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <div className="flex justify-end mr-4">
          <Button type="submit" className="text-neutral-100 bg-cyan-600 hover:bg-cyan-700">
            Salvar
          </Button>
        </div>

        <ProductInfoForm />
        <ProductContentForm />
        <ProductConfig />
        <ProductImageAndVideoForm />
        <ProductSeoForm />
        <ProductRelatedAndSales />
        <ProductCustomOptionsForm />
        <ProductDesignForm />
        <ProductGiftOptionsForm />
        <ProductAttributeForm />
        <ProductDownloadForm />


      </form>
    </FormProvider>
  )
}