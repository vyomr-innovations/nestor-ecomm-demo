"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
        href: "/"
    },
    {
        title: "Apparel",
        href: "/categories/Apparel"
    },
    {
        title: "Accessories",
        href: "/categories/Accessories"
    },
    {
        title: "Digital",
        href: "/categories/Digital"
    }
];

export default function Header() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <header>
            <nav className="w-full fixed h-16 bg-white shadow-md p-4 flex justify-between items-center z-50">
                <div className="flex fixed flex-col p-5 m-auto">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <div className="flex items-center justify-between w-full relative">
                                {/* Logo and Title */}
                                <Link href="/" className="flex items-center space-x-2">
                                    <Image src="https://adn.nestortech.io/api/va/67a06a45ea8a39c6628c71c3/nestorlogo/dev/generic" alt="Logo" className="object-contain" width={40} height={40} />
                                    <h2 className="font-bold text-lg">InfinityGadgets</h2>
                                </Link>

                                {/* Navigation Items */}
                                {components.map((component, index) => (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            href={component.href}
                                            className={cn(
                                                "ml-5 hover:bg-gray-100 transition-all font-base px-4 py-2 rounded-md"
                                            )}
                                        >
                                            {component.title}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}

                                {/* Searchbar */}
                                <div className="ml-5">
                                    <Searchbar />
                                </div>
                            </div>
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
            <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <NavigationMenuLink asChild>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </NavigationMenuLink>
            </a>
        </li>
    );
};
ListItem.displayName = "ListItem";
