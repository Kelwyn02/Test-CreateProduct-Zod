'use client'

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeaderButtons } from "../components/HeaderButtons"
import { CreateCustomerForm, CustomerFormValues } from "../all-customer/create-customer/components/CreateCustomerForm"
import { useParams } from "next/navigation"

export default function EditCustomerPage() {
    const params = useParams();

    const customerId = params.id as string;

    const [customerData, setCustomerData] = useState<(CustomerFormValues & { id: string }) | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                if (!customerId) return;

                const response = await fetch(`http://localhost:3001/customers/${customerId}`);

                if (!response.ok) {
                    throw new Error("Cliente não encontrado");
                }

                const rawData = await response.json();

                const formattedData = {
                    ...rawData,
                    customerBirthdate: rawData.customerBirthdate ? new Date(rawData.customerBirthdate) : undefined,
                    customerDisableAutoGroup: Boolean(rawData.customerDisableAutoGroup),
                };

                setCustomerData(formattedData);

            } catch (error) {
                console.error("Erro ao buscar cliente", error);
            } finally {
                setLoading(false);
            }
        };

        if (customerId) {
            fetchCustomer();
        }
    }, [customerId]);

    if (loading) {
        return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-neutral-400">Carregando dados...</div>
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4">

            <HeaderButtons hideCreateButton={true} />

            <Tabs defaultValue="account" orientation="vertical">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4 md:max-w-[280px] space-y-4">
                        <h2 className="text-xl font-semibold px-3">
                            Editando: {customerData?.customerFirstName}
                        </h2>
                        <TabsList className="flex flex-col w-full h-auto p-2 bg-neutral-900 rounded-lg space-y-1">
                            <TabsTrigger
                                value="account"
                                className="w-full justify-start p-3 data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-100 data-[state=inactive]:text-neutral-400 rounded-md text-left"
                            >
                                Informações da conta
                            </TabsTrigger>
                        </TabsList>
                    </aside>

                    <main className="flex-1">
                        <TabsContent
                            value="account"
                            className="bg-neutral-900 p-6 rounded-lg m-0"
                        >
                            <h2 className="text-xl font-semibold text-neutral-100 mb-6">
                                Informações da conta
                            </h2>

                            {customerData && (
                                <CreateCustomerForm initialData={customerData} /> //lembrete para trocar o botão de baixo e colocar no header
                            )}
                        </TabsContent>
                    </main>
                </div>
            </Tabs>
        </div>
    );
}