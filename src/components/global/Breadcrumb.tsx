import Image from "next/image";

export default function Breadcrumb({
  title,
  imgUrl,
}: {
  title: string;
  imgUrl: string;
}) {
  return (
    <div className="relative min-h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgUrl}
          alt="Modern architectural building"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container min-h-[50vh] flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
