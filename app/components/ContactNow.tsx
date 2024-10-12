import React from "react";

const ContactNow = () => {
  return (
    <main className="w-full h-auto lg:h-screen flex flex-col lg:flex-row bg-tertiary">
      <section className="w-full h-full flex flex-col justify-center items-start gap-3 p-5 lg:p-10 relative">
        <p>Contact Now</p>
        <h5 className="uppercase text-3xl md:text-6xl font-bold py-3 text-primary">
          Get in touch
        </h5>
        <p>We are looking to connecting with you.</p>
        <p className="flex flex-col py-2 text-gray-600 text-base">
          Phone
          <span className="text-primary font-semibold text-lg">
            +2348022352095
          </span>
        </p>
        <p className="flex flex-col py-2 text-gray-600 text-base">
          Email
          <span className="text-primary font-semibold text-lg">
            admin@agrocoop.org
          </span>
        </p>
        <p className="flex flex-col py-2 text-gray-600 text-base">
          Address
          <span className="text-primary font-semibold text-lg">Nigeria.</span>
        </p>
      </section>
      <section className="w-full h-full bg-tertiary rounded-lg p-5 lg:p-10">
        <div className="w-full h-full bg-white/90"></div>
      </section>
    </main>
  );
};

export default ContactNow;
