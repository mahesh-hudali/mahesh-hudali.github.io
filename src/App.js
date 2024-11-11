import React, { useEffect, useState } from "react";
import DemoViewer from "./components/demoViewer";
import { experiences } from "./utils/constants";
import selfImage from "../src/assets/Untitled design (1).png";
import nameImage from '../src/assets/sign.svg'

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
      <section className=" section-1 h-screen p-4 px-5 sm:p-32 sm:pt-10 relative">
        <div className=" absolute bottom-28 l-0 font-bold lg:text-5xl hidden sm:block">
          <p className=" mb-5">Innovation.</p>
          <p className="text-yellow  mb-5">Performance.</p>
          <p className=" m-0">Scalability.</p>
        </div>
        <div className="relative">
          <img src={nameImage} width={'30%'}></img>
          {/* <img
            src={selfImage}
            width={"18%"}
            style={{
              maskImage: `linear-gradient(transparent, black 20%, black 80%, transparent),
        linear-gradient(90deg, transparent, black 20%, black 80%, transparent),
        radial-gradient(circle at top left, transparent, black 50%),
        radial-gradient(circle at top right, transparent, black 50%),
        radial-gradient(circle at bottom left, transparent, black 50%),
        radial-gradient(circle at bottom right, transparent, black 50%)`,
            }}
          ></img> */}
        </div>
        <div className="flex flex-wrap justify-end absolute bottom-0 r-0 pe-32">
          {items.map((details, idx) => (
            <div
              style={{
                width: idx === 0 ? "100%" : idx === 1 ? "60%" : null,
                display: "flex",
                justifyContent: "end",
              }}
            >
              <DemoViewer details={details} />
            </div>
          ))}
        </div>
      </section>

      {/* <section className="section-2 h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </section> */}
    </div>
  );
}
