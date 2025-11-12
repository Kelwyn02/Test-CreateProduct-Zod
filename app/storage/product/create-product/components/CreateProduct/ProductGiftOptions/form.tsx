'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { useFormContext, Controller } from "react-hook-form";
import { GlobalProductFormData } from "../schema";


export function ProductGiftOptionsForm() {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();


    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Opções de presente
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-6 items-center">

                        <Label htmlFor="allow-message" className="text-neutral-100">
                            Permitir mensagem
                        </Label>

                        <Controller
                            name="productGiftOptionsAllowMessage"
                            control={control}
                            render={({ field }) => (
                                <Switch
                                    id="allow-message"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="productGiftOptionsUseConfigMessage"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="use-config-1"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                    <Label htmlFor="use-config-1" className="text-neutral-100">
                                        Usar configurações
                                    </Label>
                                </div>
                            )}
                        />

                        <Label htmlFor="allow-wrapping" className="text-neutral-100">
                            Permitir embrulho
                        </Label>

                        <Controller
                            name="productGiftOptionsAllowWrapping"
                            control={control}
                            render={({ field }) => (
                                <Switch
                                    id="allow-wrapping"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="productGiftOptionsUseConfigWrapping"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="use-config-2"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                    <Label htmlFor="use-config-2" className="text-neutral-100">
                                        Usar configurações
                                    </Label>
                                </div>
                            )}
                        />

                        <Label htmlFor="wrapping-price" className="text-neutral-100">
                            Preço para embrulho
                        </Label>

                        <div className="space-y-1">
                            <Input
                                id="wrapping-price"
                                className="max-w-xs"
                                {...register("productGiftOptionsWrappingPrice")}
                            />
                            {errors.productGiftOptionsWrappingPrice && (
                                < p className="text-sm text-red-500">{errors.productGiftOptionsWrappingPrice.message}</p>
                            )}
                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}