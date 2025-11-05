'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const productInfoSchema = z.object({
  activateProduct: z.boolean().optional(),
  adminPermission: z.boolean().optional(),
  userSettings: z.boolean().optional(),
  attributes: z.string().optional().refine(val => val, "É preciso selecionar um atributo."),
  productName: z.string().optional()
    .refine(val => val && val.length >= 3, { message: "O nome do produto é obrigatório." }),
  category: z.string().optional().refine(val => val, "É preciso selecionar uma categoria."),
  stockStatus: z.string().optional().refine(val => val, "A situação de estoque é obrigatória."),
  weightUnit: z.string().optional(),
  productCode: z.string().optional(),
  fiscalClass: z.string().optional(),
  visibility: z.string().optional(),
  originCountry: z.string().optional(),

  price: z.coerce.number({
    error: "O preço é obrigatório.",
  }).positive("O preço deve ser positivo.").optional(),

  quantity: z.coerce.number({
    error: "A quantidade é obrigatória.",
  }).int("Deve ser um número inteiro.").positive("Deve ser positiva.").optional(),
  
  weight: z.coerce.number().positive("O peso deve ser positivo.").optional(),
});

type ProductInfoFormData = z.infer<typeof productInfoSchema>;

export function ProductInfo() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInfoFormData>({
    resolver: zodResolver(productInfoSchema),
    defaultValues: {
      activateProduct: false,
      attributes: "",
      productName: "",
      price: 0,
      quantity: 0,
      weight: 0,
      weightUnit: "",
      category: "",
      productCode: "",
      fiscalClass: "",
      stockStatus: "",
      visibility: "",
      originCountry: "",
      adminPermission: false,
      userSettings: true,
    },
  });

  const onSubmit: SubmitHandler<ProductInfoFormData> = (data) => {
    console.log("Validando dados", data);
  };

  return (
    <Accordion type="single" collapsible defaultValue="display" className="w-full m-4 pr-8">
      <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
        <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
          Informações do produto
        </AccordionTrigger>
        <AccordionContent className="p-4">
          <div className="bg-neutral-900 text-neutral p-4 rounded-sm">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                <div className="space-y-6">

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="activate-product" className="text-base text-neutral-100">
                      Ativar produto
                    </Label>
                    <Controller
                      name="activateProduct"
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
                      name="attributes"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="attributes">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="op1">Opção 1</SelectItem>
                            <SelectItem value="op2">Opção 2</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.attributes && <p className="text-sm text-red-500 mt-1">{errors.attributes.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product-name" className="text-neutral-100">Nome do produto</Label>
                    <Input id="product-name" {...register("productName")} />
                    {errors.productName && <p className="text-sm text-red-500 mt-1">{errors.productName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-neutral-100">Preço</Label>
                    <Input id="price" type="number" step="0.01" {...register("price")} />
                    {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                    <a href="#" className="text-sm text-cyan-500 hover:underline">Precificação avançada</a>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-neutral-100">Quantidade</Label>
                    <Input id="quantity" type="number" {...register("quantity")} />
                    {errors.quantity && <p className="text-sm text-red-500 mt-1">{errors.quantity.message}</p>}
                    <a href="#" className="text-sm text-cyan-500 hover:underline">Inventário avançado</a>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-neutral-100">Peso</Label>
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-1">
                        <Input className="flex-1" type="number" step="0.01" {...register("weight")} />
                        {errors.weight && <p className="text-sm text-red-500 mt-1">{errors.weight.message}</p>}
                      </div>
                      <Controller
                        name="weightUnit"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-[150px]">
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

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-neutral-100">Categoria</Label>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Selecionar categoria..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cat1">Categoria 1</SelectItem>
                            <SelectItem value="cat2">Categoria 2</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
                    <Button
                      type="button"
                      variant="default"
                      className="bg-cyan-600 hover:bg-cyan-800 text-neutral-100 font-semibold"
                    >
                      Nova categoria
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">

                  <div className="space-y-2">
                    <Label htmlFor="product-code" className="text-neutral-100">Código do produto</Label>
                    <Input id="product-code" {...register("productCode")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fiscal-class" className="text-neutral-100">Classe fiscal</Label>
                    <Controller
                      name="fiscalClass"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="fiscal-class">
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
                      name="stockStatus"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="stock-status">
                            <SelectValue placeholder="Selecionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="in_stock">Em estoque</SelectItem>
                            <SelectItem value="out_of_stock">Fora de estoque</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.stockStatus && <p className="text-sm text-red-500 mt-1">{errors.stockStatus.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visibility" className="text-neutral-100">Visibilidade</Label>
                    <Controller
                      name="visibility"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="visibility">
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
                      name="originCountry"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="origin-country">
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
                    name="adminPermission"
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
                    name="userSettings"
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

              <div className="flex justify-end mt-8">
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100">
                  Salvar
                </Button>
              </div>

            </form>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}