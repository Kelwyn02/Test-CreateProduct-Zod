'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useFormContext, Controller, FieldError } from "react-hook-form";
import { GlobalProductFormData } from "../schema";


export function ProductDesignForm() {
    const {
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();

    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Design
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <div className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <Label htmlFor="theme" className="text-neutral-100">
                                Tema
                            </Label>
                            <Controller
                                name="productDesignTheme"
                                control={control}
                                render={({ field }) => (
                                    <div className="w-full">
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="theme">
                                                <SelectValue placeholder="Selecione um tema..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="dark">Escuro</SelectItem>
                                                <SelectItem value="light">Claro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.productDesignTheme && (
                                            < p className="text-sm text-red-500 mt-1">{(errors.productDesignTheme as FieldError).message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <Label htmlFor="layout" className="text-neutral-100">
                                Layout
                            </Label>
                            <Controller
                                name="productDesignLayout"
                                control={control}
                                render={({ field }) => (
                                    <div className="w-full">
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="layout">
                                                <SelectValue placeholder="Selecione um layout..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="full">Completo</SelectItem>
                                                <SelectItem value="boxed">Em caixa</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.productDesignLayout && (
                                            <p className="text-sm text-red-500 mt-1">{(errors.productDesignLayout as FieldError).message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <Label htmlFor="product-options" className="text-neutral-100">
                                Opções de produtos no display
                            </Label>
                            <Controller
                                name="productDesignOptions"
                                control={control}
                                render={({ field }) => (
                                    <div className="w-full">
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="product-options">
                                                <SelectValue placeholder="Selecione uma opção..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="op1">Opção 1</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.productDesignOptions && (
                                            <p className="text-sm text-red-500 mt-1">{(errors.productDesignOptions as FieldError).message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <Label htmlFor="layout-update" className="text-neutral-100">
                                Atualização de layout customizável
                            </Label>
                            <Controller
                                name="productDesignLayoutUpdate"
                                control={control}
                                render={({ field }) => (
                                    <div className="w-full">
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="layout-update">
                                                <SelectValue placeholder="Selecione uma opção..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="op1">Opção 1</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.productDesignLayoutUpdate && (
                                            <p className="text-sm text-red-500 mt-1">{(errors.productDesignLayoutUpdate as FieldError).message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}