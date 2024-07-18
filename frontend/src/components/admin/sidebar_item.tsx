"use client";

import { usePathname } from "next/navigation";
import { TSidebarItem } from "./admin_sidebar";

export default function SideBarItem({title, href} : TSidebarItem) {

    const pathName = usePathname();

    const isActive = pathName == href;

    return <a 
        href={href}
        className={`p-2 my-2 pl-3 text-slate-500 w-full hover:bg-purple-200 hover:text-purple-700 rounded-xl ${isActive ? "bg-purple-200 text-purple-700" : ""}`} >
        <p>{title}</p>
    </a>
}
