'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { useFormContext, Controller, FieldError } from "react-hook-form";
import { GlobalProductFormData } from "../schema";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, GripVerticalIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";

export function ProductCustomOptionsForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();


    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Opções customizáveis
                </AccordionTrigger>
                <AccordionContent className="p-4">
                    <div className="mb-4 flex justify-end gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            className=" text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900 font-semibold"
                        >
                            Importar opções

                        </Button>
                        <Button
                            type="button"
                            variant="default"
                            className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                        >
                            Adicionar nova opção
                        </Button>
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
                                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] gap-x-6 gap-y-4 items-start">

                                    <Label htmlFor="productCustomOptionsTitle" className="pt-3 text-neutral-100">Título</Label>
                                    <div>
                                        <Input id="productCustomOptionsTitle" {...register("productCustomOptionsTitle")} />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsTitle ? (errors.productCustomOptionsTitle as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <Label htmlFor="option-type" className="pt-3 text-neutral-100 md:pl-4">Tipo de opção</Label>
                                    <div>
                                        <Controller
                                            name="productCustomOptionsType"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger id="option-type" className="w-full"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="option1">Opção 1</SelectItem>
                                                        <SelectItem value="option2">Opção 2</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsType ? (errors.productCustomOptionsType as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <Controller
                                        name="productCustomOptionsRequired"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex items-center gap-2 md:pl-4 neutral-100space-nowrap pt-2">
                                                <Checkbox
                                                    id="productCustomOptionsRequired"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                                <Label htmlFor="productCustomOptionsRequired" className="text-neutral-100">Obrigatório</Label>
                                            </div>
                                        )}
                                    />

                                    <Label htmlFor="productCustomOptionsPrice" className="pt-3 text-neutral-100">Preço</Label>
                                    <div>
                                        <Input id="productCustomOptionsPrice" type="number" step="0.01" {...register("productCustomOptionsPrice")} />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsPrice ? (errors.productCustomOptionsPrice as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <Label htmlFor="productCustomOptionsPriceType" className="pt-3 text-neutral-100 md:pl-4">Tipo de preço</Label>
                                    <div>
                                        <Controller
                                            name="productCustomOptionsPriceType"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger id="productCustomOptionsPriceType" className="w-full"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fixed">Fixo</SelectItem>
                                                        <SelectItem value="percent">Percentual</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsPriceType ? (errors.productCustomOptionsPriceType as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <div></div>{/* ajudar no posicionamento */}


                                    <Label htmlFor="productCustomOptionsMaxChars" className="pt-3 text-neutral-100">Máx. Caracteres</Label>

                                    <div>
                                        <Input id="max-chars" type="number" {...register("productCustomOptionsMaxChars")} />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsMaxChars ? (errors.productCustomOptionsMaxChars as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <Label htmlFor="productCustomOptionsCode" className="pt-3 text-neutral-100 md:pl-4">Código</Label>

                                    <div>
                                        <Input id="productCustomOptionsCode" {...register("productCustomOptionsCode")} />
                                        <p className="text-sm text-red-500 mt-1 h-5">
                                            {errors.productCustomOptionsCode ? (errors.productCustomOptionsCode as FieldError).message : '\u00A0'}
                                        </p>
                                    </div>

                                    <div></div> {/* ajudar no posicionamento */}

                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}