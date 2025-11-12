'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CameraIcon } from "lucide-react";
import { useFormContext, useWatch, FieldError } from "react-hook-form";
import { GlobalProductFormData } from "../schema";
import { Label } from "@/components/ui/label";

export function ProductImageAndVideoForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();

    const uploadedImages = useWatch({
        control,
        name: "productImageAndVideoImages",
    });

    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Imagens e vídeos
                </AccordionTrigger>
                <AccordionContent className="p-4">
                    <input
                        type="file"
                        id="image-upload"
                        className="hidden"
                        multiple
                        accept="image/png, image/jpeg, image/webp"
                        {...register("productImageAndVideoImages")}
                    />

                    <Label htmlFor="image-upload" className="flex items-center gap-4 cursor-pointer">
                        <div className="border border-neutral-600 rounded-sm p-4 flex items-center justify-center h-20 w-20 shrink-0">
                            <CameraIcon className="h-10 w-10 text-neutral-100" />
                        </div>

                        <div className="text-base leading-snug">
                            {uploadedImages && uploadedImages.length > 0 ? (
                                <div className="text-sm text-neutral-300">
                                    {Array.from(uploadedImages).map((file: unknown) => (
                                        <div key={(file as File).name}>{(file as File).name}</div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-cyan-500">
                                    Localize ou arraste uma<br />imagem aqui
                                </p>
                            )}
                        </div>
                    </Label>


                    {errors.productImageAndVideoImages && (
                        <p className="text-sm text-red-500 mt-2">
                            {(errors.productImageAndVideoImages as FieldError).message}
                        </p>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}