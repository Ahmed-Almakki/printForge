import Image from "next/image"
import { IoMdHeartEmpty } from "react-icons/io";

interface cardProps {
    product: any
}

export default function cardPage({ product }: cardProps) {
    return(
        <>
           <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-1.25 hover:cursor-pointer hover:shadow-2xl transition-transform duration-300">
                <Image className="w-full" src={`/uploads/${product?.product?.url}`} width={product?.product?.width} height={product?.product?.height} alt="Sunset in the mountains" />
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">{product?.title}</div>
                    <p className="text-gray-700 text-base">
                        {product?.shortDescription}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <IoMdHeartEmpty className="inline-block text-2xl text-gray-500" />
                    <span className="ml-2 text-gray-500">{product?.likes}</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {product?.tags.map((tag: any) => (
                        <span key={tag.id} className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#{tag.name}</span>
                    ))}
                </div>
            </div>
        </>
    )
}