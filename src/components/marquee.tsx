"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeContainer = () => {
  return (
    <Marquee className="text-5xl font-bold text-black tracking-tight flex items-center justify-center">
      {[
        "next.js",
        "react.js",
        "typescript",
        "python",
        "javascript",
        "figma",
        "redux",
        "tailwind css",
        "redux",
        "prisma",
        "nest.js",
        "node.js",
        "flutter",
      ].map((e) => (
        <div className="flex items-center">
          <h3 className="mx-6 uppercase">{e}</h3>
          <Image
            src={"/seperator.svg"}
            alt="seperator"
            width={"28"}
            height={"28"}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeContainer;
