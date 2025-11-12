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
                                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] gap-x-6 gap-y-4 items-center">

                                    <Label htmlFor="productCustomOptionsTitle" className="text-neutral-100">Título</Label>
                                    <div>
                                        <Input id="productCustomOptionsTitle" {...register("productCustomOptionsTitle")} />
                                        {errors.productCustomOptionsTitle && <p className="text-sm text-red-500 mt-1">{(errors.productCustomOptionsTitle as FieldError).message}</p>}
                                    </div>

                                    <Label htmlFor="option-type" className="text-neutral-100 md:pl-4">Tipo de opção</Label>
                                    <div>
                                        <Controller
                                            name="productCustomOptionsType"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger id="option-type"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="option1">Opção 1</SelectItem>
                                                        <SelectItem value="option2">Opção 2</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.productCustomOptionsType && <p className="text-sm text-red-500 mt-1">{(errors.productCustomOptionsType as FieldError).message}</p>}
                                    </div>

                                    <Controller
                                        name="productCustomOptionsRequired"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex items-center gap-2 md:pl-4 neutral-100space-nowrap">
                                                <Checkbox
                                                    id="productCustomOptionsRequired"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                                <Label htmlFor="productCustomOptionsRequired" className="text-neutral-100">Obrigatório</Label>
                                            </div>
                                        )}
                                    />

                                    <Label htmlFor="productCustomOptionsPrice" className="text-neutral-100">Preço</Label>
                                    <div>
                                        <Input id="productCustomOptionsPrice" type="number" step="0.01" {...register("productCustomOptionsPrice")} />
                                        {errors.productCustomOptionsPrice && <p className="text-sm text-red-500 mt-1">{(errors.productCustomOptionsPrice as FieldError).message}</p>}
                                    </div>

                                    <Label htmlFor="productCustomOptionsPriceType" className="text-neutral-100 md:pl-4">Tipo de preço</Label>
                                    <div>
                                        <Controller
                                            name="productCustomOptionsPriceType"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger id="productCustomOptionsPriceType"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fixed">Fixo</SelectItem>
                                                        <SelectItem value="percent">Percentual</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.productCustomOptionsPriceType && <p className="text-sm text-red-500 mt-1">{(errors.productCustomOptionsPriceType as FieldError).message}</p>}
                                    </div>

                                    <Label htmlFor="productCustomOptionsCode" className="text-neutral-100 md:pl-4">Código</Label>

                                    <div></div>

                                    <div>
                                        <Input id="productCustomOptionsCode" {...register("productCustomOptionsCode")} />
                                    </div>

                                    <Label htmlFor="productCustomOptionsMaxChars" className="text-neutral-100 md:pl-4">Máx. Caracteres</Label>
                                    <div>
                                        <Input id="max-chars" type="number" {...register("productCustomOptionsMaxChars")} />
                                        {errors.productCustomOptionsMaxChars && <p className="text-sm text-red-500 mt-1">{(errors.productCustomOptionsMaxChars as FieldError).message}</p>}
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}