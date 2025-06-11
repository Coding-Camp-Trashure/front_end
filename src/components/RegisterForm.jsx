import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    try {
      // Validation
      if (!form.name || !form.email || !form.password || !form.confirmPassword) {
        setErrors({ submit: "Semua field harus diisi" });
        return;
      }

      if (form.password !== form.confirmPassword) {
        setErrors({ submit: "Password dan konfirmasi password tidak cocok" });
        return;
      }

      const response = await register({
        name: form.name,
        email: form.email,
        password: form.password
      });

      // Check for token in response
      if (response?.token) {
        // Force logout after registration
        localStorage.removeItem('token');
        localStorage.removeItem('trashure_user');
        
        // Navigate to login with success message
        navigate('/login', { 
          replace: true,
          state: { message: "Registrasi berhasil! Silakan login dengan akun baru Anda." } 
        });
      }
    } catch (error) {
      console.error('Registration error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      setErrors({ 
        submit: error.response?.data?.message || 
                "Registrasi gagal. Silakan coba lagi." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white-2 px-4 py-8 sm:py-12 font-inter">
      <div className="w-full max-w-[360px] sm:max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Daftar Akun Trashure
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:gap-4"
        >
          <Input
            label="Username"
            name="name" // Changed from username to name
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan username"
            autoComplete="name"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            autoComplete="email"
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            autoComplete="new-password"
            required
          />
          <Input
            label="Konfirmasi Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Konfirmasi password"
            autoComplete="new-password"
            required
          />
          {errors.submit && (
            <div className="text-red-500 text-xs sm:text-sm mt-1">{errors.submit}</div>
          )}
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full text-sm sm:text-base mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mendaftar..." : "Daftar"}
          </Button>
        </form>
        <div className="mt-4 text-center text-xs sm:text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-1 hover:underline">
            Masuk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;