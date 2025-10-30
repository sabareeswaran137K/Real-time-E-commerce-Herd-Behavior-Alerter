export const fakeData = {
  overview: {
    totalAlerts: 1240,
    lastHour: 12,
    last24Hours: 48,
    connectedClients: 6,
  },
  productTrends: [
    { name: "Product A", value: 120 },
    { name: "Product B", value: 90 },
    { name: "Product C", value: 160 },
    { name: "Product D", value: 110 },
  ],
  alertsByCategory: [
    { category: "Low", count: 10 },
    { category: "Medium", count: 18 },
    { category: "High", count: 8 },
  ],
  alertTrends: [
    { time: "10AM", alerts: 8 },
    { time: "11AM", alerts: 10 },
    { time: "12PM", alerts: 6 },
    { time: "1PM", alerts: 12 },
    { time: "2PM", alerts: 9 },
  ],
  topPerformers: [
    { product: "A", score: 95 },
    { product: "B", score: 85 },
    { product: "C", score: 75 },
    { product: "D", score: 88 },
  ],
};
