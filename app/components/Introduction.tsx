import Image from "next/image";
import React from "react";
import { FaSunPlantWilt } from "react-icons/fa6";

const Introduction = () => {
  return (
    <main className="w-full h-auto md:h-screen bg-tertiary text-primary">
      <section className="w-full p-5 md:p-10 h-full flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="w-full md:w-1/2 h-h-[calc(100vh-100px)] flex flex-col justify-center items-center relative z-0 rounded-md">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src="https://images.pexels.com/photos/4129849/pexels-photo-4129849.jpeg"
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-[300px] md:h-[500px] object-cover md:w-[400px] rounded-lg shadow-2xl"
            />
            <div className="hidden md:flex justify-center items-center  w-[350px] h-[100px] bg-secondary md:absolute -bottom-10 mx-auto rounded-lg">
              <FaSunPlantWilt size={40} className="text-primary" />
              <div className="flex flex-col gap-3 pl-5 text-primary">
                <p className="text-xl font-semibold">5000</p>
                <p className="text-sm font-semibold">
                  Palm Trees Successfully Planted
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-2">
          {/* <p className="text-sm font-light">Our Goal</p> */}
          <h2 className="text-3xl md:text-6xl font-bold">Goals</h2>
          <p className="pt-2">Building new frontier</p>
          <p className="w-4/5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, aut ipsum. Odio iusto accusantium animi placeat neque
            dignissimos dicta voluptas?
          </p>
          <ul className="list-disc list-inside">
            {[1, 2, 3].map((index) => (
              <li key={index}>Benefits of our produce.</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Introduction;
