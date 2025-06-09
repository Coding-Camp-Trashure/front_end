import React from "react";
import Navbar from "../components/layout/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/layout/Footer";
import Work from "../components/Work";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HowToPage = () => (
  <>
    <Navbar variant="white" />
    <main>
      <Work />
      <ScrollToTopButton />
    </main>
    <Footer />
  </>
);

export default HowToPage;