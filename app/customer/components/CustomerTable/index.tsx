'use client' 

import * as React from "react" 
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    CheckIcon,
    EyeIcon,
    GripVerticalIcon,
    Loader2Icon,
    MoreHorizontalIcon,
    PencilIcon,
    Trash2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type Customer = {
    id: string;
    customerFirstName: string;
    customerLastName: string;
    customerGroup: string;
    customerStatus: "Finalizado" | "Em processo";
    customerAssinatura: "Comum" | "Plus";
}

const StatusBadge = ({ status }: { status: "Finalizado" | "Em processo" }) => {
    if (status === "Finalizado") {
        return (
            <div className="flex items-center gap-2 text-green-400">
                <CheckIcon className="h-4 w-4" />
                <span className="font-medium">Finalizado</span>
            </div>
        )
    }
    return (
        <div className="flex items-center gap-2 text-yellow-400">
            <Loader2Icon className="h-4 w-4 animate-spin" />
            <span className="font-medium">Em processo</span>
        </div>
    )
}

export function CustomerTable() {
    
    const [customers, setCustomers] = React.useState<Customer[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchCustomers() {
            try {
                const response = await fetch('http://localhost:3001/customers')
                if (!response.ok) {
                    throw new Error('Não foi possível carregar os clientes.')
                }
                const data = await response.json()
                setCustomers(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCustomers()
    }, []) 

    if (isLoading) {
        return (
            <div className="rounded-sm border border-neutral-800 bg-neutral-900 p-10 text-center text-neutral-400">
                Carregando clientes...
            </div>
        )
    }

    if (error) {
        return (
            <div className="rounded-sm border border-red-800 bg-red-900/20 p-10 text-center text-red-400">
                Erro: {error}
            </div>
        )
    }

    return (
        <div className="rounded-sm border border-neutral-800 bg-neutral-900">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-b-neutral-800">
                        <TableHead className="w-10"></TableHead>
                        <TableHead className="w-10">
                            <Checkbox />
                        </TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Sobrenome</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Grupo</TableHead>
                        <TableHead>Assinatura</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>
                
                <TableBody>
                    {customers.map((row) => (
                        <TableRow key={row.id} className="border-b-neutral-800">
                            <TableCell>
                                <GripVerticalIcon className="h-5 w-5 text-neutral-600 cursor-grab" />
                            </TableCell>
                            <TableCell>
                                <Checkbox /> 
                            </TableCell>
                            
                            <TableCell className="font-semibold">{row.customerFirstName}</TableCell>
                            <TableCell>{row.customerLastName}</TableCell>
                            <TableCell>
                                <StatusBadge status={row.customerStatus} />
                            </TableCell>
                            <TableCell>{row.customerGroup}</TableCell>
                            <TableCell>{row.customerAssinatura}</TableCell>
                            
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-800">
                                            <MoreHorizontalIcon className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="bg-neutral-900 border-neutral-700 text-neutral-100"
                                    >
                                        <DropdownMenuItem
                                            className="cursor-pointer hover:bg-neutral-800 flex justify-between items-center"
                                        >
                                            Visualizar
                                            <EyeIcon className="h-4 w-4 text-neutral-400" />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="cursor-pointer hover:bg-neutral-800 flex justify-between items-center"
                                        >
                                            Editar
                                            <PencilIcon className="h-4 w-4 text-neutral-400" />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-red-500 cursor-pointer hover:bg-red-900/50 hover:text-red-400 flex justify-between items-center"
                                        >
                                            Excluir
                                            <Trash2Icon className="h-4 w-4" />
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}