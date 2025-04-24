'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, User2Icon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Searchbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim()) {
            const formattedTerm = searchTerm.trim().charAt(0).toUpperCase() + searchTerm.trim().slice(1).toLowerCase();
            router.push(`/categories/${formattedTerm}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Search
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleSearch}
                />
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <Link href="/cart">
                    <ShoppingBag className="cursor-pointer hover:text-gray-500" />
                </Link>
                <Link href="/userlogin">
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
