import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Discover Our Builds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-0">
              <Image
                src="/images/banner.jpg"
                alt="Construction workers reviewing plans"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
                <p className="text-muted-foreground">
                  Expert consultation and detailed project planning
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <Image
                src="/images/banner.jpg"
                alt="Construction worker at site"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Site Management</h3>
                <p className="text-muted-foreground">
                  Professional on-site management and supervision
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <Image
                src="/images/banner.jpg"
                alt="Construction worker reviewing blueprints"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground">
                  Rigorous quality control and assurance processes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
