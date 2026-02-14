'use client';
import Link from "next/link"
import { usePathname } from 'next/navigation';

interface Category {
    id: number;
    name: string;
}

interface CategoryCompProps {
    categories: Category[];
}

export default function CategoryComp({ categories }: CategoryCompProps) {
    const pathname = usePathname();

    // Function to create URL-safe slug
    const createSlug = (name: string) => {
        return encodeURIComponent(
            name.toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/&/g, 'and') // Replace & with 'and'
                .replace(/[^\w-]+/g, '') // Remove other special chars
        );
    };

    // Function to check if path is active
    const isActive = (path: string) => {
        // Decode both for comparison
        const decodedPathname = decodeURIComponent(pathname);
        const decodedPath = decodeURIComponent(path);
        return decodedPathname === decodedPath ? 'text-amber-800 border-b pb-2 border-b-amber-800 ' : '';
    };

    return (
        <>
            <p className={isActive('/models')}>
                <Link href="/models">All</Link>
            </p>
            {categories.map(category => {
                const slug = createSlug(category.name);
                const href = `/models/${slug}`;
                
                return (
                    <p key={category.id} className={isActive(href)}>
                        <Link href={href}>
                            {category.name} {/* Display original name */}
                        </Link>
                    </p>
                );
            })}
        </>
    );
}