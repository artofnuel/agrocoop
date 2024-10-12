import React from "react";
import { GiFruitTree } from "react-icons/gi";

const OurPlants = () => {
  return (
    <main className="w-full h-auto md:h-[500px] bg-white text-primary p-5 md:p-10 flex flex-col justify-center items-center">
      <h3 className="text-center">What we cultivate</h3>
      <p className="text-center text-3xl md:text-6xl font-bold py-3">
        Quality Fruits <br className="block lg:hidden" />& Vegetables
      </p>
      <section className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col gap-10 py-5">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className="w-32 md:w-28 h-32 md:h-28 bg-tertiary  rounded-md flex justify-center items-center"
          >
            <GiFruitTree size={40} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default OurPlants;
