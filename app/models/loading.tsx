import CardSkeleton from "../_components/CardSkeleton"

export default function Loading() {
    return(
        <>
            <h2 className="-mt-15 mb-8 text-4xl font-bold">3D Model</h2>
            <div className="grid grid-cols-4 gap-5 flex-1">
                {Array.from({length: 8}).map((_, index) => (
                    <CardSkeleton key={index} />
                )
                )}
            </div>
        </>
    )
}