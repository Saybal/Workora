import React, { useEffect, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";

const Slider_Banner = ({ feature, isActive }) => {
  // const [view, setView] = useState(0);
  // const { ref, inView } = useInView({ triggerOnce: false, threshold: view });

  const [initialPos, setInitialPos] = useState({ x: -50, y: 180 });
  const [z, setZ] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let x = 0;
      let y = 0;
      let zValue = 0;
      let View = 0;

      if (width < 640) {
        x = 0;
        y = 90;
        zValue = 90;
      } else if (width < 1024) {
        x = -30;
        y = 100;
        zValue = 100;
      } else {
        x = -20;
        y = 180;
        zValue = 180;
      }

      setInitialPos({ x, y });
      setZ(zValue);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 15%, transparent), url(${feature.image})`,
      }}
      className="card flex bg-base-100 bg-cover bg-center w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[17rem]  xl:h-[22rem] shadow-sm rounded-xl transition-all"
    >
      <motion.div
        initial={{ opacity: 0, ...initialPos }}
        animate={isActive ? { opacity: 1, x: 0, y: z } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="card-body flex flex-col justify-end p-4 md:p-6">
          <h2 className="text-base sm:text-sm md:text-xl lg:text-2xl text-amber-50 font-bold card-title">
            {feature.title}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 sm:gap-3 items-center">
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[60px] lg:h-[60px] object-cover rounded-full"
                src={feature.image}
                alt="App Thumbnail"
              />
              <p className="text-xs sm:text-sm md:text-base text-amber-50 font-medium truncate">
                {feature.subtitle}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slider_Banner;