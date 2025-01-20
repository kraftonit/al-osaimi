"use client"

// import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Angled background overlay */}
            <div className="absolute inset-0 bg-primary transform -skew-y-[15deg] origin-top-left"></div>


            <div className="container mx-auto px-4 pt-24 pb-12 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                            Building Construction Solutions
                        </h1>

                        {/* Client Reviews Section */}
                        <div className="flex items-center space-x-4">
                            <div className="flex -space-x-2">
                                {/* Client avatars */}
                                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/avatar1.jpg"
                                        alt="Client"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/avatar2.jpg"
                                        alt="Client"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-white text-sm">
                                    +
                                </div>
                            </div>
                            <div>
                                <p className="font-medium">More then 25K Clients</p>
                                <p className="text-sm text-gray-700">Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Trophy Icon */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 bg-black rounded-full p-6">
                            <Image
                                src="/trophy-icon.png"
                                alt="Trophy"
                                width={60}
                                height={60}
                                className="w-12 h-12"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full">
                <Image
                    src="/construction-worker.jpg"
                    alt="Construction Worker"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}

export default HeroSection

