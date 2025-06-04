import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;