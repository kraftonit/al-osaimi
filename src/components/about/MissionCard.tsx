import React from "react";

interface MissionCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}

const MissionCard = ({ item }: MissionCardProps) => {
  return (
    <div className="bg-[#F8F7F0] rounded-[12px] p-[40px]">
      <div className="">
        <item.icon className="w-[48px] h-[48px] text-primary text-left mb-4" />

        <div className="">
          <h2 className="text-[24px] font-medium leading-[32px] text-black text-nowrap">
            {item.title}
          </h2>
          <p className="text-[18px] font-normal leading-[26px] text-gray-500 mt-[7px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
