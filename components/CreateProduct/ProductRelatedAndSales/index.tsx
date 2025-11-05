import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function ProductRelatedAndSales() {
    return (


        <Accordion type="single" collapsible className="w-full m-4 pr-8">
            <AccordionItem value="display" className="bg-neutral-900 rounded-lg border-none">
                <AccordionTrigger className="p-4 items-center text-lg text-neutral-100 font-bold hover:no-underline rounded-sm">
                    Produtos relacionados, vendas adicionais e vendas cruzadas
                </AccordionTrigger>
                <AccordionContent className="p-4">
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div className="max-w-xl">
                                <h3 className="text-neutral-100 font-semibold">Produtos relacionados</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Os produtos relacionados são apresentados aos clientes, além do item que o cliente está a ver.
                                </p>
                            </div>
                            <Button
                                variant="default"
                                className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                            >
                                Adicionar produto relacionado
                            </Button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div className="max-w-xl">
                                <h3 className="text-neutral-100 font-semibold">Vendas adicionais</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Um item de up-sell é oferecido ao cliente como uma alternativa mais cara ou de maior
                                    qualidade ao produto que o cliente está a ver.
                                </p>
                            </div>
                            <Button
                                variant="default"
                                className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                            >
                                Adicionar venda adicional
                            </Button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div className="max-w-xl">
                                <h3 className="text-neutral-100 font-semibold">Vendas cruzadas</h3>
                                <p className="text-sm text-neutral-400 mt-1">
                                    Esses produtos de &quot;compra por impulso&quot; aparecem ao lado do carrinho de compras como
                                    vendas cruzadas dos itens já presentes no carrinho.
                                </p>
                            </div>
                            <Button
                                variant="default"
                                className="bg-cyan-600 hover:bg-cyan-700 text-neutral-100 font-semibold"
                            >
                                Adicionar venda cruzada
                            </Button>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}