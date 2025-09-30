 # ☕ وبسایت کافه

(english version below)
---
یک وبسایت مدرن و کاملاً **ریسپانسیو** برای کافه، ساخته‌شده با **Next.js**، استایل‌دهی با **Bootstrap** و متصل به **MongoDB** برای مدیریت داده‌ها.  

🔗 **دمو آنلاین:** [website-coffee-shop.vercel.app](https://website-coffee-shop.vercel.app/)  
📦 **مخزن گیت‌هاب:** [github.com/erfanHP390/website-coffee-shop](https://github.com/erfanHP390/website-coffee-shop)
---
[![Website](https://img.shields.io/badge/Live_Demo-Online-green?style=for-the-badge&logo=vercel)](https://emlak-aramesh.vercel.app)  [![Next.js](https://img.shields.io/badge/Next.js-Fullstack-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)  [![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)  [![Node.js](https://img.shields.io/badge/Backend-Node.js-darkgreen?style=for-the-badge&logo=node.js)](https://nodejs.org/)  [![Bootstrap](https://img.shields.io/badge/Style-Bootstrap-purple?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)  

---

## ✨ ویژگی‌ها
- 🎨 طراحی اختصاصی با تم قهوه‌ای و بژ  
- 📱 **ریسپانسیو کامل** با استفاده از **Bootstrap**  
- ⚡ استفاده از **Next.js (App Router)** برای سرعت و سئو  
- 🛠️ کامپوننت‌های قابل استفاده مجدد (Navbar، Footer، کارت‌ها و فرم‌ها)  
- 🗄️ اتصال به **MongoDB** برای ذخیره و مدیریت داده‌ها  
- 🚀 دیپلوی روی **Vercel**  

---

## 🛠️ تکنولوژی‌ها
- [Next.js](https://nextjs.org/) – فریم‌ورک React  
- [Bootstrap](https://getbootstrap.com/) – استایل و ریسپانسیو  
- [MongoDB](https://www.mongodb.com/) – پایگاه داده  
- [Mongoose](https://mongoosejs.com/) – ODM برای MongoDB  
- [Vercel](https://vercel.com/) – هاست و دیپلوی  

---

## 📂 ساختار پروژه
```bash
website-coffee-shop/
├── app/              # صفحات و لایه‌ها (App Router)
├── components/       # کامپوننت‌های قابل استفاده مجدد
├── lib/              # اتصال به دیتابیس (MongoDB)
├── models/           # مدل‌های Mongoose
├── public/           # فایل‌های استاتیک (تصاویر، آیکون‌ها، فونت‌ها)
├── styles/           # استایل‌های پروژه
└── package.json      # وابستگی‌ها و اسکریپت‌ها
```

---

## 🚀 شروع به کار

### 1. کلون کردن مخزن
```bash
git clone https://github.com/erfanHP390/website-coffee-shop.git
cd website-coffee-shop
```

### 2. نصب وابستگی‌ها
```bash
npm install
```

### 3. ساخت فایل محیطی  
در ریشه پروژه یک فایل `.env.local` بسازید و مقدارهای زیر را وارد کنید:
```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. اجرای سرور توسعه
```bash
npm run dev
```
سپس در مرورگر باز کنید: [http://localhost:3000](http://localhost:3000)  

---

## 📌 نقشه راه
- [ ] اضافه کردن سیستم احراز هویت  
- [ ] داشبورد ادمین برای مدیریت محصولات  
- [ ] سیستم سفارش آنلاین و سبد خرید  
- [ ] پشتیبانی چندزبانه (فارسی/انگلیسی)  

---

## 🤝 مشارکت
هرگونه مشارکت، گزارش باگ یا پیشنهاد ویژگی جدید پذیرفته می‌شود.  
می‌توانید مخزن را Fork کنید و Pull Request بفرستید.  

---

## 📄 لایسنس
این پروژه تحت مجوز **MIT** منتشر شده است.  

---

# 🌐 English Version Below

# ☕ Coffee Shop Website

A modern and fully **responsive** coffee shop website built with **Next.js**, styled using **Bootstrap**, and connected to **MongoDB** for data management.  

🔗 **Live Demo:** [website-coffee-shop.vercel.app](https://website-coffee-shop.vercel.app/)  
📦 **GitHub Repository:** [github.com/erfanHP390/website-coffee-shop](https://github.com/erfanHP390/website-coffee-shop)  

---

## ✨ Features
- 🎨 Custom design with brown & beige coffee theme  
- 📱 **Fully responsive** with **Bootstrap**  
- ⚡ Built with **Next.js (App Router)** for speed & SEO  
- 🛠️ Reusable components (Navbar, Footer, Cards, Forms, etc.)  
- 🗄️ **MongoDB integration** for storing and managing data  
- 🚀 Deployed on **Vercel**  

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) – React Framework  
- [Bootstrap](https://getbootstrap.com/) – Styling & Responsive Layout  
- [MongoDB](https://www.mongodb.com/) – Database  
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB  
- [Vercel](https://vercel.com/) – Deployment  

---

## 📂 Project Structure
```bash
website-coffee-shop/
├── app/              # Pages & layouts (App Router)
├── components/       # Reusable UI components
├── lib/              # Database connection (MongoDB)
├── models/           # Mongoose models
├── public/           # Static assets (images, icons, fonts)
├── styles/           # Global styles
└── package.json      # Dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/erfanHP390/website-coffee-shop.git
cd website-coffee-shop
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables  
Create a `.env.local` file in the root directory:
```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 📌 Roadmap
- [ ] Add user authentication  
- [ ] Admin dashboard for product management  
- [ ] Online ordering & cart system  
- [ ] Multi-language support (FA/EN)  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.  

---

## 📄 License
This project is licensed under the **MIT License**.  
