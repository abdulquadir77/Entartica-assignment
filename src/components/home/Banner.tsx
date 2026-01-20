// import React from 'react'
const BANNER_IMAGES = {
  mobile:
    "https://entartica.com/wp-content/uploads/2026/01/Prayagraj-Banner-Desktop.webp",
  tablet:
    "https://entartica.com/wp-content/uploads/2026/01/Prayagraj-Banner-Desktop.webp",
  desktop:
    "https://entartica.com/wp-content/uploads/2026/01/Prayagraj-Banner-Desktop.webp",
};
const BANNER_ALT = "Prayagraj city banner";

const Banner = () => {
  return (
    <section
      aria-label="Prayagraj banner"
      className="relative w-full overflow-hidden"
    >
      {/* Prevent CLS by reserving height */}
      <div className="aspect-[16/6] sm:aspect-[16/7] md:aspect-[16/6]">
        <picture>
          <source media="(max-width: 640px)" srcSet={BANNER_IMAGES.mobile} />
          <source media="(max-width: 1024px)" srcSet={BANNER_IMAGES.tablet} />

          <img
            src={BANNER_IMAGES.desktop}
            alt={BANNER_ALT}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}
    </section>
  );
};

export default Banner;
