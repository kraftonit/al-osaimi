"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Residential Construction", icon: "🏠" },
  { title: "Commercial Buildings", icon: "🏢" },
  { title: "Renovation & Remodeling", icon: "🔨" },
  { title: "Sustainable Development", icon: "🌿" },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <span className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold mb-4">
          SERVICES
        </span>
        <h2 className="text-7xl font-bold mb-20">Provide Quality Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="text-8xl mb-12">{service.icon}</div>
              <h3 className="text-3xl font-bold mb-5">{service.title}</h3>
              <p className="text-gray-900 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
