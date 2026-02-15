import { CarouselContent, CarouselItem, Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
export default function CardCaros() {
    return(
        <>
            <Carousel opts={{ align: "start", containScroll: "trimSnaps", dragFree: true }} orientation="vertical" className="w-full h-full max-w-xs">
                <CarouselContent className="-mt-1 h-67.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2 pt-1">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>       
        </>
    )
}