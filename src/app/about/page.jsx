import Image from "next/image";
import React from "react";
import TimelineComp from "./timeline";

function About() {
  return (
    <div className=" mt-10">
      <div className="flex justify-between gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-7xl font-bold mb-6">Hello</h1>
          <h3 className="text-2xl mb-2">About Us</h3>
          <p className="text-slate-400">
            Welcome to our blog website, your go-to destination for insightful content on a wide
            array of topics. Here, we strive to provide engaging articles, thought-provoking essays,
            and informative guides tailored to cater to diverse interests and preferences.
          </p>
        </div>
        <Image width={400} height={400} className="rounded-lg" src={"/hero.png"}></Image>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-bold mb-10">Company History</h1>
        <TimelineComp />
      </div>
    </div>
  );
}

export default About;
