'use client'

import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeaderButtons } from "./components/HeaderButtons"
import { CreateCustomerForm } from "./components/CreateCustomerForm"


export default function CustomerAccountPage() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4">

            <HeaderButtons />

            <Tabs defaultValue="account" orientation="vertical">

                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4 md:max-w-[280px] space-y-4">
                        <h2 className="text-xl font-semibold px-3">Informações do cliente</h2>
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

                            <CreateCustomerForm date={date} setDate={setDate} />

                        </TabsContent>
                    </main>
                </div>
            </Tabs>
        </div>
    );
}