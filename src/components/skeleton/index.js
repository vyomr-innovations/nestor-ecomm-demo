import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
    return (
        <div className="flex justify-between">
            <div className="p-1">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[600px] w-[600px] rounded-xl" />
                </div>
            </div>
            <div className="p-1">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[600px] w-[550px] rounded-xl flex flex-col items-start space-y-2">
                        <div className="m-4 p-1">
                            <h1 className="h-12 w-[300px] bg-gray-300 rounded"></h1>
                            <h2 className="h-8 w-[150px] bg-gray-300 rounded mt-1"></h2>
                        </div>
                        <p className="h-32 w-[520px] bg-gray-300 rounded m-4"></p>
                        <button className="h-12 w-[500px] bg-gray-300 rounded-full m-4"></button>
                    </Skeleton>
                </div>
            </div>


        </div>
    );
}
