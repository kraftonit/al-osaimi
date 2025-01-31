import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt="Modern architectural building"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container min-h-screen flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            WHEN SUCCESS IS
            <br />
            IMPERATIVE,
            <br />
            MARCO DELIVERS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Guiding Your Project to Success With a Hands-on Approach and Focused
            Attention to Every Detail
          </p>
          <Link
            href="/our-work"
            className="inline-block bg-lime-300 text-white px-8 py-3 rounded hover:bg-[#d8e701] transition-colors text-lg font-medium"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
