'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const seoSchema = z.object({
    url: z.string().url("Por favor, insira uma URL válida (ex: https://...)"),
    title: z.string().min(3, "O título é obrigatório.").max(70, "O título deve ter no máximo 70 caracteres."),
    description: z.string().min(3, "A descrição é obrigatória.").max(160, "A descrição deve ter no máximo 160 caracteres."),
    keywords: z.string().optional(),
});

type SeoFormData = z.infer<typeof seoSchema>;

export function ProductSEO() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SeoFormData>({
        resolver: zodResolver(seoSchema),
    });

    const onSubmit: SubmitHandler<SeoFormData> = (data) => {
        console.log("Validando dados", data);
    };

    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Otimização para motores de busca
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-6">

                                <div className="space-y-2">
                                    <Label htmlFor="url" className="text-neutral-100">URL</Label>
                                    <Input id="url" {...register("url")} />
                                    {errors.url && <p className="text-sm text-red-500 mt-1">{errors.url.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="keywords" className="text-neutral-100">Palavras-chave</Label>
                                    <Textarea
                                        id="keywords"
                                        className="min-h-[150px] resize-y"
                                        {...register("keywords")}
                                    />
                                    {errors.keywords && <p className="text-sm text-red-500 mt-1">{errors.keywords.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-6">

                                <div className="space-y-2">
                                    <Label htmlFor="title" className="text-neutral-100">Título</Label>
                                    <Input id="title" {...register("title")} />
                                    {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description" className="text-neutral-100">Descrição</Label>
                                    <Textarea
                                        id="description"
                                        className="min-h-[150px] resize-y"
                                        {...register("description")}
                                    />
                                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-neutral-400">
                            Máximo de 255 caracteres. A meta descrição deve ter, idealmente, entre 150 e 160 caracteres.
                        </p>

                        <div className="flex justify-end">
                            <Button type="submit" className="text-neutral-100 bg-cyan-600 hover:bg-cyan-700">
                                Salvar
                            </Button>
                        </div>
                    </form>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}