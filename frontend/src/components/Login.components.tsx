import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center gap-8 w-96 p-8 rounded-2xl shadow-lg border border-neutral-200">
        <h1 className="text-4xl font-bold text-black tracking-wide">Login</h1>

        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-md font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            required
          />

          <label
            htmlFor="password"
            className="block text-md font-medium text-neutral-700 mt-5"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            required
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-neutral-800 active:scale-[.98] transition-all">
          Login
        </button>
        <p className="text-sm text-neutral-700">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium underline underline-offset-2 hover:text-black"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
