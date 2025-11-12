'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { useFormContext, Controller, FieldError } from "react-hook-form";
import { GlobalProductFormData } from "../schema";


export function ProductDownloadForm() {
    const {
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();


    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Download de conteúdo
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <Controller
                        name="productDownloadable"
                        control={control}
                        render={({ field }) => (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="downloadable"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                                <Label htmlFor="downloadable" className="text-neutral-100">
                                    É possível realizar o download deste produto?
                                </Label>
                            </div>
                        )}
                    />

                    {errors.productDownloadable && (
                        <p className="text-sm text-red-500 mt-2">
                            {(errors.productDownloadable as FieldError).message}
                        </p>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}