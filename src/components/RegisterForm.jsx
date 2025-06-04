import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError("Semua field wajib diisi.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }
    // TODO: Add your registration logic here
    alert("Registrasi berhasil (dummy)!");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white-2 px-4 py-8 sm:py-12 font-inter">
      <div className="w-full max-w-[360px] sm:max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Daftar Akun Trashure
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <Input
            label="Username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Masukkan username"
            autoComplete="username"
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
          {error && (
            <div className="text-red-500 text-xs sm:text-sm mt-1">{error}</div>
          )}
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full text-sm sm:text-base mt-2"
          >
            Daftar
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