import React from "react";
import OurMission from "@/components/about/OurMission";
import Breadcrumb from "@/components/global/Breadcrumb";

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Breadcrumb title="About Us" imgUrl="/images/about-breadcrumb.jpg" />
      <section className="py-16 bg-white">
        <div className="container">
          <OurMission />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
