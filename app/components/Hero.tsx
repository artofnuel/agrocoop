import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <main className=" bg-white w-full h-auto md:h-[500px] relative">
      {/* <section className="absolute clipped w-full h-full bg-white z-10"></section> */}
      <section className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-5 md:gap-0 relative z-0">
        <div className="w-full h-full flex flex-col gap-3 justify-center items-start p-5 md:p-10">
          <h1 className="text-5xl font-extralight text-primary">
            The
            <br />
            <span className="text-green-950 font-extrabold">Mbiafun</span>
            <br />
            Cooperative
          </h1>
          <p className="py-2  text-green-950">
            Creating sustainable living for farmers in the
            <br />
            <span className="text-xl md:text-2xl bg-white text-primary rounded-md font-extrabold uppercase">
              rural level
            </span>{" "}
            with the help of agronomics.
          </p>
          <div className="flex gap-5">
            <Link
              href="/dashboard/farmer"
              className="p-2 px-5 rounded-full border-2 border-green-950 hover:bg-green-950 text-green-950 hover:text-white flex items-center gap-2 transition-all duration-500 ease-in-out"
            >
              View the Farmers <MdOutlineKeyboardArrowRight size={20} />
            </Link>
            {/* <button className="p-2 px-5 font-bold text-green-950 flex items-center gap-2 decoration-green-950/40 rounded-full hover:text-white hover:bg-[#F7C35F] transition-all duration-500 ease-in-out">
              Learn more <MdOutlineKeyboardArrowRight size={20} />
            </button> */}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-3 justify-start items-start">
          <Image
            src={`https://images.pexels.com/photos/2563244/pexels-photo-2563244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-tl-[20px]"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
