// import React from 'react'
const locations = [
  {
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Chennai_Cropped_result_84209cd017.webp?w=640&q=75",
    title: "Chennai",
    type: "Park",
    isNew: true,
  },
  {
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp?w=640&q=75",
    title: "Kochi",
    type: "Park",
    isNew: false,
  },
  {
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=640&q=75",
    title: "Bengaluru",
    type: "Resort + Park",
    isNew: false,
  },
  {
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=640&q=75",
    title: "Hyderabad",
    type: "Park",
    isNew: false,
  },
  {
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=640&q=75",
    title: "Bhubaneswar",
    type: "Park",
    isNew: false,
  },
];

const LoactionCard = () => {
  return (
    <div>
      <div className="flex gap-4">
        {locations?.map((location) => (
          <div
            key={location.title}
            className="cursor-pointer group flex flex-col items-center"
          >
            <div
              className="
 relative
    w-[120px]
    h-[182px]
    overflow-hidden
    rounded-[14px]
    transition
    hover:outline
    hover:outline-[6px]
    hover:outline-secondary
    hover:text-secondary
    group-hover:scale-[1.03]

  
  "
            >
              <img
                src={location.image}
                alt={location.title}
                className="
            h-full
            w-full
            object-cover
            aspect-[84/122]
            shadow-[0px_4px_4px_0px_#0000001F]
            md:aspect-[126/182]
            md:shadow-[0px_5.91px_5.91px_0px_#0000001F]
          "
              />

              {location.isNew && (
                <div className="absolute right-1 top-1 z-[99] animate-pulse md:right-2 md:top-2">
                  <span className="rounded-full bg-[#FAD600] px-[10px] py-[4px] text-[12px] font-[900] text-black">
                    NEW
                  </span>
                </div>
              )}
            </div>

            <h4
              className="
        mt-2.5
        text-xs
        font-bold
        capitalize
        
        sm:text-base
        lg:text-lg
        font-mulish
        !leading-[1.255]
      "
            >
              {location.title}
            </h4>

            <span
              className="
        mt-0.5
        inline-block
        text-[10px]
        font-medium
        text-blue-pale
        md:text-sm
        lg:text-gray-dark
        font-mulish
        !leading-[1.255]
      "
            >
              {location.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoactionCard;

// import React from "react";

// type LocationCardProps = {
//   image: string;
//   title: string;
//   address: string;
// };

// const LocationCard: React.FC<LocationCardProps> = ({
//   image,
//   title,
//   address,
// }) => {
//   return (
//     <div className="min-w-[280px] sm:min-w-[280px] lg:min-w-[290px] bg-[#FFD23F] rounded-xl overflow-hidden shadow-lg cursor-grab">
//       <img
//         src={image}
//         className="h-[270px] sm:h-[240px] lg:h-[290px] w-full object-cover pointer-events-none select-none"
//         draggable={false}
//       />
//       <div className="p-3 text-[#4B1E6D]">
//         <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
//         <p className="text-sm font-semibold">{address}</p>
//       </div>
//     </div>

//   );
// };

// export default LocationCard;
