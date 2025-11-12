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


export function ProductAttributeForm() {

    const {
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();


    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-sm border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Atributos
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <div className="space-y-2">
                        <Label htmlFor="productAttributeActivity" className="text-neutral-100 mb-2">
                            Atividade
                        </Label>

                        <Controller
                            name="productAttributeActivity"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="productAttributeActivity" className="w-32">
                                        <SelectValue placeholder="Selecione..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="attr1">Atributo 1</SelectItem>
                                        <SelectItem value="attr2">Atributo 2</SelectItem>
                                        <SelectItem value="attr3">Atributo 3</SelectItem>
                                        <SelectItem value="attr4">Atributo 4</SelectItem>
                                        <SelectItem value="attr5">Atributo 5</SelectItem>
                                        <SelectItem value="attr6">Atributo 6</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        {errors.productAttributeActivity && (
                            <p className="text-sm text-red-500 mt-1">{(errors.productAttributeActivity as FieldError).message}</p>
                        )}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}