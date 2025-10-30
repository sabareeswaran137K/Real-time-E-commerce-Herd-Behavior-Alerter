import React from "react";

const Navigation = ({ currentPage, onPageChange }) => {
  const pages = [
    { name: "Dashboard", id: "dashboard" },
    { name: "Top Products", id: "products" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 text-white py-4 px-6 shadow-lg flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">Herd Behaviours</h1>
      <div className="flex space-x-8">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onPageChange(page.id)}
            className={`transition-all duration-300 ${
              currentPage === page.id
                ? "border-b-2 border-white font-semibold"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            {page.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
