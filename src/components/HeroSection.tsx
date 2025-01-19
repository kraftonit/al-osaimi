"use client"

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                >
                    <source src="/construction-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-4"
                >
                    Building Tomorrow, Today
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl mb-8"
                >
                    Innovative Construction Solutions for a Sustainable Future
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:bg-yellow-400"
                >
                    Get Started
                </motion.button>
            </div>
        </section>
    )
}

