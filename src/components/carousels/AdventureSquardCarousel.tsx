import { motion } from "framer-motion";
import { useState } from "react";

const adventureSquardData = [
  {
    id: 1,
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Corporates_7ddf8906b2.webp?w=640&q=75",
  },
  {
    id: 2,
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Colleges_1a4c484c01.webp?w=640&q=75",
  },
  {
    id: 3,
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Schools_25a4852487.webp?w=640&q=75",
  },
  {
    id: 4,
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Large_Groups_68db7dfca2.webp?w=640&q=75",
  },
];

const AdventureSquardCarousel = () => {
  const [page, setPage] = useState(0);
  const totalPages = 2;

  return (
    <div className="w-full py-14">
      <h2
        className="
          text-center
          text-[40px]
          sm:text-[44px]
          md:text-[50px]
          lg:text-[56px]
          xl:text-6xl
          font-black
          uppercase
          !leading-[1]
          tracking-[-0.04em]
          text-textColor
          mb-10
          container-main
          px-3
        "
      >
        Adventure with your squad
      </h2>
      <div className="lg:hidden overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4 snap-x snap-mandatory">
          {adventureSquardData.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[318px]
                max-w-[318px]
                aspect-[318/232]
                snap-start
                rounded-[20px]
                overflow-hidden
                bg-[#2F49D1]
                flex-shrink-0
              "
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <motion.div className="overflow-hidden px-6">
          <motion.div
            drag="x"
            dragConstraints={{ left: -414, right: 0 }} // (390 width + 24 gap)
            animate={{ x: -page * 414 }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {adventureSquardData.map((item) => (
              <div
                key={item.id}
                className="
                  min-w-[390px]
                  max-w-[390px]
                  aspect-[380/260]
                  rounded-[20px]
                  overflow-hidden
                  bg-[#2F49D1]
                  flex-shrink-0
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                transition-all duration-300
                ${
                  page === i
                    ? "w-[20px] h-[8px] rounded-full bg-[#2F49D1]"
                    : "w-[8px] h-[8px] rounded-full bg-[#D9DDFC]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default AdventureSquardCarousel;
