'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreateCustomerPage() {
    const [date, setDate] = React.useState<Date | undefined>();

    return (
        <Tabs defaultValue="account" className="w-full">

            <TabsList className="bg-neutral-900 h-auto w-full justify-start rounded-sm">
                <TabsTrigger
                    value="customer"
                    className="p-4 data-[state=active]:shadow-none data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 data-[state=inactive]:text-neutral-400"
                >
                    Informações do cliente
                </TabsTrigger>
                <TabsTrigger
                    value="account"
                    className="p-4 data-[state=active]:shadow-none data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 data-[state=inactive]:text-neutral-400"
                >
                    Informações da conta
                </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="bg-neutral-900 p-6 rounded-sm">
                <h2 className="text-xl font-semibold text-neutral-100 mb-6">Informações da conta</h2>

                <form className="space-y-8 max-w-3xl">

                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <Label htmlFor="website" className="text-neutral-100">Associar ao website</Label>
                        <Select>
                            <SelectTrigger id="website">
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
                            <SelectTrigger id="group">
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

                    <div className="space-y-2">
                        <Label htmlFor="prefix" className="text-neutral-100">Nome prefixo</Label>
                        <Input id="prefix" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-neutral-100">Primeiro nome</Label>
                        <Input id="first-name" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-neutral-100">Sobrenome</Label>
                        <Input id="last-name" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="suffix" className="text-neutral-100">Nome sufixo</Label>
                        <Input id="suffix" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-100">Email</Label>
                        <Input id="email" type="email" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <Label htmlFor="birthdate" className="text-neutral-100">Data de aniversário</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal bg-transparent border-zinc-700 hover:bg-zinc-800",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className=" h-4 w-4" />
                                    {date ? (
                                        <span>{date.toLocaleDateString("pt-BR")}</span>
                                    ) : (
                                        <span>Selecione uma data</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fiscal-number" className="text-neutral-100">Número fiscal</Label>
                        <Input id="fiscal-number" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                        <Label htmlFor="gender" className="text-neutral-100">Gênero</Label>
                        <Select>
                            <SelectTrigger id="gender">
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
                            <SelectTrigger id="welcome-email">
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
                        <Input id="customer-code" />
                    </div>

                </form>
            </TabsContent>

            <TabsContent value="customer" className="bg-neutral-900 p-6 rounded-sm">
                <h2 className="text-xl font-semibold text-neutral-100 mb-6">Informações do cliente</h2>
                <p>Outro form</p>
            </TabsContent>

        </Tabs>
    );
}