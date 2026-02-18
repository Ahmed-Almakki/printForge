'use client'
import ThreeDModel from "@/app/_components/ThreeDModel";
import { 
  BiLike, BiUser, BiTag, BiEnvelope, BiPhone, BiCalendar, BiCategory,
  BiDownload, BiShow, BiCog, BiTime, BiCube, BiStar
} from "react-icons/bi";
import { TbLicense } from "react-icons/tb";
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

    console.log('the product in dialog component is ', product);
    
    useEffect(() => {
        setMounted(true);
    
        // Track view when dialog opens - but only once per session
        if (product?.id) {
            // Check localStorage to prevent double-counting
            const viewedKey = `viewed_${product.id}`;
            const hasViewed = sessionStorage.getItem(viewedKey);
        
            if (!hasViewed) {
                fetch(`/api/products/${product.id}/view`, {
                    method: 'POST'
                }).catch(console.error);
            
                // Mark as viewed in this session
                sessionStorage.setItem(viewedKey, 'true');
            }
        }
    }, [product]); // Only runs when product changes
    
    if (!mounted) return null;
    
    const createdDate = product?.createdAt ? new Date(product.createdAt) : null;
    const timeAgo = createdDate ? formatDistanceToNow(createdDate, { addSuffix: true }) : '';
    
    // Handle download
    const handleDownload = async () => {
        if (!product?.id) return;
        
        try {
            // Track download
            await fetch(`/api/products/${product.id}/download`, {
                method: 'POST'
            });
            
            // Trigger actual download (you'll need to implement this)
            // Create a hidden anchor tag for better download control
            const link = document.createElement('a');
            link.href = `/threeDmodel/${product.product.threeD_model}`;
            link.download = product.product.threeD_model.split('/').pop() || 'model.glb'; // Suggests download filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        } catch (error) {
            console.error('Download tracking failed:', error);
        }
    };
    
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
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Header */}
                    <DialogHeader className="p-6 bg-linear-to-r from-amber-500 to-orange-500 text-white lex-shrink-0">
                        <div className="flex justify-between items-start">
                            <div>
                                <DialogTitle className="text-3xl font-bold">{product?.title}</DialogTitle>
                                <DialogDescription className="text-amber-100 text-lg">
                                    {product?.shortDescription}
                                </DialogDescription>
                            </div>
                            
                            {/* Rating Badge */}
                            {product?.rating ? (
                                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                                    <BiStar className="text-yellow-300" />
                                    <span className="font-bold">{product.rating.toFixed(1)}</span>
                                    <span className="text-sm">({product.reviewCount || 0})</span>
                                </div>
                            ) : null}
                        </div>
                    </DialogHeader>
                    
                    {/* Main Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left Column - 3D Model */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                    3D Preview
                                </h3>
                                <div className="bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden h-100 lg:h-125">
                                    <ThreeDModel path={product?.product?.threeD_model} />
                                </div>
                                
                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                        <BiShow className="mx-auto text-amber-500 text-xl" />
                                        <p className="text-sm text-gray-600">Views</p>
                                        <p className="font-bold">{product?.viewCount || 0}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                        <BiDownload className="mx-auto text-amber-500 text-xl" />
                                        <p className="text-sm text-gray-600">Downloads</p>
                                        <p className="font-bold">{product?.downloadCount || 0}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                        <BiLike className="mx-auto text-amber-500 text-xl" />
                                        <p className="text-sm text-gray-600">Likes</p>
                                        <p className="font-bold">{product?.likes || 0}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column - Details */}
                            <div className="space-y-6 overflow-y-auto pr-2">
                                {/* Creator Info */}
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
                                
                                {/* Description */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                        <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                        Description
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{product?.description}</p>
                                </div>
                                
                                {/* Technical Details Grid */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {product?.difficulty && (
                                            <div className="flex items-center gap-2">
                                                <BiCog className="text-amber-500" />
                                                <div>
                                                    <p className="text-sm text-gray-600">Difficulty</p>
                                                    <p className="font-medium">{product.difficulty}</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {product?.printTime && (
                                            <div className="flex items-center gap-2">
                                                <BiTime className="text-amber-500" />
                                                <div>
                                                    <p className="text-sm text-gray-600">Print Time</p>
                                                    <p className="font-medium">{product.printTime}</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {product?.material && (
                                            <div className="flex items-center gap-2">
                                                <BiCube className="text-amber-500" />
                                                <div>
                                                    <p className="text-sm text-gray-600">Material</p>
                                                    <p className="font-medium">{product.material}</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {product?.fileSize && (
                                            <div className="flex items-center gap-2">
                                                <BiDownload className="text-amber-500" />
                                                <div>
                                                    <p className="text-sm text-gray-600">File Size</p>
                                                    <p className="font-medium">{product.fileSize}</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {product?.license && (
                                            <div className="flex items-center gap-2">
                                                <TbLicense className="text-amber-500" />
                                                <div>
                                                    <p className="text-sm text-gray-600">License</p>
                                                    <p className="font-medium">{product.license}</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="flex items-center gap-2">
                                            <BiCalendar className="text-amber-500" />
                                            <div>
                                                <p className="text-sm text-gray-600">Posted</p>
                                                <p className="font-medium">{timeAgo}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tags */}
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
                                
                                {/* Download Button */}
                                <button
                                    onClick={handleDownload}
                                    className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                                >
                                    <BiDownload size={24} />
                                    Download Model
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}