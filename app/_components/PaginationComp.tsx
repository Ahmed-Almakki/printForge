'use client'
import { useRouter, usePathname } from "next/navigation";

interface ClientSidePaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

export default function PaginationComp({ itemsPerPage, totalItems, currentPage }: ClientSidePaginationProps){
    const router = useRouter();
    const pathname = usePathname();
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToPage = (page: number) => {
        router.push(`${pathname}?page=${page}`);
    };

    if (totalPages <= 1) return null;

    return (
        <div className="mt-12 mb-8 flex justify-center items-center gap-4">
            {/* ONLY Previous and Next buttons - no page numbers */}
            <button 
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-2 bg-amber-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-600 transition"
            >
                Previous
            </button>

            <span className="px-4 py-2 text-gray-700">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-2 bg-amber-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-600 transition"
            >
                Next
            </button>
        </div>
    );
}