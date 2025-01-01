import React from "react";

function DemoViewer({ details }) {
  const { height, width, bg, delay } = details;
  return (
    <div
      className="m-2 rounded-xl text-center py-7 px-10 shadow-2xl cursor-pointer"
      style={{
        backgroundColor: bg.bg,
        // height: `${height}rem`,
        width: `${width}rem`,
        // animationDelay: `${delay}s`, // Add delay for smooth, staggered animation
        // position: "fixed", // Position to control each tile's exact location
        // right: "0",
      }}
    >
      <div className="flex justify-center mb-5">
        <img src={details.icon}></img>
      </div>

      <h4
        className="titlle font-bold text-navy text-lg"
        style={{ color: bg.primary }}
      >
        {details.title}
      </h4>
      <h4 className="sub-title font-bold py-0.5 text-yellow text-xs">
        {details.company}
      </h4>
      <p
        className="content text-xs py-2 font-Open "
        style={{ color: bg.secondary }}
      >
        {/* <ul className="list-inside">
          {details.highlights.map((el) => {
            return <li className="list-disc">{el}</li>;
          })}
        </ul> */}
      </p>
    </div>
  );
}

export default DemoViewer;
