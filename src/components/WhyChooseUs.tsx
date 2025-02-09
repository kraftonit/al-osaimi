"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ConstructionStats() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-progress");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left side with image and overlay */}
        <div className="relative">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/why-choose-us-img.jpg"
              alt="Construction workers at building site"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">156k</div>
              <div className="text-sm text-gray-600 max-w-[120px]">
                Project Completed
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="space-y-8">
          <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm">
            WHY CHOOSE US
          </div>

          <h2 className="text-4xl font-bold tracking-tight">
            Modern Building Challenges & Solutions
          </h2>

          <p className="text-gray-600">
            We tackle modern building challenges with innovative solutions,
            ensuring efficiency, sustainability, and quality in every project.
          </p>

          {/* Progress bars */}
          <div className="space-y-6" ref={progressRef}>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Building Construction</span>
                <span>89%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full w-0 bg-orange-400 rounded-full progress-bar"
                  data-percentage="89"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Interiors Design</span>
                <span>79%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full w-0 bg-orange-400 rounded-full progress-bar"
                  data-percentage="79"
                />
              </div>
            </div>
          </div>

          <Button className="bg-black text-white hover:bg-gray-800">
            START TODAY
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
