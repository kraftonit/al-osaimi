import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="mx-auto px-4 py-4 relative z-10 bg-primary border-b border-gray-900">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">
            🏠 BuildGo
          </Link>
        </div>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="font-semibold hover:text-amber-900">
                        HOME
                    </Link>
                    <Link href="/about-us" className="font-semibold hover:text-amber-900">
                        About Us
                    </Link>
                    <Link href="/services" className="font-semibold hover:text-amber-900">
                        SERVICES
                    </Link>
                    <Link href="/blog" className="font-semibold hover:text-amber-900">
                        BLOG
                    </Link>
                    <Link href="/contact" className="font-semibold hover:text-amber-900">
                        CONTACT US
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button className="hidden py-3 md:flex rounded-md font-bold bg-black text-white hover:bg-white hover:text-black">
                        GET STARTED
                        <span className="ml-2">→</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </nav>
        </header>
    )
}
