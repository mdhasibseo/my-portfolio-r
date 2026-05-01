import React from "react";
import { motion } from "motion/react";

const Banner = () => {
 const name = ["M", "D", "H", "A", "S", "I", "B"];

return (
  <>
    <section className="h-screen bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_10%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.7)_80%),url(./assets/hasib.png)] bg-contain bg-position-right md:bg-position-[60%_center] bg-no-repeat flex items-center justify-center brightness-[7] md:brightness-[4] lg:brightness-[4]  ">
      <div className="flex items-center justify-center gap-2">
        {name.map((item, index) => (
          <motion.h1
          initial={{ opacity: 0 , translateY: 100 }}
          whileInView ={{ opacity: 1 , translateY: 0 }}
          transition={{duration: 1, delay:index*0.06, }}
            key={index}
            className="text-white text-5xl md:text-[150px] lg:text-[280px] font-bold"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </section>
  </>
);
};

export default Banner;
