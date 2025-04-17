'use client'

import { BarChart, Briefcase, LucideIcon } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation"; // If using Next.js

// Define types for our navigation items
type NavItem = {
    title: string;
    href: string;
    icon: LucideIcon;
};

// Define types for our navigation groups
type NavGroup = {
    title: string;
    items: NavItem[];
};

// Define our navigation structure
const navigation: NavGroup[] = [
    {
        title: "Services",
        items: [
            {
                title: "Match Analytics",
                href: "/match",
                icon: BarChart,
            },
            {
                title: "Jobs",
                href: "/jobs",
                icon: Briefcase,
            },
        ],
    },
];

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarContent>
                {navigation.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.href}
                                        >
                                            <a href={item.href}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}