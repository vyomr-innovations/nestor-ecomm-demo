import React from "react";
import { Input } from "@/components/ui/input";
import { Link, Search, ShoppingBag, UserCheck2Icon } from "lucide-react";

function Searchbar() {
  return (
    <>
      <div className="flex gap-4 ml-100">
        <div className="relative">
          <Input
            type="search"
            id="search"
            placeholder="Search for Products..."
            className="flex text-black w-60 h-8 border-input p-3 shadow-xs rounded-md border bg-white"
          />
          <Search className="absolute top-1.5 right-2 w-5 h-5" />
        </div>
        <div className="gap-1 flex">
          <div className="flex top-8 m-auto pr-2 cursor-pointer">
            <ShoppingBag />
          </div>
          <div className="flex top-8 m-auto pr-3 cursor-pointer">
            <UserCheck2Icon />
          </div>
        </div>
      </div>
    </>
  );
}
export default Searchbar;
