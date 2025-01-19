'use client'

import { motion } from 'framer-motion'

const services = [
    { title: 'Residential Construction', icon: '🏠' },
    { title: 'Commercial Buildings', icon: '🏢' },
    { title: 'Renovation & Remodeling', icon: '🔨' },
    { title: 'Sustainable Development', icon: '🌿' },
]

export default function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

