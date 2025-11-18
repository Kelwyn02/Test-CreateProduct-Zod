import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, RefreshCwIcon } from "lucide-react";
import Link from "next/link";

export function HeaderButtons() {
    return (
        <header className="flex justify-end items-center gap-4 mb-6">

            <Button asChild variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                <Link href="/customer/all-customer">
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Voltar
                </Link>
            </Button>

            <Button variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 bg-neutral-900">
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Reiniciar
            </Button>

            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
                Salvar
            </Button>
        </header>
    )
}