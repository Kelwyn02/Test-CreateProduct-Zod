import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductDownloadForm } from "./form";


export function ProductDownload() {

  return (
    <Accordion type="single" collapsible className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Download de conteúdo
        </AccordionTrigger>
        <AccordionContent className="p-4">

          <ProductDownloadForm/>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}