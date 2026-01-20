import { useEffect, useState } from "react";

export const useCardWidth = () => {
  const [width, setWidth] = useState(280);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setWidth(390);
      else if (window.innerWidth >= 768) setWidth(320);
      else setWidth(280);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
};
