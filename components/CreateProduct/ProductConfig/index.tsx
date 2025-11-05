import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function ProductConfig() {
    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Configurações
                </AccordionTrigger>
                <AccordionContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <p className="text-neutral-100 text-sm leading-relaxed max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra dui
                            vel malesuada. Vestibulum dignissim arcu ut tellus venenatis, eget tempus ligula
                            sollicitudin. Sed efficitur vehicula tincidunt. Sed eu semper justo, quis tristique nisl.
                            Integer facilisis odio felis, sed malesuada dui semper quis.
                        </p>
                        <Button
                            variant="default"
                            className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                        >
                            Criar configuração
                        </Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}