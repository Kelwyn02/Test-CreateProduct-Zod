'use client'

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { designSchema, DesignFormData } from "./actions"

export function ProductDesignForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<DesignFormData>({
        resolver: zodResolver(designSchema),
        defaultValues: {
            theme: "",
            layout: "",
            productOptions: "",
            layoutUpdate: "",
        },
    });

    const onSubmit: SubmitHandler<DesignFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                    <Label htmlFor="theme" className="text-neutral-100">
                        Tema
                    </Label>
                    <Controller
                        name="theme"
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
                                {errors.theme && (
                                    <p className="text-sm text-red-500 mt-1">{errors.theme.message}</p>
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
                        name="layout"
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
                                {errors.layout && (
                                    <p className="text-sm text-red-500 mt-1">{errors.layout.message}</p>
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
                        name="productOptions"
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
                                {errors.productOptions && (
                                    <p className="text-sm text-red-500 mt-1">{errors.productOptions.message}</p>
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
                        name="layoutUpdate"
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
                                {errors.layoutUpdate && (
                                    <p className="text-sm text-red-500 mt-1">{errors.layoutUpdate.message}</p>
                                )}
                            </div>
                        )}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                    Salvar
                </Button>
            </div>

        </form>
    )
}

