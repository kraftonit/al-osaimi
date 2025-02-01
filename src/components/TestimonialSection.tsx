import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
            <div className="w-full px-20">
              <Carousel
                opts={{
                  align: "start",
                  dots: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/1 lg:basis-1/2"
                    >
                      <div className="p-1">
                        <Card className="border-none">
                          <CardContent className="flex flex-col gap-6 aspect-square p-6">
                            <blockquote className="text-xl font-medium">
                              <span className="text-yellow-400 text-3xl">
                                &quot;
                              </span>
                              {testimonials[index].quote}
                              <span className="text-yellow-400 text-3xl">
                                &quot;
                              </span>
                            </blockquote>
                            <h2 className="text-sm font-bold text-right">
                              {testimonials[index].author}
                            </h2>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
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
