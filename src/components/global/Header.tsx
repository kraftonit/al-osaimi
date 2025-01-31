import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 start-0 w-full h-auto z-50">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="MARCO Logo"
            width={250}
            height={80}
            className="w-auto h-20"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-lime-300 hover:text-[#d8e701] font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-lime-300 font-semibold transition-colors"
          >
            About
          </Link>
          <Link
            href="/careers"
            className="text-white hover:text-lime-300 font-semibold transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-lime-300 font-semibold transition-colors"
          >
            Services
          </Link>
          <Link
            href="/our-work"
            className="text-white hover:text-lime-300 font-semibold transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-lime-300 font-semibold transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
