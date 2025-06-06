import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import ServiceFeatured from "../components/ServiceFeatured";
import Map from "../components/Map";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Services />
      <ServiceFeatured />
      <Map />
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);

export default LandingPage;