'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { routeMap } from './routeMap'

export function PageBreadcrumb() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(item => item !== '')

    return (
        <Breadcrumb className="mb-4">
            <BreadcrumbList>

                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>

                {segments.length > 0 && <BreadcrumbSeparator className="hidden md:block" />}

                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1
                    const isFirst = index === 0
                    const href = `/${segments.slice(0, index + 1).join('/')}`
                    const translatedName = routeMap[segment] ||
                        segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                    const isNotClickable = isLast || isFirst

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbItem className="hidden md:block">
                                {isNotClickable ? (
                                    <BreadcrumbPage className={isFirst ? "font-medium opacity-100" : ""}>
                                        {translatedName}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>
                                        {translatedName}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}