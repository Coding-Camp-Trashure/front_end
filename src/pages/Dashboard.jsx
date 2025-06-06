import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const DashboardPage = () => {
  return (
    <>
      <Navbar variant="white" />
      <main>
        <Dashboard />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage;
