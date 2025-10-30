import React from "react";
import { Star } from "lucide-react";

const products = [
  { name: "Wireless Headphones", category: "Electronics", price: "₹2,999", rating: 4.5 },
  { name: "Smart Watch", category: "Wearables", price: "₹4,999", rating: 4.7 },
  { name: "Laptop Stand", category: "Accessories", price: "₹1,299", rating: 4.3 },
  { name: "Bluetooth Speaker", category: "Electronics", price: "₹2,599", rating: 4.6 },
  { name: "Wireless Mouse", category: "Accessories", price: "₹999", rating: 4.2 },
  { name: "Gaming Keyboard", category: "Gaming", price: "₹2,199", rating: 4.4 },
  { name: "Laptop Backpack", category: "Accessories", price: "₹1,899", rating: 4.1 },
  { name: "Fitness Tracker Band", category: "Wearables", price: "₹3,499", rating: 4.5 },
  { name: "Portable Charger", category: "Accessories", price: "₹1,499", rating: 4.3 },
  { name: "Noise Cancelling Earbuds", category: "Electronics", price: "₹5,999", rating: 4.8 },
  { name: "Smart Home Hub", category: "Smart Home", price: "₹6,499", rating: 4.6 },
  { name: "VR Headset", category: "Gaming", price: "₹8,999", rating: 4.7 },
  { name: "4K Smart TV", category: "Electronics", price: "₹24,999", rating: 4.9 },
  { name: "Drone Camera", category: "Photography", price: "₹14,499", rating: 4.8 },
  { name: "Smart Thermostat", category: "Smart Home", price: "₹7,999", rating: 4.5 },
];

export default function TopProducts() {
  return (
    <div className="p-8 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
        🔝 Top Performing Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <span className="text-indigo-600 font-bold">{product.price}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                  fill={i < Math.floor(product.rating) ? "yellow" : "none"}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
