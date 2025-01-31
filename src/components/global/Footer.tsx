import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12">
      {/* Contact Info Bar */}
      <div className="container mx-auto bg-white rounded-2xl py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-6">
          <Phone className="text-lime-300 size-12" />
          <div>
            <p className="text-black font-semibold text-2xl">Phone Number</p>
            <p className="text-gray-600 text-xl">+966 11 400 1199</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Mail className="text-lime-300 size-12" />
          <div>
            <p className="text-black font-semibold text-2xl">Email Address</p>
            <p className="text-gray-600 text-xl">info@mrtc.com.sa</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <MapPin className="text-lime-300 size-12" />
          <div>
            <p className="text-black font-semibold text-2xl">Location</p>
            <p className="text-gray-600 text-xl">
              12391-8594 Northen Ring Road, Al Nakhil District, Riyadh, Saudi
              Arabia
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.png"
              alt="MARCO Logo"
              width={150}
              height={50}
              className="mb-6"
            />
            <Link
              href="/company-profile"
              className="bg-lime-300 text-white px-6 py-2 rounded hover:bg-[#a8b301] transition-colors"
            >
              Company Profile
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block hover:text-lime-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-lime-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="block hover:text-lime-300 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/services"
              className="block hover:text-lime-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/our-work"
              className="block hover:text-lime-300 transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/contact"
              className="block hover:text-lime-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-lime-300 text-xl font-semibold mb-4">
              Case Studies
            </h3>
            <div className="space-y-4">
              <Link
                href="/case-studies/imam-university"
                className="block hover:text-lime-300 transition-colors"
              >
                Imam University SAAC & Student Lobby
              </Link>
              <Link
                href="/case-studies/sidf"
                className="block hover:text-lime-300 transition-colors"
              >
                Saudi Industrial Development Fund HQ
              </Link>
              <Link
                href="/case-studies/dgda"
                className="block hover:text-lime-300 transition-colors"
              >
                DGDA Samhan Heritage Hotel
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © 2023 MARCO. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link
                href="/ar"
                className="text-sm text-gray-400 hover:text-lime-300"
              >
                العربية (Arabic)
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/en"
                className="text-sm text-gray-400 hover:text-lime-300"
              >
                English
              </Link>
            </div>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-lime-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
