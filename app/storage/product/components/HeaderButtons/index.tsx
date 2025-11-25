import { Input } from "@/components/ui/input"
import Link from "next/link"

import {
    UploadIcon,
    ChevronDownIcon,
    FilterIcon,
    SearchIcon,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function HeaderButtons() {
    return (

        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <Input
                        placeholder="Pesquisar"
                        className="w-full md:w-[300px] bg-neutral-900 border-neutral-700 pl-10"
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
                        <DropdownMenuItem>Excluir selecionados</DropdownMenuItem>
                        <DropdownMenuItem>Exportar selecionados</DropdownMenuItem>
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
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold">
                    <Link href="/storage/product/create-product">
                        Criar novo produto
                    </Link>
                </Button>
            </div>
        </header>
    )
}