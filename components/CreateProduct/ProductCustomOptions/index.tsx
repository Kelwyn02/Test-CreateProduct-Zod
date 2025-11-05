import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, GripVerticalIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";

export function ProductCustomOptions() {
    return (
        

<Accordion type="single" collapsible className="w-full m-4 pr-8">
<AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
    <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
        Opções customizáveis
    </AccordionTrigger>
    <AccordionContent className="p-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <p className="text-sm text-neutral-400 max-w-md">
                    As opções personalizadas permitem que os clientes escolham as variações do
                    produto que desejam.
                </p>
                <div className="flex gap-2 shrink-0">
                    <Button
                        variant="outline"
                        className="bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border-neutral-700"
                    >
                        Importar opções
                    </Button>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold">
                        Adicionar opção
                    </Button>
                </div>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="group bg-neutral-800 p-4 rounded-sm text-neutral-100 hover:no-underline [&>svg]:hidden mb-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                <GripVerticalIcon className="h-5 w-5 text-neutral-500 cursor-grab" />
                                <span className="font-semibold">Nova opção</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-700 text-neutral-400">
                                    <MoreHorizontalIcon className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-700 text-neutral-400">
                                    <Trash2Icon className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="bg-neutral-800 p-6 rounded-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] gap-x-6 gap-y-4 items-center">

                            <Label htmlFor="title" className="text-neutral-100">Título</Label>
                            <Input id="title" />

                            <Label htmlFor="option-type" className="text-neutral-100 md:pl-4">Tipo de opção</Label>
                            <Select>
                                <SelectTrigger id="option-type"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="op1">Dropdown</SelectItem>
                                    <SelectItem value="op2">Checkbox</SelectItem>
                                </SelectContent>
                            </Select>

                            <div className="flex items-center gap-2 md:pl-4 neutral-100space-nowrap">
                                <Checkbox id="required" />
                                <Label htmlFor="required" className="text-neutral-100">Obrigatório</Label>
                            </div>

                            <Label htmlFor="price" className="text-neutral-100">Preço</Label>
                            <Input id="price" />

                            <Label htmlFor="price-type" className="text-neutral-100 md:pl-4">Tipo de preço</Label>
                            <Select>
                                <SelectTrigger id="price-type"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="op1">Fixo</SelectItem>
                                    <SelectItem value="op2">Percentual</SelectItem>
                                </SelectContent>
                            </Select>

                            <div></div>

                            <Label htmlFor="code" className="text-neutral-100">Código</Label>
                            <Input id="code" />

                            <Label htmlFor="max-chars" className="text-neutral-100 md:pl-4">Máx. Caracteres</Label>
                            <Input id="max-chars" type="number" />

                            <div></div>

                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    </AccordionContent>
</AccordionItem>
</Accordion>
    )
}