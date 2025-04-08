"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, User2Icon } from 'lucide-react';
import Link from 'next/link';

function Searchbar() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <header className="fixed top-4 right-5 flex items-center gap-4 sm:gap-6 z-50">
            <div className="relative hidden md:flex">
                <Input
                    type="search"
                    id="search"
                    placeholder="Search for Products..."
                    className="text-black w-60 md:w-72 lg:w-80 h-9 border-input p-3 shadow-xs rounded-md border bg-white"
                />
                <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer" />
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <Link href="/cart">
                    <ShoppingBag className="cursor-pointer hover:text-gray-500" />
                </Link>
                <Link href="/login">
                    <User2Icon className="cursor-pointer hover:text-gray-500" />
                </Link>
            </div>

            <div className="md:hidden">
                <Search className="cursor-pointer text-xl" />
            </div>
        </header>
    );
}

export default Searchbar;
