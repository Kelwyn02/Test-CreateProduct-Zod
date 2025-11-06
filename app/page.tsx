import { AppSidebar } from "@/components/Sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Undo2Icon } from "lucide-react"

import { ProductInfo } from "@/components/CreateProduct/ProductInfo"
import { ProductContent } from "@/components/CreateProduct/ProductContent"
import { ProductConfig } from "@/components/CreateProduct/ProductConfig"
import { ProductImageAndVideo } from "@/components/CreateProduct/ProductImageAndVideo"
import { ProductSEO } from "@/components/CreateProduct/ProductSEO"
import { ProductRelatedAndSales } from "@/components/CreateProduct/ProductRelatedAndSales"
import { ProductCustomOptions } from "@/components/CreateProduct/ProductCustomOptions"
import { ProductOnWebsites } from "@/components/CreateProduct/ProductOnWebsites"
import { ProductDesign } from "@/components/CreateProduct/ProductDesign"
import { ProductGiftOptions } from "@/components/CreateProduct/ProductGiftOptions"
import { ProductAttribute } from "@/components/CreateProduct/ProductAttribute"
import { ProductDownload } from "@/components/CreateProduct/ProductDownload"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Estoque
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbPage>Produtos</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Novo produto</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ul className="flex justify-end gap-2 m-4">
              <li>
                <Button className="bg-neutral-800 text-neutral-100 hover:bg-neutral-900">
                  <Undo2Icon />
                  Voltar
                </Button>
              </li>
              <li>
                <Button className="bg-neutral-800 text-neutral-100 hover:bg-neutral-900">
                  Adicionar Atributo
                </Button>
              </li>
              <li>
                <Button className="bg-cyan-600 text-neutral-100 hover:bg-cyan-700">
                  Salvar
                </Button>
              </li>
            </ul>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-screen flex-1 rounded-sm md:min-h-min">
            <ProductInfo />
            <ProductContent />
            <ProductConfig />
            <ProductImageAndVideo />
            <ProductSEO />
            <ProductRelatedAndSales />
            <ProductCustomOptions />
            <ProductOnWebsites />
            <ProductDesign />
            <ProductGiftOptions />
            <ProductAttribute />
            <ProductDownload/>
          </div>
        </div>

      </SidebarInset>
    </SidebarProvider>
  )
}
