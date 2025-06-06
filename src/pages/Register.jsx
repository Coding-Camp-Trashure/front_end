import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Navbar />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default Register;