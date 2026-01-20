import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import LocationCard from "../cards/LoactionCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AUTO_SCROLL_GAP = 3000;
const GAP = 16; // gap-4

const LocationCarousel: React.FC<any> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  // infinite items
  const extendedItems = [...items, ...items, ...items];
  const middleIndex = items.length;

  // 🔥 RESPONSIVE WIDTH (THIS IS THE FIX)
  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      let visibleCards = 4;
      if (containerWidth < 640) visibleCards = 1;
      else if (containerWidth < 1024) visibleCards = 3;

      const totalGap = GAP * (visibleCards - 1);
      const width = (containerWidth - totalGap) / visibleCards;

      setCardWidth(width);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const SLIDE_WIDTH = cardWidth + GAP;
  const startX = -middleIndex * SLIDE_WIDTH;

  useEffect(() => {
    x.set(startX);
  }, [startX, x]);

  // auto scroll (unchanged behaviour)
  useEffect(() => {
    if (paused || !cardWidth) return;

    const interval = setInterval(() => {
      animate(x, x.get() - SLIDE_WIDTH, {
        type: "spring",
        stiffness: 80,
        damping: 20,
        onComplete: () => {
          if (x.get() <= -(items.length * 2) * SLIDE_WIDTH) {
            x.set(startX);
          }
        },
      });
    }, AUTO_SCROLL_GAP);

    return () => clearInterval(interval);
  }, [paused, SLIDE_WIDTH, startX, items.length, cardWidth, x]);

  const next = () =>
    animate(x, x.get() - SLIDE_WIDTH, { type: "spring", stiffness: 120 });

  const prev = () =>
    animate(x, x.get() + SLIDE_WIDTH, { type: "spring", stiffness: 120 });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-4 cursor-grab"
        style={{ x }}
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ left: -99999, right: 99999 }}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={() => setPaused(true)}
        onDragEnd={() => setPaused(false)}
      >
        {extendedItems.map((item: any, i: number) => (
          <div key={i} style={{ width: cardWidth }}>
            <LocationCard {...item} />
          </div>
        ))}
      </motion.div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <FaChevronLeft className="text-tertiary" size={18}/>
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <FaChevronRight className="text-tertiary" size={18}/>
      </button>
    </div>
  );
};

export default LocationCarousel;
