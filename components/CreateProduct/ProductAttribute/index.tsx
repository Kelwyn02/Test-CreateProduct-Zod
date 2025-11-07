'use client'

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductAttributeForm } from "./form";

export function ProductAttribute() {

  return (
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-sm border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Atributos
        </AccordionTrigger>
        <AccordionContent className="p-4">

          <ProductAttributeForm/>
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}