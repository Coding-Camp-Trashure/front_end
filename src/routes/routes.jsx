import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HowItWorks from "../pages/HowItWorks";
import Demo from "../pages/Demo";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Password from "../pages/Password";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/settings" element={<Settings />}>
        <Route path="profile" element={<Profile />} />
        <Route path="password" element={<Password />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;