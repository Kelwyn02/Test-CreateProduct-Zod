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
import { Button } from "@/components/ui/button"
import {
    MoreHorizontal,
    CheckCircle2,
    XCircle,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Product } from "../../page"

interface ProductTableProps {
    products: Product[];
    loading: boolean;
    selectedIds: string[];
    isAllSelected: boolean;
    onSelectOne: (id: string) => void;
    onSelectAll: () => void;
}

export function ProductTable({
    products,
    loading,
    selectedIds,
    isAllSelected,
    onSelectOne,
    onSelectAll
}: ProductTableProps) {

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    if (loading) {
        return <div className="p-8 text-center text-neutral-500">Carregando produtos...</div>;
    }

    if (products.length === 0) {
        return <div className="p-8 text-center text-neutral-500">Nenhum produto encontrado.</div>;
    }

    return (
        <Table>
            <TableHeader className="bg-neutral-950">
                <TableRow className="hover:bg-neutral-950 border-neutral-800">
                    <TableHead className="w-[50px]">
                        <Checkbox
                            checked={isAllSelected}
                            onCheckedChange={onSelectAll}
                            aria-label="Selecionar tudo"
                            className="border-neutral-600 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600"
                        />
                    </TableHead>
                    <TableHead className="text-neutral-400 font-medium">Nome</TableHead>
                    <TableHead className="text-neutral-400 font-medium">SKU</TableHead>
                    <TableHead className="text-neutral-400 font-medium">Preço</TableHead>
                    <TableHead className="text-neutral-400 font-medium">Status</TableHead>
                    <TableHead className="text-neutral-400 font-medium text-right">Qtd.</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => {
                    const isSelected = selectedIds.includes(product.id);
                    return (
                        <TableRow
                            key={product.id}
                            className="border-neutral-800 hover:bg-neutral-800/50 data-[state=selected]:bg-neutral-800/80 transition-colors"
                            data-state={isSelected ? "selected" : undefined}
                        >
                            <TableCell>
                                <Checkbox
                                    checked={isSelected}
                                    onCheckedChange={() => onSelectOne(product.id)}
                                    aria-label={`Selecionar ${product.productInfoName}`}
                                    className="border-neutral-600 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600"
                                />
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium text-neutral-200">{product.productInfoName}</span>
                                    <span className="text-xs text-neutral-500">{product.productInfoCategory}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-neutral-400 text-sm font-mono">
                                {product.productInfoCode || "-"}
                            </TableCell>
                            <TableCell className="font-medium text-neutral-200">
                                {formatCurrency(product.productInfoPrice)}
                            </TableCell>
                            <TableCell>
                                {product.productInfoStockStatus === 'in_stock' ? (
                                    <Badge variant="outline" className="bg-emerald-950/30 text-emerald-400 border-emerald-900/50 rounded-md px-2 py-1 flex items-center w-fit gap-1.5 font-normal">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Em Estoque
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="bg-red-950/30 text-red-400 border-red-900/50 rounded-md px-2 py-1 flex items-center w-fit gap-1.5 font-normal">
                                        <XCircle className="w-3.5 h-3.5" />
                                        Sem Estoque
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell className="text-right text-neutral-300">
                                {product.productInfoQuantity}
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-neutral-800 text-neutral-400 hover:text-white">
                                            <span className="sr-only">Abrir menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="bg-neutral-900 border-neutral-800 text-neutral-200">
                                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                        <DropdownMenuItem className="focus:bg-neutral-800 cursor-pointer">
                                            Editar
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-neutral-800" />
                                        <DropdownMenuItem className="focus:bg-red-950/30 text-red-400 focus:text-red-300 cursor-pointer">
                                            Excluir
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}