import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductSeoForm } from "./form";

export function ProductSEO() {
  return (
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Otimização para motores de busca
        </AccordionTrigger>
        <AccordionContent className="p-4">
          
          <ProductSeoForm />

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}