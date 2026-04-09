import React, { useEffect, useState } from "react";
import DemoViewer from "../components/demoViewer";
import { experiences } from "../utils/constants";
import nameImage from "../../src/assets/sign.svg";
import { motion } from "framer-motion";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(experiences);
  }, []);

  // 🔥 Text animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -80,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div>
      <section className="section-1 h-screen p-4 px-5 sm:p-20 sm:pt-10 relative overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="relative">
          <img src={nameImage} width={"10%"} alt="logo"  className="rounded-xl shadow-md" style={{border: "2px solid rgba(255,255,255,0.3)"}}/>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute left-0 font-bold lg:text-3xl hidden sm:block mt-10"
          >
            <motion.p variants={item} className="mb-6">
              Building for Innovation.
            </motion.p>

            <motion.p variants={item} className="text-yellow mb-6">
              Driven by Performance.
            </motion.p>

            <motion.p variants={item}>
            Designed for Scalability.
            </motion.p>
          </motion.div>
        </div>

        {/* RIGHT SIDE (Brick Layout) */}
        <div className="absolute right-0 bottom-0 w-[55%] p-6 flex justify-end">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[minmax(120px,auto)] justify-items-end">
            {items.map((details, idx) => (
              <DemoViewer key={idx} idx={idx} details={details} />
            ))}
          </div>
        </div>

        {/* 🔥 CTA (Bottom Left) */}
        <div className="absolute bottom-5 left-5 sm:left-20 flex flex-col gap-2 mb-5">
          
          <p className="text-sm opacity-60">Get in touch</p>

          {/* Email */}
          <a
            href="mailto:rdhudali@gmail.com"
            className="text-md underline hover:opacity-70 transition " 
          >
            rdhudali@gmail.com
          </a>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            
            {/* Download CV */}
            <a
              href="/Mahesh___Tech_Lead___8YoE _Feb.pdf"
              download
              className="px-4 py-2 rounded-lg text-sm font-medium border border-[#f59e0b] text-[#012a18] bg-[#f59e0b] hover:text-[#012a18] hover:text-white hover:border-[#012a18] transition"
            >
              Download CV
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahesh-hudali/"
              target="_blank"
              rel="noopener noreferrer"
                            // style={{border:"1px solid #f59e0b"}}

              className="px-4 py-2 rounded-lg text-sm font-medium border border-[#012a18] text-[#012a18] hover:bg-[#f59e0b] hover:text-[#012a18] hover:text-white hover:border-[#012a18] transition"
            >
              LinkedIn
            </a>

          </div>
        </div>

      </section>
    </div>
  );
}