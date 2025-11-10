"use client"

import * as React from "react"
import {
  AngryIcon,
  AnnoyedIcon,
  BookUserIcon,
  BoxIcon,
  DollarSignIcon,
  FileWarningIcon,
  LayoutDashboardIcon,
  MegaphoneIcon,
  SmileIcon,
} from "lucide-react"

import { NavMain } from "@/components/Sidebar/nav-main"
import { NavUser } from "@/components/Sidebar/nav-user"
import { TeamSwitcher } from "@/components/Sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Exemplo",
    email: "exemplo@email.com",
    avatar: "/avatars/chad.jpg",
  },

  teams: [
    {
      name: "Happy Inc",
      logo: SmileIcon,
      plan: "Enterprise",
    },
    {
      name: "Annoyed Inc.",
      logo: AnnoyedIcon,
      plan: "Startup",
    },
    {
      name: "Angry Inc.",
      logo: AngryIcon,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
      items: [
        {
          title: "Vendas",
          url: "#",
        },
        {
          title: "Estoque",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
        {
          title: "Marketing",
          url: "#",
        },
      ],
    },

    {
      title: "Vendas",
      url: "#",
      icon: DollarSignIcon,
      items: [
        {
          title: "Pedidos ativos",
          url: "#",
        },
        {
          title: "Faturamento",
          url: "#",
        },
        {
          title: "Expedição",
          url: "#",
        },
        {
          title: "Notas de crédito",
          url: "#",
        },
        {
          title: "Retornos",
          url: "#",
        },
        {
          title: "Transações",
          url: "#",
        },
      ],
    },
    {
      title: "Estoque",
      url: "#",
      icon: BoxIcon,
      items: [
        {
          title: "Produtos",
          url: "/storage/product/create-product",
        },
        {
          title: "Categorias",
          url: "#",
        },
      ],
    },

    {
      title: "Clientes",
      url: "#",
      icon: BookUserIcon,
      items: [
        {
          title: "Todos os clientes",
          url: "/customer/create-customer",
        },
        {
          title: "Online agora",
          url: "#",
        },
        {
          title: "Segmentos",
          url: "#",
        },
        {
          title: "Grupos de clientes",
          url: "#",
        },
      ],
    },


    {
      title: "Marketing",
      url: "#",
      icon: MegaphoneIcon,
      items: [
        {
          title: "Promoções",
          url: "#",
        },
        {
          title: "Comunicações",
          url: "#",
        },
        {
          title: "Conteúdo do usuário",
          url: "#",
        },
        {
          title: "Procura e SEO",
          url: "#",
        },
        {
          title: "Vendas privadas",
          url: "#",
        },
      ],
    },

    {
      title: "Relatórios",
      url: "#",
      icon: FileWarningIcon,
      items: [
        {
          title: "Marketing",
          url: "#",
        },
        {
          title: "Análises",
          url: "#",
        },
        {
          title: "Vendas",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
        {
          title: "Produtos",
          url: "#",
        },
        {
          title: "Vendas privadas",
          url: "#",
        },
        {
          title: "Estatísticas",
          url: "#",
        },
        {
          title: "Engajamento do cliente",
          url: "#",
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
