import React from 'react';
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const BreadCrumb = ({ page1, page3, page2 }) => {
    return (
        <Breadcrumb className="font-bold">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${page1}`}>
                        {page1}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href={`/${page3}`}>
                        {page3}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href={`/${page2}`}>
                        {page2}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadCrumb;
