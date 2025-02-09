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
<<<<<<< HEAD
            WHEN SUCCESS IS
            <br />
            IMPERATIVE,
            <br />
            AL-KESAA DELIVERS
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl">
          AL-KESAA GENERAL CONTRACTING EST. is the Largest Manpower Service Company Provider operating from the Eastern Province, the heart of oil industry in the Kingdom of Saudi Arabia
          </p>
          <Link
            href="/our-work"
            className="inline-block bg-primary text-black px-8 py-3 rounded hover:bg-primary/80 transition-colors text-lg font-medium"
=======
            Building the Future Empowering <br /> Workforce
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Providing top-quality construction services and skilled manpower
            solutions to drive your projects forward.
          </p>
          <Link
            href="/our-work"
            className="inline-block bg-lime-300 text-black px-8 py-3 rounded hover:bg-[#d8e701] transition-colors text-lg font-medium"
>>>>>>> de81c46d0ec9f173dbde18cd8fbf0c500626ad8d
          >
            See Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
