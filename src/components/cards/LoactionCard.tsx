import React from "react";

type LocationCardProps = {
  image: string;
  title: string;
  address: string;
};

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  title,
  address,
}) => {
  return (
    <div className="min-w-[280px] sm:min-w-[280px] lg:min-w-[290px] bg-[#FFD23F] rounded-xl overflow-hidden shadow-lg cursor-grab">
      <img
        src={image}
        className="h-[270px] sm:h-[240px] lg:h-[290px] w-full object-cover pointer-events-none select-none"
        draggable={false}
      />
      <div className="p-3 text-[#4B1E6D]">
        <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
        <p className="text-sm font-semibold">{address}</p>
      </div>
    </div>

  );
};

export default LocationCard;
