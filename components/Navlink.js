'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navlink({ title, url }) {
    const currentPath = usePathname();
    // Check if current path starts with the link's url (for sub-routes)
    const isActive = currentPath === url || currentPath.startsWith(`${url}/`);
    
    return (
        <Link 
            href={url}
            className={`hover:text-blue-600 transition-colors duration-200 ${
                isActive 
                    ? "text-blue-600 font-medium border-b-2 border-blue-600" 
                    : "text-gray-600"
            }`}
        >
            {title}
        </Link>
    );
}