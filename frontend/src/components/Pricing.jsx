import React from "react";
import { ShoppingCart, Eye, CreditCard } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      category: "Basic Analytics",
      price: "₹499 / month",
      features: ["5 Charts", "1 Dashboard", "Email Support"],
      img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
      gradient: "from-purple-600 to-fuchsia-500",
    },
    {
      name: "Professional Plan",
      category: "Advanced Dashboard",
      price: "₹999 / month",
      features: ["15 Charts", "3 Dashboards", "Priority Support"],
      img: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
      gradient: "from-indigo-600 to-purple-500",
    },
    {
      name: "Enterprise Plan",
      category: "Full Data Suite",
      price: "₹1999 / month",
      features: ["Unlimited Charts", "Unlimited Dashboards", "24/7 Support"],
      img: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png",
      gradient: "from-pink-600 to-yellow-500",
    },
    {
      name: "AI Insights Plan",
      category: "Predictive Analytics",
      price: "₹2499 / month",
      features: ["AI Forecasting", "Anomaly Detection", "Smart Alerts"],
      img: "https://cdn-icons-png.flaticon.com/512/3940/3940056.png",
      gradient: "from-blue-600 to-teal-500",
    },
    {
      name: "Data Science Pro",
      category: "Deep Learning Tools",
      price: "₹2999 / month",
      features: ["Model Training", "Data Cleaning", "API Access"],
      img: "https://cdn-icons-png.flaticon.com/512/2702/2702069.png",
      gradient: "from-cyan-600 to-indigo-500",
    },
    {
      name: "Marketing Suite",
      category: "Customer Insights",
      price: "₹1599 / month",
      features: ["Campaign Tracking", "Segmentation", "Conversion Reports"],
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135692.png",
      gradient: "from-pink-500 to-red-500",
    },
    {
      name: "Finance Tracker",
      category: "Revenue Monitoring",
      price: "₹999 / month",
      features: ["Waterfall Charts", "ROI Insights", "Expense Control"],
      img: "https://cdn-icons-png.flaticon.com/512/2421/2421033.png",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Operations Monitor",
      category: "Workflow Insights",
      price: "₹1299 / month",
      features: ["Process Flow Charts", "Performance Metrics", "Task Heatmaps"],
      img: "https://cdn-icons-png.flaticon.com/512/4781/4781517.png",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      name: "Security Plus",
      category: "Threat Detection",
      price: "₹1899 / month",
      features: ["Real-Time Alerts", "Anomaly Logs", "Access Control"],
      img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      gradient: "from-gray-700 to-purple-600",
    },
    {
      name: "HerdScope Ultra",
      category: "Complete Data Intelligence",
      price: "₹3999 / month",
      features: [
        "All Modules Included",
        "Unlimited Access",
        "Dedicated Account Manager",
      ],
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
      gradient: "from-violet-700 to-fuchsia-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-700 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        💼 HerdScope Subscription Plans
      </h1>
      <p className="text-center text-gray-200 mb-10">
        Choose the perfect plan for your analytics journey — from basic
        dashboards to AI-powered insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${plan.gradient} p-6 rounded-2xl shadow-xl hover:scale-105 transform transition-all`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={plan.img}
                alt={plan.name}
                className="w-20 h-20 mb-4 drop-shadow-lg"
              />
              <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-200 mb-3">{plan.category}</p>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-sm mb-4 text-gray-100 space-y-1">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <div className="flex justify-center gap-2">
                <button className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                  <Eye size={18} /> View
                </button>
                <button className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition">
                  <ShoppingCart size={18} /> Add
                </button>
                <button className="flex items-center gap-2 bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition">
                  <CreditCard size={18} /> Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
