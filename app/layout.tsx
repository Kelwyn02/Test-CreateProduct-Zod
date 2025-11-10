import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { PageBreadcrumb } from "@/components/Breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Teste create-product",
  description: "Criar produto teste",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`dark ${inter} antialiased`}>

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

                  <PageBreadcrumb />

                </div>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="min-h-screen flex-1 rounded-sm md:min-h-min">
                {children}
              </div>
            </div>

          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
