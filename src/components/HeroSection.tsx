import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
    return (
        <section>
            <div className="relative py-32 z-10 h-[calc(100vh-200px)] md:h-auto bg-primary md:bg-transparent">
                {/* Content */}
                <div className="container">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-5xl lg:text-8xl font-bold text-black leading-tight">
                            Building Construction Solutions
                        </h1>

                        <div className="flex items-center gap-1">
                            <div className="flex -space-x-2">
                                <Avatar className="border-2 border-white">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar className="border-2 border-white">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar className="border-2 border-white">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar className="bg-zinc-900 border-2 border-white">
                                    <AvatarFallback className="text-white">+</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="ml-4">
                                <p className="font-medium">More then 25K Clients</p>
                                <p className="text-sm text-zinc-700">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden absolute -z-10 top-0 left-0 w-full h-full overflow-hidden md:block">
                    <Image src="/images/banner-bg-shape.svg" alt="Wave" width={1920} height={600} className="w-full h-full lg:max-h-[800px]" />
                </div>
            </div>
            <div className="-mt-[300px] relative -z-10 hidden lg:block">
                <Image src="/images/banner.jpg" alt="Banner" width={1920} height={1080} className="w-full h-auto" />
            </div>
        </section>
    )
}

