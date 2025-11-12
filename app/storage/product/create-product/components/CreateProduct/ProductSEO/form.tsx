'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useFormContext } from "react-hook-form";

import { GlobalProductFormData } from "../schema";

export function ProductSeoForm() {
  const {
    register,
    formState: { errors }
  } = useFormContext<GlobalProductFormData>();

  return (
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Otimização para motores de busca
        </AccordionTrigger>
        <AccordionContent className="p-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="url" className="text-neutral-100">URL</Label>
                <Input id="productSeoUrl" {...register("productSeoUrl")} />
                <p className="text-sm text-red-500 mt-1 h-5">
                  {errors.productSeoUrl ? errors.productSeoUrl.message : ''}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords" className="text-neutral-100">Palavras-chave</Label>
                <Textarea
                  id="keywords"
                  className="min-h-[150px] resize-y"
                  {...register("productSeoKeywords")}
                />
                <p className="text-sm text-red-500 mt-1 h-5">
                  {errors.productSeoKeywords ? errors.productSeoKeywords.message : ''}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-neutral-100">Título</Label>
                <Input id="productSeoTitle" {...register("productSeoTitle")} />
                <p className="text-sm text-red-500 mt-1 h-5">
                  {errors.productSeoTitle ? errors.productSeoTitle.message : ''}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-neutral-100">Descrição</Label>
                <Textarea
                  id="description"
                  className="min-h-[150px] resize-y"
                  {...register("productSeoDescription")}
                />
                <p className="text-sm text-red-500 mt-1 h-5">
                  {errors.productSeoDescription ? errors.productSeoDescription.message : ''}
                </p>
              </div>
            </div>

          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}