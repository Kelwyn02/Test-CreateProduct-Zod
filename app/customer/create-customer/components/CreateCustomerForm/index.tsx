'use client'

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { CalendarIcon, ChevronDownIcon } from "lucide-react"

interface CreateCustomerFormProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function CreateCustomerForm({ date, setDate }: CreateCustomerFormProps) {
    return (
        <form className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                <Label htmlFor="website" className="text-neutral-100">
                    Associar ao website
                </Label>
                <Select>
                    <SelectTrigger
                        id="website"
                        className="w-full md:w-[60%] bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    >
                        <SelectValue placeholder="Website Principal" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                        <SelectItem value="main">Website Principal</SelectItem>
                        <SelectItem value="secondary">
                            Website Secundário
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                <Label htmlFor="group" className="text-neutral-100">
                    Grupo
                </Label>
                <Select>
                    <SelectTrigger
                        id="group"
                        className="w-full md:w-[60%] bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    >
                        <SelectValue placeholder="Geral" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                        <SelectItem value="general">Geral</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                <div></div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="disable-auto-group" defaultChecked />
                    <Label
                        htmlFor="disable-auto-group"
                        className="text-zinc-100"
                    >
                        Desativar alteração automática de grupo baseado no número
                        de identificação fiscal
                    </Label>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-neutral-100">
                        Primeiro nome
                    </Label>
                    <Input
                        id="first-name"
                        className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-neutral-100">
                        Sobrenome
                    </Label>
                    <Input
                        id="last-name"
                        className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-100">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="birthdate" className="text-neutral-100">
                        Data de aniversário
                    </Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-full justify-between text-left font-normal bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-100 rounded-lg p-2',
                                    !date && 'text-muted-foreground'
                                )}
                            >
                                <div className="flex items-center">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? (
                                        <span>{date.toLocaleDateString('pt-BR')}</span>
                                    ) : (
                                        <span>Selecione uma data</span>
                                    )}
                                </div>

                                <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-neutral-800 border-neutral-700 text-neutral-100">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fiscal-number" className="text-neutral-100">
                        Número fiscal
                    </Label>
                    <Input
                        id="fiscal-number"
                        className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gender" className="text-neutral-100">
                        Gênero
                    </Label>
                    <Select>
                        <SelectTrigger
                            id="gender"
                            className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                        >
                            <SelectValue placeholder="Panzerkampfwagen VI Tiger Ausf. B" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                            <SelectItem value="panzer">
                                Panzerkampfwagen VI Tiger Ausf. B
                            </SelectItem>
                            <SelectItem value="male">Masculino</SelectItem>
                            <SelectItem value="female">Feminino</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="welcome-email"
                        className="text-neutral-100"
                    >
                        Enviar email de bem-vindo através de:
                    </Label>
                    <Select>
                        <SelectTrigger
                            id="welcome-email"
                            className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                        >
                            <SelectValue placeholder="Website Principal" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                            <SelectItem value="main">Website Principal</SelectItem>
                            <SelectItem value="secondary">
                                Website Secundário
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="customer-code"
                        className="text-neutral-100"
                    >
                        Código de cliente
                    </Label>
                    <Input
                        id="customer-code"
                        className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-lg p-2"
                    />
                </div>
            </div>
        </form>
    )
}