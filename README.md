# 🌿 Garden Products E-Commerce Website

This is a fully functional and responsive e-commerce platform built for selling garden-related products such as tools, equipment, seeds, and accessories. Users can browse product categories, view product details, see discounts, and manage a shopping cart — all within a clean, modern interface.

---

## 🎯 Project Purpose

The main purpose of this website is to simplify the online shopping experience for gardening enthusiasts. It allows users to:

- Explore all garden products in one place
- Filter by categories or see discounted items
- Add/remove products to/from cart
- Simulate checkout process
- Navigate easily with a modern layout

---

## 🛠️ Technologies Used

| Tech            | Description                         |
|-----------------|-------------------------------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square) | Frontend framework for building UI |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) | Utility-first CSS framework |
| ![React Router](https://img.shields.io/badge/-ReactRouter-CA4245?logo=react-router&logoColor=white&style=flat-square) | Page routing/navigation |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square) | Programming logic |
| ![JSON Server](https://img.shields.io/badge/-JSON%20Server-black?logo=json&logoColor=white&style=flat-square) | Local backend API for mock data |

---

## 📦 Project Structure

project-root/
├── public/ # Static files
├── src/
│ ├── assets/ # Images and SVGs
│ ├── components/ # Shared components (e.g., Navbar, Footer)
│ ├── pages/ # Page components (Home, Cart, Product, etc.)
│ │ ├── Home/
│ │ ├── Categories/
│ │ ├── AllProducts/
│ │ ├── DiscountedItems/
│ │ └── Cart/
│ ├── App.jsx # Main app with routing setup
│ ├── main.jsx # App entry point
│ └── index.css # Tailwind + global styles
├── db.json # JSON Server mock database
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS setup
└── README.md # Project documentation




---

## ⚙️ How to Clone and Run the Project

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/garden-shop.git
cd garden-shop


Step 2: Install all dependencies

npm install


Step 3: Start the development server

npm run dev


Step 4: Run JSON Server (in a separate terminal)

npx json-server --watch db.json --port 3000
