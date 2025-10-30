// src/components/StatsCard.jsx
import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatsCard = ({ title, value, change, isPositive, icon: Icon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        <p
          className={`flex items-center text-sm font-medium mt-1 ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(change)}% vs last period
        </p>
      </div>
      <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-3 rounded-xl text-white">
        <Icon size={22} />
      </div>
    </div>
  );
};

export default StatsCard;
