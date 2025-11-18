'use client'

import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from 'next/navigation' 

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { CalendarIcon, ChevronDownIcon } from "lucide-react"

const customerFormSchema = z.object({
    customerWebsite: z.string().optional(),
    customerGroup: z.string().optional(),
    customerDisableAutoGroup: z.boolean().default(true),
    customerFirstName: z.string().min(1, { message: "O primeiro nome é obrigatório." }),
    customerLastName: z.string().min(1, { message: "O sobrenome é obrigatório." }),
    customerEmail: z.string().email({ message: "Por favor, insira um email válido." }),
    customerBirthdate: z.date().optional(),
    customerFiscalNumber: z.string().optional(),
    customerGender: z.string().optional(),
    customerWelcomeEmail: z.string().optional(),
    customerCode: z.string().optional(),

    customerStatus: z.enum(["Em processo", "Finalizado"]),
    customerAssinatura: z.enum(["Comum", "Plus"]),
})

type CustomerFormValues = z.infer<typeof customerFormSchema>

export function CreateCustomerForm() {
    
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)
    const [submitError, setSubmitError] = React.useState<string | null>(null)

    const form = useForm<CustomerFormValues>({
        resolver: zodResolver(customerFormSchema),
        defaultValues: {
            customerWebsite: "main",
            customerGroup: "general",
            customerDisableAutoGroup: true,
            customerFirstName: "",
            customerLastName: "",
            customerEmail: "",
            customerFiscalNumber: "",
            customerGender: "panzer",
            customerWelcomeEmail: "main",
            customerCode: "",
            customerStatus: "Em processo",
            customerAssinatura: "Comum",
        },
    })

    async function onSubmit(data: CustomerFormValues) {
        setIsLoading(true)
        setSubmitError(null)
        
        try {
            const response = await fetch('http://localhost:3001/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data), 
            });

            if (!response.ok) {
                throw new Error('Falha ao criar o cliente.')
            }
            
            console.log("Cliente criado:", await response.json())
            router.push('/customer')

        } catch (error: any) {
            console.error(error)
            setSubmitError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                <Label htmlFor="website" className="text-neutral-100 pt-2">
                    Associar ao website
                </Label>
                <div>
                    <Controller
                        name="customerWebsite"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="website" className="w-full md:w-[60%] bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Website Principal" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="main">Website Principal</SelectItem>
                                    <SelectItem value="secondary">Website Secundário</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerWebsite?.message || '\u00A0'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                <Label htmlFor="group" className="text-neutral-100 pt-2">
                    Grupo
                </Label>
                <div>
                    <Controller
                        name="customerGroup"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="group" className="w-full md:w-[60%] bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Geral" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="Geral">Geral</SelectItem>
                                    <SelectItem value="VIP">VIP</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerGroup?.message || '\u00A0'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                <Label htmlFor="assinatura" className="text-neutral-100 pt-2">
                    Assinatura
                </Label>
                <div>
                    <Controller
                        name="customerAssinatura"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="assinatura" className="w-full md:w-[60%] bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="Comum">Comum</SelectItem>
                                    <SelectItem value="Plus">Plus</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerAssinatura?.message || '\u00A0'}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                <div></div>
                <div className="flex items-center space-x-2">
                    <Controller
                        name="customerDisableAutoGroup"
                        control={form.control}
                        render={({ field }) => (
                            <Checkbox
                                id="disable-auto-group"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        )}
                    />
                    <Label htmlFor="disable-auto-group" className="text-zinc-100">
                        Desativar alteração automática de grupo...
                    </Label>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-neutral-100">
                        Primeiro nome
                    </Label>
                    <Input id="first-name" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2"
                        {...form.register("customerFirstName")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerFirstName?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-neutral-100">
                        Sobrenome
                    </Label>
                    <Input id="last-name" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2"
                        {...form.register("customerLastName")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerLastName?.message || '\u00A0'}
                    </p>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-100">Email</Label>
                    <Input id="email" type="email" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2"
                        {...form.register("customerEmail")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerEmail?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="birthdate" className="text-neutral-100">Data de aniversário</Label>
                    <Controller
                        name="customerBirthdate"
                        control={form.control}
                        render={({ field }) => (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={'outline'}
                                        className={cn(
                                            'w-full justify-between text-left font-normal bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-100 rounded-sm p-2',
                                            !field.value && 'text-muted-foreground'
                                        )}
                                    >
                                        <div className="flex items-center">
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? <span>{field.value.toLocaleDateString('pt-BR')}</span> : <span>Selecione uma data</span>}
                                        </div>
                                        <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                                </PopoverContent>
                            </Popover>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerBirthdate?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fiscal-number" className="text-neutral-100">Número fiscal</Label>
                    <Input id="fiscal-number" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2"
                        {...form.register("customerFiscalNumber")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerFiscalNumber?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gender" className="text-neutral-100">Gênero</Label>
                    <Controller
                        name="customerGender"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="gender" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Panzerkampfwagen VI Tiger Ausf. B" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="panzer">Panzerkampfwagen VI Tiger Ausf. B</SelectItem>
                                    <SelectItem value="male">Masculino</SelectItem>
                                    <SelectItem value="female">Feminino</SelectItem>
                                    <SelectItem value="other">Outro</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerGender?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="welcome-email" className="text-neutral-100">Email de bem-vindo</Label>
                    <Controller
                        name="customerWelcomeEmail"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="welcome-email" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Website Principal" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="main">Website Principal</SelectItem>
                                    <SelectItem value="secondary">Website Secundário</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerWelcomeEmail?.message || '\u00A0'}
                    </p>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="customer-code" className="text-neutral-100">Código de cliente</Label>
                    <Input id="customer-code" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2"
                        {...form.register("customerCode")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerCode?.message || '\u00A0'}
                    </p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="status" className="text-neutral-100">Status</Label>
                    <Controller
                        name="customerStatus"
                        control={form.control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="status" className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 rounded-sm p-2">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-100">
                                    <SelectItem value="Em processo">Em processo</SelectItem>
                                    <SelectItem value="Finalizado">Finalizado</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                        {form.formState.errors.customerStatus?.message || '\u00A0'}
                    </p>
                </div>

            </div>

            <div className="flex justify-end pt-4 items-center gap-4">
                {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                )}
                <Button 
                    type="submit" 
                    className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                    disabled={isLoading}
                >
                    {isLoading ? "Salvando..." : "Salvar Cliente"}
                </Button>
            </div>
        </form>
    )
}