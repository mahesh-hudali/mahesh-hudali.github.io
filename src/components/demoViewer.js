// import React, { useMemo } from "react";
// import { motion } from "framer-motion";

// function DemoViewer({ details }) {
//   const { width, bg, highlights } = details;

//   // 🔥 Stable random animation config
//   const animationConfig = useMemo(() => {
//     return {
//       float: 10 + Math.random() * 10,
//       duration: 3 + Math.random() * 2,
//       delay: Math.random() * 2,
//     };
//   }, []);

//   return (
//     <motion.div
//       className="m-3 rounded-2xl text-left py-6 px-6 shadow-xl cursor-pointer"
//       style={{
//         backgroundColor: bg.bg,
//         width: `${width}rem`,
//         border: "1px solid rgba(0,0,0,0.08)",
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{
//         opacity: 1,
//         y: [0, -animationConfig.float, 0],
//       }}
//       transition={{
//         opacity: { duration: 0.5 },
//         y: {
//           duration: animationConfig.duration,
//           delay: animationConfig.delay,
//           repeat: Infinity,
//           ease: "easeInOut",
//         },
//       }}
//       whileHover={{
//         scale: 1.04,
//         y: -10,
//       }}
//     >
//       {/* Title */}
//       <h4
//         className="font-semibold text-base leading-snug"
//         style={{ color: bg.primary }}
//       >
//         {details.title}
//       </h4>

//       {/* Company */}
//       <p
//         className="text-xs mt-1 font-medium"
//         style={{ color: bg.accent }}
//       >
//         {details.company}
//       </p>

//       {/* Highlights */}
//       <ul className="text-xs mt-3 space-y-1">
//         {highlights?.map((point, i) => (
//           <li key={i} style={{ color: bg.secondary }}>
//             • {point}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }

// export default DemoViewer;


import React from "react";

function DemoViewer({ details, idx }) {
  const { width, bg, highlights } = details;
console.log({idx})
  return (
    <div
      className="rounded-2xl text-left p-6 shadow-md font-lg"
      style={{
      backgroundColor: bg.bg,
  border: "1px solid rgba(0,0,0,0.08)",
  // gridColumn: `span ${width > 30 ? 2 : 1}`,
  gridColumn:
        idx === 0
          ? "3 / span 1" // 👈 push first item to rightmost column
          : details.width > 30
          ? "span 2"
          : "span 1",
      gridRow: `span 1`,
  // gridRow: `span ${Math.ceil(highlights.length /2)}`,
      }}
    >
      {/* Title */}
      <h4
        className="font-semibold text-base leading-snug text-base md:text-lg lg:text-xl"
        style={{ color: bg.primary }}
      >
        {details.title}
      </h4>

      {/* Company */}
      <p
        className="text-xs mt-1 font-medium text-xs md:text-sm"
        style={{ color: bg.accent }}
      >
        {details.company}
      </p>

      {/* Highlights */}
      <ul className="text-xs mt-3 space-y-1 text-xs md:text-sm">
        {highlights?.map((point, i) => (
          <li key={i} style={{ color: bg.secondary }}>
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoViewer;