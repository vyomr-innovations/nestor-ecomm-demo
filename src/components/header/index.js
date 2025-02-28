"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Searchbar from "../search";

const components = [
    {
        title: "Home",
        href: "/Home"
    },
    {
        title: "Apperal",
        href: "/categories"
    },
    {
        title: "Accessories",
        href: "#"
    },
    {
        title: "Digital",
        href: "#"
    }
];
export default function Header() {
    return (
        <header>
            <nav className="w-full fixed h-16 bg-white shadow-md p-4 flex justify-between items-center z-50">
                <div className="flex fixed flex-col p-5 m-auto">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="flex items-center justify-between w-full relative">
                                <h2 className="font-bold text-lg">InfinityGadgets</h2>
                                {components.map((component, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={component.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={cn(
                                                    "ml-5 hover:bg-gray-100 transition-all font-base  px-4 py-2 rounded-md",
                                                    window.location.pathname == component.href &&
                                                    "bg-gray-100"
                                                )}
                                            >
                                                {component.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    );
                                })}
                                <NavigationMenuLink>
                                    <Searchbar />
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </nav>
        </header>
    );
}
const ListItem = ({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                {/* <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a> */}
            </NavigationMenuLink>
        </li>
    );
};
ListItem.displayName = "ListItem";
