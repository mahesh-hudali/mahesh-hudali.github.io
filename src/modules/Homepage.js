import React, { useEffect, useState } from "react";
import DemoViewer from "../components/demoViewer";
import { experiences } from "../utils/constants";
import nameImage from "../../src/assets/sign.svg";
import name from "../../src/assets/name.svg";
import SkillsBubble from "../components/Skills";
// import dots from '../assets/dots.svg'

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      experiences.map((details, idx) => {
        return {
          ...details,
          delay: Math.random() * 10, // Random delay to stagger animation
        };
      })
    );
  }, []);
  console.log({ items });
  return (
    <div>
      <section className=" section-1 h-screen p-4 px-5 sm:p-20 sm:pt-10 relative ">
        {/* <img className="absolute" src={dots}></img> */}
        <div className="relative  ">
          <img src={nameImage} width={"10%"}></img>
          {/* <img src={name} width={"40%"} className="m-auto"></img> */}
          <div className=" absolute  l-0 font-bold lg:text-5xl hidden sm:block">
            <p className=" mb-5">Innovation.</p>
            <p className="text-yellow  mb-5">Performance.</p>
            <p className=" m-0">Scalability.</p>
          </div>
        </div>
        <div className="w-[50%] absolute right-0 flex flex-wrap justify-end bottom-0 r-0 pe-10 ">
          {items.map((details, idx) => (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: idx === 0 ? "100%" : "unset",
              }}
            >
              <DemoViewer details={details} />
            </div>
          ))}
        </div>
        {/* <SkillsBubble /> */}
      </section>

      {/* <section className="section-2 h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </section> */}
    </div>
  );
}
