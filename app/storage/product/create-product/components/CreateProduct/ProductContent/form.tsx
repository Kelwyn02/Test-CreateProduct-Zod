'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, ChevronDown,
    Heading1Icon, ImageIcon, ItalicIcon, LinkIcon, ListIcon, ListOrderedIcon,
    PilcrowIcon, RedoIcon, TableIcon, UnderlineIcon, UndoIcon
} from "lucide-react";

// 1. Imports Corrigidos
import { useFormContext } from "react-hook-form";
import { GlobalProductFormData } from "../schema";


export function ProductContentForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext<GlobalProductFormData>();


    return (
        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Conteúdo
                </AccordionTrigger>
                <AccordionContent className="p-4">

                    <div className="space-y-4">

                        <div className="flex items-center space-x-4">
                            <Label htmlFor="description-editor" className="text-neutral-100 min-w-[120px]">
                                Descrição
                            </Label>
                            <Button type="button" variant="outline" className="text-neutral border-neutral-700 hover:bg-neutral-800">
                                Editar com o editor de páginas
                            </Button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Label htmlFor="short-description-editor" className="text-neutral-100 min-w-[120px]">
                                Descrição curta
                            </Label>
                            <Button type="button" variant="outline" className="text-neutral border-neutral-700 hover:bg-neutral-800">
                                Mostrar / Esconder editor
                            </Button>
                            <Button type="button" variant="outline" className="text-neutral border-neutral-700 hover:bg-neutral-800">
                                Inserir imagem
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <div className="bg-neutral-800 p-2 rounded-sm border border-neutral-700">
                                <div className="flex items-center flex-wrap gap-x-2 gap-y-1">

                                    <div className="flex pr-2">
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <UndoIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <RedoIcon className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex items-center pr-2">
                                        <Button type="button" variant="ghost" className="h-8 text-neutral-400 hover:bg-neutral-700 px-2 flex items-center gap-1">
                                            Formatos <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex items-center pr-2">
                                        <Button type="button" variant="ghost" className="h-8 text-neutral-400 hover:bg-neutral-700 px-2 flex items-center gap-1">
                                            14px <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex items-center pr-2">
                                        <Button type="button" variant="ghost" className="h-8 text-neutral-400 hover:bg-neutral-700 px-2 flex items-center gap-1">
                                            <div className="h-4 w-4 border-b-2 border-red-500">A</div> <ChevronDown className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" className="h-8 text-neutral-400 hover:bg-neutral-700 px-2 flex items-center gap-1">
                                            <div className="h-4 w-4 border-b-2 border-yellow-500">A</div> <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex pr-2">
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <BoldIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <ItalicIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <UnderlineIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <AlignLeftIcon className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex pr-2">
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <AlignLeftIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <AlignCenterIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <AlignRightIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <AlignJustifyIcon className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex gap-x-1">
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <ListIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <ListOrderedIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <LinkIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <ImageIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <TableIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <PilcrowIcon className="h-4 w-4" />
                                        </Button>
                                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:bg-neutral-700">
                                            <Heading1Icon className="h-4 w-4" />
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <Textarea
                                id="editor-content"
                                className="min-h-[200px] bg-neutral-900 border-neutral-700 text-neutral-100 rounded-sm focus-visible:ring-offset-0 focus-visible:ring-transparent resize-y"
                                placeholder="Comece a digitar aqui..."
                                {...register("productContent")}
                            />

                            {errors.productContent && (
                                <p className="text-sm text-red-500 mt-1">{errors.productContent.message}</p>
                            )}
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}