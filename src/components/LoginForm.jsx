import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!form.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    // Password validation
    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    } else if (form.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      try {
        // TODO: Add your login logic here
        // await loginUser(form);
        alert("Login berhasil!");
      } catch (error) {
        setErrors({ submit: "Gagal masuk. Silakan coba lagi." });
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white-2 px-4 py-8 sm:py-12 font-inter">
      <div className="w-full max-w-[360px] sm:max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Masuk ke Trashure</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Masukkan email"
            autoComplete="email"
            required
          />
          {errors.email && (
            <div className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</div>
          )}
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Masukkan password"
            autoComplete="current-password"
            required
          />
          {errors.password && (
            <div className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-1 border-gray-300 rounded focus:ring-green-1"
                checked={form.rememberMe}
                onChange={(e) => setForm({ ...form, rememberMe: e.target.checked })}
              />
              <span className="ml-2 text-xs sm:text-sm text-gray-600">Ingat saya</span>
            </label>
            <Link to="/forgot-password" className="text-xs sm:text-sm text-green-1 hover:underline">
              Lupa password?
            </Link>
          </div>
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full text-sm sm:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sedang Masuk..." : "Masuk"}
          </Button>
          {errors.submit && (
            <div className="text-red-500 text-xs sm:text-sm text-center mt-2">{errors.submit}</div>
          )}
        </form>
        <div className="mt-4 text-center text-xs sm:text-sm text-gray-500">
          Belum punya akun?{" "}
          <Link to="/register" className="text-green-1 underline">
            Daftar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;