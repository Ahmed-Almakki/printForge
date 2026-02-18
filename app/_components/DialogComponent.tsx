'use client'
import ThreeDModel from "@/app/_components/ThreeDModel";
import { BiLike, BiUser, BiTag, BiEnvelope, BiPhone, BiCalendar, BiCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatDistanceToNow } from 'date-fns';

export default function DialogComponenet({ product }: { product: any }) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) return null;
    
    // Format date if available
    const createdDate = product?.createdAt ? new Date(product.createdAt) : null;
    const timeAgo = createdDate ? formatDistanceToNow(createdDate, { addSuffix: true }) : '';
    
    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent 
                className="p-0 overflow-hidden bg-linear-to-br from-amber-50 to-orange-50"
                style={{
                    width: '95vw',
                    maxWidth: '1400px',
                    height: '90vh',
                    maxHeight: '1000px',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
            >
                <div className="flex flex-col h-full">
                    {/* Header with gradient background */}
                    <DialogHeader className="p-6 bg-linear-to-r from-amber-500 to-orange-500 text-white">
                        <DialogTitle className="text-3xl font-bold">{product?.title}</DialogTitle>
                        <DialogDescription className="text-amber-100 text-lg">
                            {product?.shortDescription}
                        </DialogDescription>
                    </DialogHeader>
                    
                    {/* Main content area with two columns */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                            {/* Left column - 3D Model */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                    3D Preview
                                </h3>
                                <div className="bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden h-100 lg:h-125">
                                    <ThreeDModel path={product?.product?.threeD_model} />
                                </div>
                            </div>
                            
                            {/* Right column - Details */}
                            <div className="space-y-6 overflow-y-auto pr-2">
                                {/* Creator Info Card */}
                                {product?.product?.user && (
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                                            <BiUser className="text-amber-500" />
                                            Creator
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            {product.product.user.image && (
                                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                                                    <Image 
                                                        src={product.product.user.image}
                                                        alt={product.product.user.name || 'Creator'}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-semibold text-lg">{product.product.user.name}</p>
                                                <div className="flex gap-3 mt-2">
                                                    {product.product.user.email && (
                                                        <a href={`mailto:${product.product.user.email}`} 
                                                           className="text-gray-600 hover:text-amber-500 transition-colors">
                                                            <BiEnvelope size={20} />
                                                        </a>
                                                    )}
                                                    {product.product.user.telephone && (
                                                        <a href={`tel:${product.product.user.telephone}`}
                                                           className="text-gray-600 hover:text-amber-500 transition-colors">
                                                            <BiPhone size={20} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Description Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                        <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                        Description
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{product?.description}</p>
                                </div>
                                
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-2 text-amber-500 mb-2">
                                            <BiLike size={24} />
                                            <span className="text-2xl font-bold text-gray-800">{product?.likes || 0}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Likes</p>
                                    </div>
                                    
                                    {product?.createdAt && (
                                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                            <div className="flex items-center gap-2 text-amber-500 mb-2">
                                                <BiCalendar size={24} />
                                                <span className="text-sm font-medium text-gray-800">{timeAgo}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">Posted</p>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Tags Section */}
                                {product?.tags && product.tags.length > 0 && (
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                                            <BiTag className="text-amber-500" />
                                            Tags
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {product.tags.map((tag: any) => (
                                                <span 
                                                    key={tag.id}
                                                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors cursor-pointer"
                                                >
                                                    #{tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Category & Dimensions */}
                                {(product?.product?.category || product?.product?.width) && (
                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                        <div className="grid grid-cols-2 gap-4">
                                            {product?.product?.category && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">Category</p>
                                                    <p className="font-semibold text-gray-800 flex items-center gap-1">
                                                        <BiCategory className="text-amber-500" />
                                                        {product.product.category.name}
                                                    </p>
                                                </div>
                                            )}
                                            {product?.product?.width && product?.product?.height && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">Dimensions</p>
                                                    <p className="font-semibold text-gray-800">
                                                        {product.product.width} x {product.product.height} px
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}