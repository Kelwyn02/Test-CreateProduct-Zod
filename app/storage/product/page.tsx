'use client'

import { useEffect, useState } from "react"
import {
    ChevronDownIcon,
    FilterIcon,
    SearchIcon,
    UploadIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
    PlusIcon,
    MoreHorizontal,
    CheckCircle2,
    XCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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


export interface Product {
    id: string;
    productInfoName: string;
    productInfoCategory: string;
    productInfoCode: string;
    productInfoPrice: number;
    productInfoStockStatus: string;
    productInfoQuantity: number;
}

interface ProductTableProps {
    products: Product[];
    loading: boolean;
    selectedIds: string[];
    isAllSelected: boolean;
    onSelectOne: (id: string) => void;
    onSelectAll: () => void;
}

function ProductTable({
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

export default function ProductHome() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("http://localhost:3001/products");
                if (!response.ok) throw new Error("Erro ao buscar");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Erro:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const toggleSelectOne = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === products.length && products.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(products.map((p) => p.id));
        }
    };

    const isAllSelected = products.length > 0 && selectedIds.length === products.length;

    const handleDeleteSelected = async () => {
        if (!confirm(`Deseja excluir ${selectedIds.length} produtos?`)) return;

        console.log("Deletando:", selectedIds);

        setProducts(prev => prev.filter(p => !selectedIds.includes(p.id)));
        setSelectedIds([]);
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8 font-sans">

            <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                        <Input
                            placeholder="Pesquisar"
                            className="w-full md:w-[300px] bg-neutral-900 border-neutral-700 pl-10 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-cyan-600"
                        />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                                Ações
                                <ChevronDownIcon className="h-4 w-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-neutral-900 border-neutral-700 text-neutral-100">
                            <DropdownMenuItem
                                className="text-red-400 focus:text-red-300 focus:bg-red-950/30 cursor-pointer"
                                onClick={handleDeleteSelected}
                                disabled={selectedIds.length === 0}
                            >
                                Excluir selecionados ({selectedIds.length})
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-neutral-800 cursor-pointer">
                                Exportar selecionados
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                        <FilterIcon className="h-4 w-4 mr-2" />
                        Filtrar
                    </Button>
                    <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                        <UploadIcon className="h-4 w-4 mr-2" />
                        Exportar CSV
                    </Button>

                    <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold cursor-pointer border-none">
                        <a href="/storage/product/create-product" className="flex items-center">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Criar novo produto
                        </a>
                    </Button>
                </div>
            </header>

            <div className="rounded-sm border border-neutral-800 bg-neutral-900 overflow-hidden">
                <ProductTable
                    products={products}
                    loading={loading}
                    selectedIds={selectedIds}
                    isAllSelected={isAllSelected}
                    onSelectOne={toggleSelectOne}
                    onSelectAll={toggleSelectAll}
                />
            </div>

            <footer className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <div className="text-sm text-neutral-500">
                    {selectedIds.length} de {products.length} linha(s) selecionada(s).
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="rows-per-page" className="text-sm text-neutral-400">Linhas por página</Label>
                        <Select defaultValue="10">
                            <SelectTrigger id="rows-per-page" className="w-[70px] bg-neutral-900 border-neutral-700 text-neutral-100">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border-neutral-700 text-neutral-100">
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="25">25</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-neutral-400">Página 1 de 1</span>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 text-neutral-400">
                                <ChevronsLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 text-neutral-400">
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 text-neutral-400">
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 text-neutral-400">
                                <ChevronsRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}