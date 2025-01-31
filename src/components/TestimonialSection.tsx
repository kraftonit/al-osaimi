import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "This service was fantastic! Highly recommend.",
      author: "John Doe",
    },
    {
      quote: "A wonderful experience from start to finish.",
      author: "Jane Smith",
    },
    {
      quote: "Professional and efficient. Will use again.",
      author: "Alice Johnson",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-yellow-400 mb-2 uppercase">Testimonials</p>
              <h2 className="text-4xl font-bold mb-8">
                What Current Employees Are Saying:
              </h2>
            </div>
            <Carousel
              opts={{
                align: "start",
                dots: true,
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
          <div className="relative h-[500px] mt-8 lg:mt-0">
            <Image
              src="/images/banner.jpg"
              alt="Construction workers reviewing plans"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
