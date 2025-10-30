#🧠 Herd Behaviour Dashboard
## Recommended Structure and Order
### 1.	Project Title / Headline
A modern full-stack analytics application that visualizes customer behavior patterns and product trends using simulated datasets.
This project demonstrates advanced data visualization, frontend development, and API integration skills through a beautiful and responsive gradient purple analytics dashboard.

### 2. Project Structure
...
herd-behaviour-dashboard/
├── backend/
│   ├── app.py                 # Flask backend API serving fake dataset
│   ├── fake_data.csv          # Synthetic dataset for analytics
│   ├── requirements.txt       # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main application with routing (Dashboard, Products, Pricing)
│   │   ├── index.js           # React entry file
│   │   ├── index.css          # Tailwind global styles
│   │   ├── components/
│   │   │   ├── Navigation.jsx # Top navigation bar with gradient design
│   │   │   ├── Dashboard.jsx  # Main dashboard with 10+ advanced charts
│   │   │   ├── TopProducts.jsx# Product listing and analytics
│   │   │   └── Pricing.jsx    # Pricing plans and feature comparison
│   ├── public/
│   │   └── index.html         # Root HTML template
│   ├── package.json           # Frontend dependencies
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
...

### 3.🧩 Backend (Flask API + Fake Dataset)

The Flask backend handles data generation and provides an API to feed the React dashboard.
It uses a fake dataset to simulate real-world analytics — such as product views, sales, and user engagement.

### 4.✳️ Key Features

Serves dynamic data for charts and product metrics

Provides REST API endpoints for frontend integration

Supports CORS for cross-origin communication

Lightweight and fast for development environments

### 5.▶️ Run Backend
cd backend
pip install -r requirements.txt
python app.py


Backend runs at:
👉 http://localhost:5000

🎨 Frontend (React + Tailwind + Recharts)

The React frontend is a responsive analytics interface built with Tailwind CSS and Recharts.
It presents interactive charts, statistics, product cards, and pricing tables — all with gradient purple UI elements.

▶️ Run Frontend
cd frontend
npm install
npm start


Frontend runs at:
👉 http://localhost:3000

### 6.📊 Dashboard Overview
Screenshots / Demos
Example: ![Dashboard Preview](https://github.com/sabareeswaran137K/Real-time-E-commerce-Herd-Behavior-Alerter/blob/main/herd%20behaviour.png)

The Dashboard Page displays key analytics insights using 10+ chart types:

Chart Type	Purpose
Line Chart	Click trend by day
Area Chart	Engagement growth
Bar Chart	Product sales comparison
Pie Chart	Category sales share
Radar Chart	Product performance by metrics
Bubble Chart	Customer segmentation
Waterfall Chart	Revenue breakdown
Box Plot	Session time variance
Histogram	Purchase frequency
Composed Chart	Clicks vs Revenue

Each chart is designed with:

Gradient colors

Highlighted data values

Tooltip legends

Responsive containers

##🏷️ Top Products Page

Displays 10 featured products from the fake dataset with:

Product name

Category

Price (₹)

Rating (⭐)

Sales volume

Each card includes hover effects and alignment for price and name for a clean professional layout.

Example Product List:

🎧 Wireless Headphones

⌚ Smart Watch

💻 Laptop Stand

🔊 Bluetooth Speaker

🖱️ Wireless Mouse

⌨️ Gaming Keyboard

🎒 Laptop Backpack

🏃 Fitness Tracker Band

🔋 Portable Charger

🎶 Noise Cancelling Earbuds

💰 Pricing Page

The Pricing Page showcases 7 feature-based plans with gradient cards and animations.
Each plan includes:

Tier name (Starter, Basic, Pro, Premium, Enterprise, Growth, Ultimate)

Price per month

Feature list

Highlighted “Most Popular” plan

Plans are arranged in a grid layout with smooth hover transitions and shadow effects.

### 7.🧠 Features

10+ Advanced Recharts Visualizations

Gradient Purple Analytics Theme

Dynamic Top Products & Pricing Pages

Interactive Tooltips & Legends

Fully Responsive UI (Desktop + Mobile)

Modern Lucide Icons Integration

Modular Component Structure

### 8.🧰 Technologies Used

Frontend:

React.js (Functional Components, Hooks)

Tailwind CSS (Styling Framework)

Recharts (Data Visualization)

Lucide React (Icons)

Backend:

Flask (Web Framework)

Pandas (Data Handling)

Flask-CORS (Cross-Origin)

Python 3.10+

### 9.🧩 Folder Summary
Folder	Description
/frontend/src/components	All UI and visualization components
/backend	Flask API, dataset, and configuration
/public	Static assets and index HTML
/node_modules	Auto-generated dependencies (ignored in Git)
⚙️ How to Run the Complete Project
# Step 1: Start backend
cd backend
python app.py

# Step 2: Start frontend
cd ../frontend
npm start


Then open 👉 http://localhost:3000
 in your browser.

### 10.🧾 Project Summary

Herd Behaviour Dashboard is a full-stack visualization platform built to demonstrate user and product behavioral analytics using fake e-commerce data.
The dashboard merges data-driven insights with a modern UI — combining the power of React, Recharts, Tailwind CSS, and Flask to create a feature-rich analytical experience.

