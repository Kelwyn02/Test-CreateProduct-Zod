'use client'

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { customOptionSchema, CustomOptionFormData } from "./actions"

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ProductCustomOptionsForm() {
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
            maxChars: 256,
        },
    });

    const onSubmit: SubmitHandler<CustomOptionFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} >
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
                                    <SelectItem value="option1">Opção 1</SelectItem>
                                    <SelectItem value="option2">Opção 2</SelectItem>
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
    )
}