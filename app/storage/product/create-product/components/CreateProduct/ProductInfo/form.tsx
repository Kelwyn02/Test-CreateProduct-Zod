'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { useFormContext, Controller } from "react-hook-form";
import { GlobalProductFormData } from "../schema";

export function ProductInfoForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();

    return (
        <Accordion type="single" collapsible defaultValue="display" className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Informações do produto
                </AccordionTrigger>
                <AccordionContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-6">

                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="activate-product" className="text-base text-neutral-100">
                                    Ativar produto
                                </Label>
                                <Controller
                                    name="productInfoActivateProduct"
                                    control={control}
                                    render={({ field }) => (
                                        <Switch
                                            id="activate-product"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="attributes" className="text-neutral-100">Atributos</Label>
                                <Controller
                                    name="productInfoAttributes"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="attributes" className="w-full">
                                                <SelectValue placeholder="Selecione..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="op1">Opção 1</SelectItem>
                                                <SelectItem value="op2">Opção 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.productInfoAttributes && <p className="text-sm text-red-500 mt-1">{errors.productInfoAttributes.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="product-name" className="text-neutral-100">Nome do produto</Label>
                                <Input id="product-name" {...register("productInfoName")} />
                                {errors.productInfoName && <p className="text-sm text-red-500 mt-1">{errors.productInfoName.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="productInfoPrice" className="text-neutral-100">Preço</Label>
                                <Input id="productInfoPrice" type="number" step="0.01" {...register("productInfoPrice")} />
                                {errors.productInfoPrice && <p className="text-sm text-red-500 mt-1">{errors.productInfoPrice.message}</p>}
                                <a href="#" className="text-sm text-cyan-500 hover:underline">Precificação avançada</a>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="productInfoQuantity" className="text-neutral-100">Quantidade</Label>
                                <Input id="quantity" type="number" {...register("productInfoQuantity")} />
                                {errors.productInfoQuantity && <p className="text-sm text-red-500 mt-1">{errors.productInfoQuantity.message}</p>}
                                <a href="#" className="text-sm text-cyan-500 hover:underline">Inventário avançado</a>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-neutral-100">Peso</Label>
                                <div className="flex gap-4">
                                    <div className="w-1/2 space-y-1">
                                        <Input className="flex-1" type="number" step="0.01" {...register("productInfoWeight")} />
                                        {errors.productInfoWeight && <p className="text-sm text-red-500 mt-1">{errors.productInfoWeight.message}</p>}
                                    </div>
                                    <div className="w-1/2 space-y-1">
                                        <Controller
                                            name="productInfoWeightUnit"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Unidade" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="kg">kg</SelectItem>
                                                        <SelectItem value="g">g</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category" className="text-neutral-100">Categoria</Label>

                                <div className="flex gap-4 items-start">

                                    <div className="flex-1 space-y-1">
                                        <Controller
                                            name="productInfoCategory"
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger id="category" className="w-full">
                                                        <SelectValue placeholder="Selecionar categoria..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="cat1">Categoria 1</SelectItem>
                                                        <SelectItem value="cat2">Categoria 2</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.productInfoCategory && <p className="text-sm text-red-500 mt-1">{errors.productInfoCategory.message}</p>}
                                    </div>

                                    <Button
                                        type="button"
                                        variant="default"
                                        className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                                    >
                                        Nova categoria
                                    </Button>
                                </div>
                            </div>

                        </div>

                        <div className="space-y-6">

                            <div className="space-y-2">
                                <Label htmlFor="product-code" className="text-neutral-100">Código do produto</Label>
                                <Input id="product-code" {...register("productInfoCode")} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="fiscal-class" className="text-neutral-100">Classe fiscal</Label>
                                <Controller
                                    name="productInfoFiscalClass"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="fiscal-class" className="w-full">
                                                <SelectValue placeholder="Selecionar..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="op1">Opção 1</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="stock-status" className="text-neutral-100">Situação de estoque</Label>
                                <Controller
                                    name="productInfoStockStatus"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="stock-status" className="w-full">
                                                <SelectValue placeholder="Selecionar..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="in_stock">Em estoque</SelectItem>
                                                <SelectItem value="out_of_stock">Fora de estoque</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.productInfoStockStatus && <p className="text-sm text-red-500 mt-1">{errors.productInfoStockStatus.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="visibility" className="text-neutral-100">Visibilidade</Label>
                                <Controller
                                    name="productInfoVisibility"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="visibility" className="w-full">
                                                <SelectValue placeholder="Catálogo / Localizar" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="catalog">Catálogo</SelectItem>
                                                <SelectItem value="search">Localizar</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="origin-country" className="text-neutral-100">País de origem</Label>
                                <Controller
                                    name="productInfoOriginCountry"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="origin-country" className="w-full">
                                                <SelectValue placeholder="Selecionar..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="br">Brasil</SelectItem>
                                                <SelectItem value="us">Estados Unidos</SelectItem>
                                                <SelectItem value="arg">Argentina</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-6">
                        <div className="flex items-center space-x-2">

                            <Controller
                                name="productInfoAdminPermission"
                                control={control}
                                render={({ field }) => (
                                    <Switch
                                        id="admin-permission"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <Label htmlFor="admin-permission" className="text-neutral-100">
                                Permitir ADM
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Controller
                                name="productInfoUserSettings"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id="user-settings"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <Label htmlFor="user-settings" className="text-neutral-100">
                                Usar configurações de usuário
                            </Label>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}