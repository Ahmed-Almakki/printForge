export default function CardSkeleton() {
    return(

        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        {/* Image Skeleton */}
        <div className="h-48 bg-gray-200" />

        {/* Content Skeleton */}
        <div className="px-6 py-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-6 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Tags Skeleton */}
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block h-6 w-16 bg-gray-200 rounded-full mr-2" />
            <span className="inline-block h-6 w-16 bg-gray-200 rounded-full" />
        </div>
    </div>
    )
}