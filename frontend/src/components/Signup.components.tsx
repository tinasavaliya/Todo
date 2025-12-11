import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center gap-8 w-96 p-8 rounded-2xl shadow-lg border border-neutral-200">
        
        <h1 className="text-4xl font-bold text-black tracking-wide">
          Sign Up
        </h1>

        <div className="w-full">
          <label htmlFor="name" className="block text-md font-medium text-neutral-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5 
                       focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                       transition-all"
            required
          />

          <label htmlFor="email" className="block text-md font-medium text-neutral-700 mt-5">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5 
                       focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                       transition-all"
            required
          />

          <label htmlFor="password" className="block text-md font-medium text-neutral-700 mt-5">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5
                       focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                       transition-all"
            required
          />

          <label htmlFor="confirmPassword" className="block text-md font-medium text-neutral-700 mt-5">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="border border-neutral-400 w-full h-11 rounded-lg p-3 mt-1.5
                       focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                       transition-all"
            required
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl font-medium
                           hover:bg-neutral-800 active:scale-[.98] transition-all">
          Create Account
        </button>
        <p className="text-sm text-neutral-700">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium underline underline-offset-2 hover:text-black"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
