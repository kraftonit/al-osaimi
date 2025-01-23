import React from "react";
import MissionCard from "@/components/about/MissionCard";
import { ChartColumnBig, Globe } from "lucide-react";

const OurMission = () => {
  const missionCards = [
    {
      id: 1,
      title: "Project Planning",
      description: "Ensuring every detail is considered designing",
      icon: ChartColumnBig,
    },
    {
      id: 2,
      title: "Labor Preparation",
      description: "We take pride in our quality craftsmanship",
      icon: Globe,
    },
  ];

  return (
    <section>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="text-black">
            <h4 className="w-fit text-[14px] font-semibold leading-[14px] uppercase border border-gray-400 px-2 py-2 rounded-full mb-4">
              Our Mission
            </h4>
            <h2 className="text-[56px] font-medium leading-[66px]">
              Dedicated to Delivering Value and Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionCards.map((item) => (
              <MissionCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
