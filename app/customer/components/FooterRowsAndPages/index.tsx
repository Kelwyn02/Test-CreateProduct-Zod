import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FooterRowsAndPages() {
    return (
        <footer className="flex justify-between items-center mt-6">
            <div className="text-sm text-neutral-500">
                0 de 68 linhas(s) selecionadas.
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <Label htmlFor="rows-per-page" className="text-sm text-neutral-400">Linhas por página</Label>
                    <Select defaultValue="10">
                        <SelectTrigger id="rows-per-page" className="w-[70px] bg-neutral-900 border-neutral-700">
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
                    <span className="text-sm text-neutral-400">Página 1 de 7</span>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800">
                            <ChevronsLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800">
                            <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800">
                            <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-neutral-900 border-neutral-700 hover:bg-neutral-800">
                            <ChevronsRightIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}