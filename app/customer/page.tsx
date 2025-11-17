'use client'

import { FooterRowsAndPages } from "./components/FooterRowsAndPages"
import { HeaderButtons } from "./components/HeaderButtons"

import { CustomerTable } from "./components/CustomerTable"


export default function CustomerPage() {
    return (

        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4">
            <HeaderButtons/>
                <CustomerTable/>
            <FooterRowsAndPages/>
        </div>
    )
}