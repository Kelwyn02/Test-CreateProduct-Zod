'use client'

import * as React from "react"

import { FooterRowsAndPages } from "../components/FooterRowsAndPages"
import { HeaderButtons } from "../components/HeaderButtons"

import { CustomerTable, Customer } from "../components/CustomerTable"

export default function CustomerPage() {
    const [customers, setCustomers] = React.useState<Customer[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [selectedIds, setSelectedIds] = React.useState<string[]>([])

    React.useEffect(() => {
        async function fetchCustomers() {
            try {
                const response = await fetch('http://localhost:3001/customers')
                if (!response.ok) throw new Error('Erro ao buscar clientes')
                const data = await response.json()
                setCustomers(data)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCustomers()
    }, [])

    const toggleSelectOne = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === customers.length && customers.length > 0) {
            setSelectedIds([]);
        } else {
            setSelectedIds(customers.map((c) => c.id));
        }
    };

    const isAllSelected = customers.length > 0 && selectedIds.length === customers.length;

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4 font-sans">

            <HeaderButtons />

            <CustomerTable
                customers={customers}
                loading={isLoading}
                selectedIds={selectedIds}
                isAllSelected={isAllSelected}
                onSelectOne={toggleSelectOne}
                onSelectAll={toggleSelectAll}
            />

            <FooterRowsAndPages />

        </div>
    )
}