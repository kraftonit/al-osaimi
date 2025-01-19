'use client'

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg mx-auto"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" required></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:bg-yellow-400"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}

