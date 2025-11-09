'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductInfoForm } from "./form";

export function ProductInfo() {

  return (
    <Accordion type="single" collapsible defaultValue="display" className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Informações do produto
        </AccordionTrigger>
        <AccordionContent className="p-4">

            <ProductInfoForm />

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}