import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="fixed w-full bg-primary z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/buildgo-logo.png"
                            alt="BuildGo Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="hover:text-yellow-500">HOME</Link>
                        <Link href="/pages" className="hover:text-yellow-500">PAGES</Link>
                        <Link href="/services" className="hover:text-yellow-500">SERVICES</Link>
                        <Link href="/blog" className="hover:text-yellow-500">BLOG</Link>
                        <Link href="/contact" className="hover:text-yellow-500">CONTACT US</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                            GET STARTED
                        </button>
                        <button className="p-2 md:hidden">
                            <span className="sr-only">Menu</span>
                            {/* Add hamburger icon for mobile */}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header; 