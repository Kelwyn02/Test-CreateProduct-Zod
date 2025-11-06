'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, GripVerticalIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const customOptionSchema = z.object({
    title: z.string().refine(val => val && val.length > 0, "O título é obrigatório."),
    optionType: z.string().refine(val => val, "O tipo de opção é obrigatório."),
    required: z.boolean().optional(),
    price: z.coerce.number().positive("O preço deve ser positivo."),
    priceType: z.string().refine(val => val, "O tipo de preço é obrigatório."),
    code: z.string().optional(),
    maxChars: z.coerce.number().int("Deve ser um número inteiro.").positive("Deve ser positivo."),
});

type CustomOptionFormData = z.infer<typeof customOptionSchema>;

export function ProductCustomOptions() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CustomOptionFormData>({
        resolver: zodResolver(customOptionSchema),
        defaultValues: {
            title: "",
            optionType: "",
            required: false,
            price: 0,
            priceType: "",
            code: "",
            maxChars: undefined,
        },
    });

    const onSubmit: SubmitHandler<CustomOptionFormData> = (data) => {
        console.log("OPÇÃO CUSTOMIZADA SALVA:", data);
    };

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
                                type="button"
                                variant="outline"
                                className="bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border-neutral-700"
                            >
                                Importar opções
                            </Button>
                            <Button type="button" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold">
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
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-700 text-neutral-400">
                                            <MoreHorizontalIcon className="h-5 w-5" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-700 text-neutral-400">
                                            <Trash2Icon className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="bg-neutral-800 p-6 rounded-sm">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] gap-x-6 gap-y-4 items-center">

                                        <Label htmlFor="title" className="text-neutral-100">Título</Label>
                                        <div>
                                            <Input id="title" {...register("title")} />
                                            {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
                                        </div>

                                        <Label htmlFor="option-type" className="text-neutral-100 md:pl-4">Tipo de opção</Label>
                                        <div>
                                            <Controller
                                                name="optionType"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger id="option-type"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="dropdown">Dropdown</SelectItem>
                                                            <SelectItem value="checkbox">Checkbox</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            {errors.optionType && <p className="text-sm text-red-500 mt-1">{errors.optionType.message}</p>}
                                        </div>

                                        <Controller
                                            name="required"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="flex items-center gap-2 md:pl-4 neutral-100space-nowrap">
                                                    <Checkbox
                                                        id="required"
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                    <Label htmlFor="required" className="text-neutral-100">Obrigatório</Label>
                                                </div>
                                            )}
                                        />

                                        <Label htmlFor="price" className="text-neutral-100">Preço</Label>
                                        <div>
                                            <Input id="price" type="number" step="0.01" {...register("price")} />
                                            {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                                        </div>

                                        <Label htmlFor="price-type" className="text-neutral-100 md:pl-4">Tipo de preço</Label>
                                        <div>
                                            <Controller
                                                name="priceType"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger id="price-type"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="fixed">Fixo</SelectItem>
                                                            <SelectItem value="percent">Percentual</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            {errors.priceType && <p className="text-sm text-red-500 mt-1">{errors.priceType.message}</p>}
                                        </div>

                                        <div></div> {/* tá aqui por causa de alinhamento */}

                                        <Label htmlFor="code" className="text-neutral-100">Código</Label>
                                        <div>
                                            <Input id="code" {...register("code")} />
                                        </div>

                                        <Label htmlFor="max-chars" className="text-neutral-100 md:pl-4">Máx. Caracteres</Label>
                                        <div>
                                            <Input id="max-chars" type="number" {...register("maxChars")} />
                                            {errors.maxChars && <p className="text-sm text-red-500 mt-1">{errors.maxChars.message}</p>}
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                                            Salvar
                                        </Button>
                                    </div>
                                </form>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}