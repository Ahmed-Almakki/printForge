// app/_components/FullPageModel.tsx
'use client'
import ThreeDModel from "@/app/_components/ThreeDModel";
import { 
  BiLike, BiUser, BiTag, BiEnvelope, BiPhone, BiCalendar, BiCategory,
  BiDownload, BiShow, BiCog, BiTime, BiCube, BiStar, BiArrowBack,
  BiShare, BiFlag
} from "react-icons/bi";
import { TbLicense } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { formatDistanceToNow } from 'date-fns';

export default function FullPageModel({ product }: { product: any }) {
    const router = useRouter();
    const viewTracked = useRef(false);
    
    console.log('Full page product:', product);
    
    useEffect(() => {
        // Track view - only once per session
        if (product?.id && !viewTracked.current) {
            const viewedKey = `viewed_${product.id}`;
            const hasViewed = sessionStorage.getItem(viewedKey);
            
            if (!hasViewed) {
                fetch(`/api/products/${product.id}/view`, {
                    method: 'POST'
                })
                .then(() => {
                    sessionStorage.setItem(viewedKey, 'true');
                    viewTracked.current = true;
                })
                .catch(console.error);
            } else {
                viewTracked.current = true;
            }
        }
    }, [product]);
    
    const createdDate = product?.createdAt ? new Date(product.createdAt) : null;
    const timeAgo = createdDate ? formatDistanceToNow(createdDate, { addSuffix: true }) : '';
    
    const handleDownload = async () => {
        if (!product?.id) return;
        
        try {
            await fetch(`/api/products/${product.id}/download`, {
                method: 'POST'
            });
            
            if (!product?.product?.threeD_model) {
                console.error('3D model path is missing');
                return;
            }
            
            const link = document.createElement('a');
            link.href = `/threeDmodel/${product.product.threeD_model}`;
            link.download = product.product.threeD_model.split('/').pop() || 'model.glb';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        } catch (error) {
            console.error('Download failed:', error);
        }
    };
    
    return (
        <div className="w-full">
            {/* Mobile Back Button */}
            <button
                onClick={() => router.back()}
                className="lg:hidden fixed top-20 left-4 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Go back"
            >
                <BiArrowBack className="text-amber-600 text-xl" />
            </button>

            {/* Hero Section - 3D Model at the top with white background to stand out from amber */}
            <div className="relative w-full h-[50vh] lg:h-[60vh] bg-white rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-200">
                {/* Model Container */}
                <div className="absolute inset-0">
                    <ThreeDModel path={product?.product?.threeD_model} />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-8">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">{product?.title}</h1>
                        <p className="text-lg lg:text-xl text-gray-200">{product?.shortDescription}</p>
                        
                        {/* Quick Stats Row */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-1 text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <BiShow className="text-amber-400" />
                                <span>{product?.viewCount || 0} views</span>
                            </div>
                            <div className="flex items-center gap-1 text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <BiDownload className="text-amber-400" />
                                <span>{product?.downloadCount || 0} downloads</span>
                            </div>
                            <div className="flex items-center gap-1 text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                <BiLike className="text-amber-400" />
                                <span>{product?.likes || 0} likes</span>
                            </div>
                            {product?.rating ? (
                                <div className="flex items-center gap-1 text-white/90 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <BiStar className="text-yellow-400" />
                                    <span>{product.rating.toFixed(1)} ({product.reviewCount || 0})</span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Left 2/3 */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Description Card - White background to stand out */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
                                Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {product?.description}
                            </p>
                        </div>
                    </div>

                    {/* Technical Details Card */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
                                Technical Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product?.difficulty && (
                                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                        <BiCog className="text-amber-600 text-2xl shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600">Difficulty</p>
                                            <p className="font-semibold text-gray-800">{product.difficulty}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {product?.printTime && (
                                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                        <BiTime className="text-amber-600 text-2xl shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600">Print Time</p>
                                            <p className="font-semibold text-gray-800">{product.printTime}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {product?.material && (
                                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                        <BiCube className="text-amber-600 text-2xl shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600">Material</p>
                                            <p className="font-semibold text-gray-800">{product.material}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {product?.fileSize && (
                                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                        <BiDownload className="text-amber-600 text-2xl shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600">File Size</p>
                                            <p className="font-semibold text-gray-800">{product.fileSize}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {product?.license && (
                                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                        <TbLicense className="text-amber-600 text-2xl shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600">License</p>
                                            <p className="font-semibold text-gray-800">{product.license}</p>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                                    <BiCalendar className="text-amber-600 text-2xl shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-600">Posted</p>
                                        <p className="font-semibold text-gray-800">{timeAgo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tags Section */}
                    {product?.tags && product.tags.length > 0 && (
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                                    <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
                                    <BiTag className="text-amber-500" />
                                    Tags
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag: any) => (
                                        <span 
                                            key={tag.id}
                                            className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors cursor-pointer"
                                        >
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar - Right 1/3 */}
                <div className="space-y-6">
                    {/* Creator Card */}
                    {product?.product?.user && (
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
                                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                    <BiUser className="text-amber-500 text-2xl" />
                                    Creator
                                </h2>
                                <div className="flex flex-col items-center text-center">
                                    {product.product.user.image ? (
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-amber-500 mb-4">
                                            <Image 
                                                src={product.product.user.image}
                                                alt={product.product.user.name || 'Creator'}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                                            <BiUser className="text-amber-500 text-4xl" />
                                        </div>
                                    )}
                                    <p className="text-xl font-semibold text-gray-800 mb-2">
                                        {product.product.user.name || 'Anonymous Creator'}
                                    </p>
                                    
                                    {/* Contact Buttons */}
                                    <div className="flex justify-center gap-3 mb-6">
                                        {product.product.user.email && (
                                            <a href={`mailto:${product.product.user.email}`} 
                                               className="p-3 bg-amber-100 rounded-full text-amber-600 hover:bg-amber-200 transition-colors"
                                               title="Email">
                                                <BiEnvelope size={20} />
                                            </a>
                                        )}
                                        {product.product.user.telephone && (
                                            <a href={`tel:${product.product.user.telephone}`}
                                               className="p-3 bg-amber-100 rounded-full text-amber-600 hover:bg-amber-200 transition-colors"
                                               title="Call">
                                                <BiPhone size={20} />
                                            </a>
                                        )}
                                    </div>

                                    {/* Category Info */}
                                    {product?.product?.category && (
                                        <div className="w-full pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600 mb-1">Category</p>
                                            <p className="font-semibold text-gray-800 flex items-center justify-center gap-1">
                                                <BiCategory className="text-amber-500" />
                                                {product.product.category.name}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Download Card */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BiDownload className="text-amber-500" />
                                Download Model
                            </h3>
                            <button
                                onClick={handleDownload}
                                className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 mb-4"
                            >
                                <BiDownload size={24} />
                                Download Now
                            </button>
                            
                            {/* File Info */}
                            {product?.fileSize && (
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    File size: {product.fileSize}
                                </p>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex justify-between text-sm border-t border-gray-200 pt-4">
                                <button className="flex items-center gap-1 text-gray-600 hover:text-amber-500 transition-colors">
                                    <BiShare /> Share
                                </button>
                                <button className="flex items-center gap-1 text-gray-600 hover:text-amber-500 transition-colors">
                                    <BiFlag /> Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}