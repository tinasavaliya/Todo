import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            TODO
          </h1>
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium">
              <span className="cursor-pointer hover:text-gray-300 transition text-lg">Home</span>
              <span className="cursor-pointer hover:text-gray-300 transition text-lg">Todos</span>
            </nav>
            <button className="bg-white text-black px-5 py-2 rounded-md font-medium text-lg hover:bg-gray-200 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
