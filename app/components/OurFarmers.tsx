import Image from "next/image";
import React from "react";
import { mediaAssets } from "../assets";

const OurFarmers = () => {
  return (
    <main className="w-full h-auto md:h-[500px] flex flex-col lg:flex-row justify-center items-center">
      <section className="w-full h-[500px] p-5 flex flex-col justify-center items-center relative">
        <div className="md:rounded-tr-lg absolute inset-0 bg-tertiary -z-10 clipped"></div>
        <div className="absolute w-[75%] h-[70px] bg-white -z-10 rounded-full"></div>
        <Image
          src={mediaAssets.farmer}
          alt="farmers"
          width={1000}
          height={1000}
          className="w-[250px] aspect-square md:w-[400px] md:h-[400px] rounded-full border-white border-[20px]"
        />
      </section>
      <section className="w-full h-[500px] md:h-full p-5 flex flex-col justify-center items-start">
        {/* <h4>Our Team</h4> */}
        <p className="text-center text-3xl md:text-6xl font-bold py-3 text-primary">
          The Farmers
        </p>
        <p className="w-11/12 text-lg">
          The literal root of this project, an amazing community of hardworkers,
          all working together to achieve our goal, sustainable living through
          agriculture.
        </p>
        <button className="bg-primary text-white px-5 py-2 rounded-md mt-5">
          Meet Our Farmers
        </button>
      </section>
    </main>
  );
};

export default OurFarmers;
