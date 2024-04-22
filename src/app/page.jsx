import Image from "next/image";
import React from "react";

async function Home() {

  return (
    <div className="md:flex items-center gap-10 mt-10">
      <div className="md:w-[46%] relative">
        <h1 className="text-4xl md:text-5xl font-bold leading-[3rem] md:leading-[3.8rem] bg-title">
          Discover Coding: Unraveling the Digital Tapestry
        </h1>
        <p className="text-sm mt-10">
          Embark on a journey through coding's intricate world. From unraveling algorithms to
          crafting solutions, join us in exploring the art and science of programming.
        </p>
        <button className="bg-violet-700 px-4 py-2 roumd text-sm rounded-md mt-4 text-white hover:-translate-y-1 transition-all">
          See our works
        </button>
      </div>
      <Image
        className="animate-float  md:w-[45%] rounded-md "
        width="1000"
        height="1000"
        src="/hero.png"
        alt=""
      />
    </div>
  );
}
export default Home;
