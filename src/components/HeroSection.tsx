import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
    return (
        <section className="pt-12 pb-20 relative z-10 min-h-[calc(100vh)]">
            <div className="container relative">
                {/* Content */}
                <div className="max-w-2xl space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
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

                {/* Trophy Badge */}
                <div className="absolute top-0 right-0 md:right-20 bg-zinc-900 rounded-full p-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <Image src="/images/banner.jpg" alt="Trophy badge" width={48} height={48} className="invert" />
                    </div>
                </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-primary -skew-y-10"></div>
        </section>
    )
}

