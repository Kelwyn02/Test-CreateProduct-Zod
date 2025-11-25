'use client'

import * as React from "react"
import {
    MoreHorizontalIcon,
    CheckIcon,
    Loader2Icon,
    EyeIcon,
    PencilIcon,
    Trash2Icon,
    GripVerticalIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

// --- Tipos ---
export type Customer = {
    id: string;
    customerFirstName: string;
    customerLastName: string;
    customerGroup: string;
    customerStatus: "Finalizado" | "Em processo";
    customerAssinatura: "Comum" | "Plus";
}

interface CustomerTableProps {
    customers?: Customer[]; // Tornei opcional (?) para evitar erro de tipo
    loading: boolean;
    selectedIds: string[];
    isAllSelected: boolean;
    onSelectOne: (id: string) => void;
    onSelectAll: () => void;
}

// --- Componente Auxiliar ---
const StatusBadge = ({ status }: { status: string }) => {
    if (status === "Finalizado") {
        return (
            <Badge variant="outline" className="bg-emerald-950/30 text-emerald-400 border-emerald-900/50 rounded-md px-2 py-1 flex items-center w-fit gap-1.5 font-normal">
                <CheckIcon className="h-3.5 w-3.5" />
                Finalizado
            </Badge>
        )
    }
    return (
        <Badge variant="outline" className="bg-yellow-950/30 text-yellow-400 border-yellow-900/50 rounded-md px-2 py-1 flex items-center w-fit gap-1.5 font-normal">
            <Loader2Icon className="h-3.5 w-3.5 animate-spin" />
            Em processo
        </Badge>
    )
}

// --- Componente Principal ---
export function CustomerTable({
    customers = [], // Valor padrão vazio se for undefined
    loading,
    selectedIds,
    isAllSelected,
    onSelectOne,
    onSelectAll
}: CustomerTableProps) {

    if (loading) {
        return <div className="p-8 text-center text-neutral-500">Carregando clientes...</div>;
    }

    return (
        <div className="rounded-sm border border-neutral-800 bg-neutral-900">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-b-neutral-800">
                        <TableHead className="w-10"></TableHead>
                        <TableHead className="w-10">
                            <Checkbox
                                checked={isAllSelected}
                                onCheckedChange={onSelectAll}
                                aria-label="Selecionar tudo"
                                className="border-neutral-600 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600"
                            />
                        </TableHead>
                        <TableHead className="text-neutral-400 font-medium">Nome</TableHead>
                        <TableHead className="text-neutral-400 font-medium">Sobrenome</TableHead>
                        <TableHead className="text-neutral-400 font-medium">Status</TableHead>
                        <TableHead className="text-neutral-400 font-medium">Grupo</TableHead>
                        <TableHead className="text-neutral-400 font-medium">Assinatura</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {customers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} className="h-24 text-center text-neutral-500">
                                Nenhum cliente encontrado.
                            </TableCell>
                        </TableRow>
                    ) : (
                        customers.map((row) => {
                            const isSelected = selectedIds.includes(row.id);
                            return (
                                <TableRow
                                    key={row.id}
                                    className="border-b-neutral-800 hover:bg-neutral-800/50 data-[state=selected]:bg-neutral-800/80 transition-colors"
                                    data-state={isSelected ? "selected" : undefined}
                                >
                                    <TableCell>
                                        <GripVerticalIcon className="h-5 w-5 text-neutral-600 cursor-grab" />
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox
                                            checked={isSelected}
                                            onCheckedChange={() => onSelectOne(row.id)}
                                            className="border-neutral-600 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600"
                                        />
                                    </TableCell>

                                    <TableCell className="font-medium text-neutral-200">{row.customerFirstName}</TableCell>
                                    <TableCell className="text-neutral-300">{row.customerLastName}</TableCell>
                                    <TableCell>
                                        <StatusBadge status={row.customerStatus} />
                                    </TableCell>
                                    <TableCell className="text-neutral-300">{row.customerGroup}</TableCell>
                                    <TableCell className="text-neutral-300">{row.customerAssinatura}</TableCell>

                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-neutral-800 text-neutral-400 hover:text-white">
                                                    <MoreHorizontalIcon className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                align="end"
                                                className="bg-neutral-900 border-neutral-800 text-neutral-100"
                                            >
                                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-800 flex justify-between items-center focus:bg-neutral-800 focus:text-neutral-100">
                                                    Visualizar
                                                    <EyeIcon className="h-4 w-4 text-neutral-400" />
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-800 flex justify-between items-center focus:bg-neutral-800 focus:text-neutral-100">
                                                    Editar
                                                    <PencilIcon className="h-4 w-4 text-neutral-400" />
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator className="bg-neutral-800" />
                                                <DropdownMenuItem className="text-red-500 cursor-pointer hover:bg-red-900/50 hover:text-red-400 flex justify-between items-center focus:bg-red-950/30 focus:text-red-400">
                                                    Excluir
                                                    <Trash2Icon className="h-4 w-4" />
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    )}
                </TableBody>
            </Table>
        </div>
    )
}