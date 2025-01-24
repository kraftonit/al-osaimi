import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, HardHat } from "lucide-react";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-yellow-400 mb-2">EXPERIENCE AREA</p>
              <h2 className="text-4xl font-bold mb-8">
                Techniques for
                <br />
                Outstanding Results
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6">
                  <ClipboardList className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Project Planning
                  </h3>
                  <p className="text-gray-300">
                    Ensuring every detail is considered designing
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6">
                  <HardHat className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Labor Preparation
                  </h3>
                  <p className="text-gray-300">
                    We take pride in our quality craftsmanship
                  </p>
                </CardContent>
              </Card>
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
