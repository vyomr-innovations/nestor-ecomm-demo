"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Searchbar from "../search";

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link."
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content."
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
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
                                <NavigationMenuLink>
                                    <Link href="/" className="inline-block text-xl font-bold">
                                        InfinityGadgets
                                    </Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink className="ml-5">
                                    <Link
                                        href="/Home"
                                        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink>
                                    <Link
                                        href="/Apparel"
                                        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent "
                                    >
                                        Apparel
                                    </Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink>
                                    <Link
                                        href="/Accessories"
                                        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                                    >
                                        Accessories
                                    </Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink>
                                    <Link
                                        href="/Digital"
                                        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                                    >
                                        Digital
                                    </Link>
                                </NavigationMenuLink>

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
                <a
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
                </a>
            </NavigationMenuLink>
        </li>
    );
};
ListItem.displayName = "ListItem";
