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
import { ArrowLeftIcon, RefreshCwIcon, SaveIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProductPage() {

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit: SubmitHandler<GlobalProductFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Produto salvo com sucesso!");
        router.refresh();
        router.push("/storage/product");
      } else {
        console.error("Erro ao salvar produto. Status:", response.status);
        alert("Erro ao salvar o produto.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onError = (errors: any) => {
    console.log("ERROS DE VALIDAÇÃO:", errors);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>

        <div className="flex justify-end mr-4 gap-4 mb-6">
          <Link href="/storage/product/" className="cursor-pointer">
            <Button variant="outline" type="button" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <Button
            variant="outline"
            type="button"
            onClick={() => methods.reset()}
            className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900"
          >
            <RefreshCwIcon className="h-4 w-4 mr-2" />
            Reiniciar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold cursor-pointer"
          >
            {isSubmitting ? (
              "Salvando..."
            ) : (
              <>
                <SaveIcon className="h-4 w-4 mr-2" />
                Salvar
              </>
            )}
          </Button>
        </div>

        <div className="space-y-6">
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
        </div>

      </form>
    </FormProvider >
  )
} 