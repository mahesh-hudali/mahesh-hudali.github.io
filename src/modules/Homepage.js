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
      <section className="section-1 h-screen p-4 px-5 sm:p-10 sm:pl-20  sm:pt-5 relative overflow-hidden">
        
        {/* LEFT SIDE */}
  {/* LEFT SIDE */}
<div className="h-full flex flex-col justify-between">

  {/* 🔝 TOP: Image + Name */}
  <div>
    <img
      src={nameImage}
      width={"80px"}
      alt="logo"
      className="rounded-xl shadow-md"
      style={{ border: "2px solid rgba(255,255,255,0.3)" }}
    />

    <div className="mt-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Mahesh Hudali
      </h1>
      <p className="text-sm opacity-70 mt-1">
        Frontend Tech Lead • Building scalable frontend systems for <span style={{fontWeight: "bold" }} className="text-yellow text-xl"> 1M+ </span> users
      </p>
    </div>
  </div>

  {/* 🎯 MIDDLE: Animated Text */}
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="font-bold lg:text-3xl hidden sm:block "
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

  {/* 🔻 BOTTOM: CTA */}
  <div className="flex flex-col gap-1">
    <p className="text-sm opacity-60">Get in touch</p>

    <a
      href="mailto:rdhudali@gmail.com"
      className="text-md underline hover:opacity-70 transition"
    >
      rdhudali@gmail.com
    </a>

    <div className="flex gap-3 mt-4">
      <a
        href="/Mahesh___Tech_Lead___8YoE _Feb.pdf"
        download
        className="px-4 py-2 rounded-lg text-sm font-medium border border-[#f59e0b] bg-[#f59e0b] text-white hover:bg-[#d97706] transition"
      >
        Download CV
      </a>

      <a
        href="https://www.linkedin.com/in/mahesh-hudali/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg text-sm font-medium border border-[#012a18] text-[#012a18] hover:bg-[#f59e0b] hover:text-white transition"
      >
        LinkedIn
      </a>
    </div>
  </div>

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
  

      </section>
    </div>
  );
}