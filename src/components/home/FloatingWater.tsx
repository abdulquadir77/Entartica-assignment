// import React from 'react'

import LocationCarousel from "../carousels/LocationCarousel";

const items = [
  {
    title: "Raipur",
    address:
      "Lake, Sector 24, Jhanj, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
    image:
      "https://entartica.com/wp-content/uploads/2025/07/450x450-Raipur-2-1.webp",
  },
  {
    title: "Rajsamand",
    address: "No Chowki Rajsamand Lake, Rajsamand Lake, Rajasthan-313333",
    image:
      "https://entartica.com/wp-content/uploads/2025/07/450x450-Rajsamand-2-2.webp",
  },
  {
    title: "Patratu",
    address: "Patratu Lake Resort Boat Club, Ranchi, Jharkhand 829119",
    image:
      "https://entartica.com/wp-content/uploads/2025/07/450x450-Patratu-2-1.webp",
  },
  {
    title: "Prayagraj",
    address: "Entartica Sea World kali ghat 372D, Kydganj, Prayagraj, 211003",
    image: "https://entartica.com/wp-content/uploads/2026/01/450x450-2.webp",
  },
  {
    title: "Barnala",
    address: "HG Eaton Plaza, NH 7, near haldiram's, Handiaya, Punjab 148107",
    image:
      "https://entartica.com/wp-content/uploads/2025/07/450x450-Barnala-1-2.webp",
  },
  {
    title: "Coimbatore",
    address: "Periyakulam Lake Boat House, Ukkdam, Tamil Nadu 641001",
    image:
      "https://entartica.com/wp-content/uploads/2025/07/450x450-Coimbator-2-1.webp",
  },
];

const FloatingWater = () => {
  return (
    <div className="w-full bg-primary">
      <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-6">
        <div className="mx-auto max-w-6xl text-center">
          {/* Main Heading */}
          <h2
            className="
          text-secondary
          font-extrabold
          leading-[1]
          uppercase
          leading-[1.15]
          tracking-[0.04em]
          text-[22px]
          sm:text-[28px]
          md:text-[36px]
          lg:text-[44px]
          xl:text-[54px]
          mb-8
        "
          >
            ENTARTICA SEAWORLD INDIA’S ONLY <br className="hidden sm:block" />
            FLOATING WATER WORLD
          </h2>

          {/* Sub heading */}
          <p
            className="
          text-white
          font-semibold
          text-[14px]
          sm:text-[16px]
          md:text-[18px]
          lg:text-[25px]
          mb-8
        "
          >
            Entartica SeaWorld – Where Magic Meets Water
          </p>

          {/* Tagline */}
          <p
            className="
          text-secondary
          font-semibold
          tracking-[0.08em]
          text-[13px]
          sm:text-[14px]
          md:text-[22px]
        "
          >
            Select Your Escape, Celebrate Your Way.
          </p>
        </div>
      </div>

      <div className="py-5">
        <LocationCarousel items={items} />
      </div>
    </div>
  );
};

export default FloatingWater;
