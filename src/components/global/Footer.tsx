import { Button } from "@/components/ui/button"
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Top CTA Section */}
      <div className="container mx-auto px-4 py-16 flex justify-between items-center border-b border-gray-800">
        <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl">
          Your Dream Project Awaits —<br />
          Get Started Today!
        </h2>
        <Button size="lg" className="bg-[#FDB813] hover:bg-[#FDB813]/90 rounded-full w-16 h-16">
          <ArrowUpRight className="h-6 w-6 text-black" />
        </Button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="text-[#FDB813]">🏠</div>
            BuildGo
          </div>
          <p className="text-lg">We&apos;re Solutions for all construction</p>
        </div>

        {/* Address Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="mb-4">
            3891 Ranch view Richardson,
            <br />
            California 62639
          </p>
          <Link href="tel:+123256568558" className="text-[#FDB813] hover:underline">
            +123 (256) 568 58
          </Link>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick links</h3>
          <div className="space-y-2">
            <Link href="#" className="block hover:text-[#FDB813]">
              About Us
            </Link>
            <Link href="#" className="block hover:text-[#FDB813]">
              Services
            </Link>
            <Link href="#" className="block hover:text-[#FDB813]">
              Blog
            </Link>
            <Link href="#" className="block hover:text-[#FDB813]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <div className="space-y-2">
            <Link href="#" className="block hover:text-[#FDB813]">
              Term & Conditions
            </Link>
            <Link href="#" className="block hover:text-[#FDB813]">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">
          Copyright 2025 - All Rights Reserved By
          <Link href="#" className="text-[#FDB813] hover:underline">
            ThemeOri
          </Link>
        </p>
        <div className="flex gap-4">
          <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

