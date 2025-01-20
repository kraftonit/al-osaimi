'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const projects = [
    { title: 'Modern Office Complex', image: '/project1.jpg' },
    { title: 'Eco-Friendly Residential Area', image: '/project2.jpg' },
    { title: 'Historic Building Renovation', image: '/project3.jpg' },
]

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
                <div className="relative">
                    <AnimatePresence initial={false} custom={currentIndex}>
                        <motion.div
                            key={currentIndex}
                            custom={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-video"
                        >

                            {/* <img
                                src={projects[currentIndex].image || "/placeholder.svg"}
                                alt={projects[currentIndex].title}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            /> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white">{projects[currentIndex].title}</h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}

