'use client'

import * as React from "react"
import {
    ArrowLeftIcon,
    RefreshCwIcon,
    CalendarIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"


export default function CustomerAccountPage() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">

            <header className="flex justify-end items-center gap-4 mb-6">
                <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Voltar
                </Button>
                <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Reiniciar
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
                    Salvar
                </Button>
            </header>

            <Tabs defaultValue="account" orientation="vertical">

                <div className="flex gap-8">

                    <aside className="w-1/4 max-w-[280px] space-y-4">
                        <h2 className="text-xl font-semibold px-3">Informações do cliente</h2>
                        <TabsList className="flex flex-col w-full h-auto p-2 bg-neutral-900 rounded-lg space-y-1">

                            <TabsTrigger
                                value="account"
                                className="w-full justify-start p-3 data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 data-[state=inactive]:text-neutral-400"
                            >
                                Informações da conta
                            </TabsTrigger>

                        </TabsList>
                    </aside>

                    <main className="flex-1">

                        <TabsContent value="account" className="bg-neutral-900 p-6 rounded-lg m-0">
                            <h2 className="text-xl font-semibold text-neutral-100 mb-6">Informações da conta</h2>

                            <form className="space-y-8 max-w-3xl">

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="website" className="text-neutral-100">Associar ao website</Label>
                                    <Select>
                                        <SelectTrigger id="website" className="w-full md:w-[60%]">
                                            <SelectValue placeholder="Website Principal" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="main">Website Principal</SelectItem>
                                            <SelectItem value="secondary">Website Secundário</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="group" className="text-neutral-100">Grupo</Label>
                                    <Select>
                                        <SelectTrigger id="group" className="w-full md:w-[60%]">
                                            <SelectValue placeholder="Geral" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">Geral</SelectItem>
                                            <SelectItem value="vip">VIP</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <div></div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="disable-auto-group" defaultChecked />
                                        <Label htmlFor="disable-auto-group" className="text-zinc-100">
                                            Desativar alteração automática de grupo baseado no número de identificação fiscal
                                        </Label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="prefix" className="text-neutral-100">Nome prefixo</Label>
                                    {/* Largura corrigida */}
                                    <Input id="prefix" className="w-full md:w-[60%]"/>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="first-name" className="text-neutral-100">Primeiro nome</Label>
                                    {/* Largura corrigida */}
                                    <Input id="first-name" className="w-full md:w-[60%]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="last-name" className="text-neutral-100">Sobrenome</Label>
                                    {/* Largura corrigida */}
                                    <Input id="last-name" className="w-full md:w-[60%]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="suffix" className="text-neutral-100">Nome sufixo</Label>
                                    {/* Largura corrigida */}
                                    <Input id="suffix" className="w-full md:w-[60%]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="email" className="text-neutral-100">Email</Label>
                                    {/* Largura corrigida */}
                                    <Input id="email" type="email" className="w-full md:w-[60%]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="birthdate" className="text-neutral-100">Data de aniversário</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full md:w-[60%] justify-start text-left font-normal bg-transparent border-zinc-700 hover:bg-zinc-800",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? <span>{date.toLocaleDateString("pt-BR")}</span> : <span>Selecione uma data</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" selected={date} onSelect={setDate} />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="fiscal-number" className="text-neutral-100">Número fiscal</Label>
                                    <Input id="fiscal-number" className="w-full md:w-[60%]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="gender" className="text-neutral-100">Gênero</Label>
                                    <Select>
                                        <SelectTrigger id="gender" className="w-full md:w-[60%]">
                                            <SelectValue placeholder="Panzerkampfwagen VI Tiger Ausf. B" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="panzer">Panzerkampfwagen VI Tiger Ausf. B</SelectItem>
                                            <SelectItem value="male">Masculino</SelectItem>
                                            <SelectItem value="female">Feminino</SelectItem>
                                            <SelectItem value="other">Outro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="welcome-email" className="text-neutral-100">Enviar email de bem-vindo através de:</Label>
                                    <Select>
                                        <SelectTrigger id="welcome-email" className="w-full md:w-[60%]">
                                            <SelectValue placeholder="Website Principal" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="main">Website Principal</SelectItem>
                                            <SelectItem value="secondary">Website Secundário</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                    <Label htmlFor="customer-code" className="text-neutral-100">Código de cliente</Label>
                                    <Input id="customer-code" className="w-full md:w-[60%]" />
                                </div>

                            </form>
                        </TabsContent>
                    </main>

                </div>
            </Tabs>
        </div>
    );
}