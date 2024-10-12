import React from "react";
import Introduction from "./Introduction";
import Hero from "./Hero";
import OurPlants from "./OurPlants";
import Feature from "./Feature";
import OurFarmers from "./OurFarmers";
import ContactNow from "./ContactNow";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      {/* <OurPlants /> */}
      {/* <Feature /> */}
      <OurFarmers />
      <ContactNow />
    </main>
  );
};

export default Homepage;
