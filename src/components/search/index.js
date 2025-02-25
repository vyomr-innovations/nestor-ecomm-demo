import React from 'react'
import { Input } from "@/components/ui/input"
import { Link, Search, ShoppingBag, UserCheck2Icon } from 'lucide-react'

function Searchbar() {
    return (
        <>
            <div className='flex fixed top-6 right-10 mr-2'>
                <Input type="search" id="search" placeholder="Search for Products..."
                    className="flex text-black w-60 h-8 border-input p-3 shadow-xs rounded-md border bg-white" />
                <div className='flex top-7 right-24 fixed pr-7 cursor-pointer' >
                    <Search />
                </div>
                <div className='flex top-8 m-auto pr-2 cursor-pointer'>
                    <ShoppingBag />
                </div>
                <div className='flex top-8 m-auto pr-3 cursor-pointer'>
                    <UserCheck2Icon />
                </div>
            </div>
        </>
    )
}
export default Searchbar
