# 🚀 React E-Commerce Mini Project

React + Vite + Tailwind CSS + Redux Toolkit + React Router

## 📌 Overview

This is a modern and fast **E-commerce UI application** built with React, Vite, Tailwind CSS, Redux Toolkit, and FakeStore API.
It includes product listing, search, filters, product detail page, and cart functionality.

---

🔗 Live Demo

👉 https://e-commerce-cyan-seven-20.vercel.app/

----


## ✨ Features

### 🛍 Product Listing

* Fetches real-time products from FakeStore API
* Skeleton loader while fetching
* Clean product cards
* Higher Order Component (HOC) adds “Best Seller” badge

### 🔍 Search & Filters

* Search products by title
* Top-Rated (rating ≥ 4) filter toggle
* Category-based pages (Men / Women / Kid)

### 🛒 Shopping Cart (Redux Toolkit)

* Add items to cart
* Cart count visible in navigation bar
* Clear / Remove actions included in slice

### 🌙 Theme Toggle

* Light / Dark mode button with icons

### 🧭 Routing (React Router v7)

* Home
* Men
* Women
* Kid
* About
* Product Details
* Error page

---

## 🛠️ Tech Stack

| Technology             | Role                          |
| ---------------------- | ----------------------------- |
| **React 19**           | UI components                 |
| **Vite 7**             | Fast development & build tool |
| **Redux Toolkit**      | Global state management       |
| **Tailwind CSS 4**     | Styling                       |
| **React Router DOM 7** | Client-side routing           |
| **FakeStore API**      | Product data                  |

---

## 📂 Folder Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── Product.jsx
│   ├── Skeleton.jsx
│   ├── Accordian.jsx
│   ├── Men.jsx / Women.jsx / Kid.jsx
│   └── About.jsx / Error.jsx
│
│── store/
│   ├── CartSlice.js
│   └── Store.js
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## 🌐 API Used

This project uses **FakeStoreAPI**:
`https://fakestoreapi.com/products`

---

## 🧩 Key Components Explained

### **ProductCard.jsx**

* Fetches all products
* Handles search
* Filters top-rated products
* Uses HOC for “Best Seller” badge

### **ProductDetails.jsx**

* Displays detailed product info
* Supports Add to Cart
* Fetches data dynamically using product ID

### **CartSlice.js**

* `addItems`
* `removeItems`
* `clearItems`

### **Navbar.jsx**

* Navigation links
* Cart count
* Theme toggle

---


---

## 🙌 Author

Made by **Maniraj**

