export default function CardSkeleton() {
    return(
        <div className="w-full max-w-sm rounded overflow-hidden shadow-lg animate-pulse space-x-3.5">
            {/* Image Skeleton - Add aspect ratio */}
            <div className="h-48 bg-gray-500 w-full" />

            {/* Content Skeleton */}
            <div className="px-6 py-4 space-y-3">
                <div className="h-6 bg-gray-500 rounded w-3/4" />
                <div className="h-4 bg-gray-500 rounded w-full" />
                <div className="h-4 bg-gray-500 rounded w-5/6" />
            </div>

            {/* Tags Skeleton */}
            <div className="px-6 pt-4 pb-2 flex gap-2">
                <div className="h-6 w-16 bg-gray-500 rounded-full" />
                <div className="h-6 w-16 bg-gray-500 rounded-full" />
            </div>
        </div>
    );
}