import React, { useState, useEffect } from "react";
import {
  LineChart, Line, PieChart, Pie, Cell, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, ScatterChart, Scatter, XAxis, YAxis,
  CartesianGrid, Legend, BarChart, Bar, AreaChart, Area, ComposedChart
} from "recharts";
import { Activity, Wifi, Layers, TrendingUp, ChartBar } from "lucide-react";

const COLORS = ["#A855F7", "#EC4899", "#F59E0B", "#10B981", "#3B82F6", "#F43F5E"];

export default function Dashboard() {
  const [blink, setBlink] = useState(true);
  const [data, setData] = useState(generateFakeData());

  useEffect(() => {
    const interval = setInterval(() => setData(generateFakeData()), 5000);
    const blinkInterval = setInterval(() => setBlink((b) => !b), 700);
    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4F46E5] to-[#9333EA] text-white p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 flex justify-center items-center gap-2">
          <Activity className="animate-pulse text-pink-400" /> Herd-Behaviour-Dashboard
        </h1>
        <p className="text-purple-200">Advanced Visualization Dashboard (with Fake Dataset)</p>

        <div className="mt-4 flex justify-center items-center gap-3 bg-white/10 px-4 py-2 rounded-lg w-fit mx-auto">
          <Wifi size={18} className={blink ? "text-green-400" : "text-green-600"} />
          <span>Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ChartBox title="📈 Traffic Over Time (Line Chart)">
          <LineChart data={data.lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="day" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Line dataKey="traffic" stroke="#F472B6" strokeWidth={3} dot={{ r: 5, fill: "#F43F5E" }} />
          </LineChart>
        </ChartBox>

        <ChartBox title="🧁 Category Distribution (Pie)">
          <PieChart>
            <Pie data={data.pieData} dataKey="value" nameKey="name" outerRadius={90} label>
              {data.pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Legend />
          </PieChart>
        </ChartBox>

        <ChartBox title="🎯 Engagement Metrics (Radar)">
          <RadarChart data={data.radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" stroke="#E9D5FF" />
            <PolarRadiusAxis stroke="#C084FC" />
            <Radar dataKey="A" stroke="#F9A8D4" fill="#EC4899" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ChartBox>

        <ChartBox title="🫧 Bubble Impact (Scatter)">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="x" stroke="#E9D5FF" />
            <YAxis dataKey="y" stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Scatter data={data.bubbleData} fill="#10B981" />
          </ScatterChart>
        </ChartBox>

        <ChartBox title="📊 Alert Frequency (Histogram)">
          <BarChart data={data.histogramData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="range" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Bar dataKey="count" fill="#22C55E" radius={[6, 6, 0, 0]} label={{ fill: "#fff", position: "top" }} />
          </BarChart>
        </ChartBox>

        <ChartBox title="📈 Growth Trend (Area Chart)">
          <AreaChart data={data.areaData}>
            <defs>
              <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F472B6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="month" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Area type="monotone" dataKey="growth" stroke="#F472B6" fill="url(#colorGrowth)" />
          </AreaChart>
        </ChartBox>

        <ChartBox title="💰 Revenue by Product (Bar)">
          <BarChart data={data.revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="product" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Bar dataKey="revenue" fill="#8B5CF6" label={{ fill: "#fff", position: "top" }} />
          </BarChart>
        </ChartBox>

        <ChartBox title="⚡ Clicks vs Conversion (Composed)">
          <ComposedChart data={data.composedData}>
            <CartesianGrid stroke="#6D28D9" />
            <XAxis dataKey="day" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Bar dataKey="clicks" barSize={20} fill="#3B82F6" />
            <Line type="monotone" dataKey="conversion" stroke="#F59E0B" strokeWidth={2} />
          </ComposedChart>
        </ChartBox>

        <ChartBox title="📉 Revenue Flow (Waterfall)">
          <BarChart data={data.waterfallData} stackOffset="sign">
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="stage" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Bar dataKey="profit" fill="#10B981" stackId="a" />
            <Bar dataKey="loss" fill="#EF4444" stackId="a" />
          </BarChart>
        </ChartBox>

        <ChartBox title="📦 Price Distribution (Box Plot)">
          <BarChart data={data.boxPlotData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" />
            <XAxis dataKey="category" stroke="#E9D5FF" />
            <YAxis stroke="#E9D5FF" />
            <Tooltip contentStyle={{ backgroundColor: "#4C1D95" }} />
            <Bar dataKey="price" fill="#F43F5E" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartBox>
      </div>
    </div>
  );
}

function generateFakeData() {
  return {
    lineData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => ({
      day: d, traffic: Math.floor(Math.random() * 500 + 200)
    })),
    pieData: [
      { name: "Electronics", value: Math.random() * 100 },
      { name: "Home", value: Math.random() * 80 },
      { name: "Beauty", value: Math.random() * 60 },
      { name: "Toys", value: Math.random() * 50 },
    ],
    radarData: [
      { metric: "Engagement", A: 90 }, { metric: "Speed", A: 70 },
      { metric: "Retention", A: 85 }, { metric: "Accuracy", A: 80 },
      { metric: "Traffic", A: 75 },
    ],
    bubbleData: Array.from({ length: 8 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100, z: Math.random() * 400,
    })),
    histogramData: Array.from({ length: 8 }, (_, i) => ({
      range: `${i * 10}-${i * 10 + 10}`, count: Math.random() * 20 + 5,
    })),
    areaData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => ({
      month: m, growth: Math.random() * 400 + 100,
    })),
    revenueData: ["Laptop", "TV", "Watch", "Earbuds"].map((p) => ({
      product: p, revenue: Math.random() * 1000,
    })),
    composedData: ["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => ({
      day: d, clicks: Math.random() * 300, conversion: Math.random() * 100,
    })),
    waterfallData: [
      { stage: "Sales", profit: 400, loss: 0 },
      { stage: "Returns", profit: 0, loss: 120 },
      { stage: "Marketing", profit: 0, loss: 80 },
      { stage: "Net", profit: 200, loss: 0 },
    ],
    boxPlotData: [
      { category: "A", price: 120 },
      { category: "B", price: 200 },
      { category: "C", price: 90 },
      { category: "D", price: 150 },
    ],
  };
}

function ChartBox({ title, children }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow hover:bg-white/20 transition-all duration-300">
      <h2 className="text-lg font-semibold mb-3 text-purple-100 flex items-center gap-2">
        <Layers className="text-pink-300" size={18} /> {title}
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
