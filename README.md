# 📚 MyProject - VS Code Learning Hub

> แพลตฟอร์มการเรียนรู้แบบโต้ตอบสำหรับการเรียน HTML, CSS, JavaScript, Git และ GitHub

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

---

## 📖 สรุปโปรเจค

**MyProject** เป็นแพลตฟอร์มการเรียนรู้ดิจิทัลที่ออกแบบมาเพื่อให้ครูและนักเรียนสามารถเรียนรู้เทคโนโลยี Web Development ได้อย่างมีประสิทธิภาพ 

พบได้ว่าโปรเจคนี้มีคุณสมบัติพิเศษดังนี้:
- 📱 ตอบสนองต่อทุกขนาดอุปกรณ์ (Responsive Design)
- 🌙 โหมดมืด/สว่างเพื่อประสบการณ์ผู้ใช้ที่ดี
- 🎓 บทเรียน, ควิซ และสื่อการเรียนรู้แบบมัลติมีเดีย
- 🔧 ติดตั้งและใช้งานได้ง่าย
- 💻 สนับสนุนหลายภาษา

---

## ✨ ฟีเจอร์หลัก

### 🏠 หน้าแรก (Home Page)
- ข้อมูลทั่วไปเกี่ยวกับแพลตฟอร์ม
- ปุ่มเข้าถึงหลักสูตรการเรียนรู้
- ข้อมูล YouTube, GitHub, และ VSCode

### 📝 หน้าบทเรียน (Lessons Page)
- รายการบทเรียนที่จัดแบ่งหมวดหมู่
- การแสดงรายละเอียดของบทเรียน
- ติดตามความคืบหน้า

### 🎯 หน้าควิซ (Quiz Page)
- แบบทดสอบเพื่อประเมินความเข้าใจ
- ระบบการให้คะแนนอัตโนมัติ
- ผลลัพธ์ที่แสดงรายละเอียด

### 🛠️ หน้าติดตั้ง (Install Page)
- คำแนะนำขั้นต่อขั้นในการติดตั้ง
- การสเตป environment
- การ setup โปรเจค

### 🔧 หน้า VS Code
- คู่มือการใช้ VS Code
- Keyboard Shortcuts
- Extensions ที่แนะนำ
- Themes และการปรับแต่ง

### 🌐 หน้า Git
- บทช่วยสอน Version Control
- คำสั่ง Git พื้นฐาน
- Workflow การทำงาน

### 📦 หน้า GitHub
- ข้อมูลเกี่ยวกับ GitHub Repository
- วิธีการใช้งาน
- Contributing Guidelines

---

## 🚀 วิธีการติดตั้ง

### ขั้นตอนที่ 1: Clone Repository
```bash
git clone https://github.com/your-username/MyProject.git
cd MyProject
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies
```bash
npm install
```

### ขั้นตอนที่ 3: รัน Development Server
```bash
npm run dev
```

### ขั้นตอนที่ 4: เปิดในเบราว์เซอร์
เข้าไปที่ `http://localhost:5173` (หรือ port ที่แสดงใน terminal)

---

## 💻 วิธีการใช้งาน

### สำหรับผู้เรียน
1. **เข้าสู่แพลตฟอร์ม** - เปิด URL ของเว็บไซต์
2. **เลือกบทเรียน** - ดูรายการบทเรียนและเลือก
3. **เรียนรู้** - อ่านเนื้อหาและทำตามตัวอย่าง
4. **ทำควิซ** - ทดสอบความเข้าใจด้วยแบบทดสอบ
5. **บันทึกความคืบหน้า** - ระบบจะบันทึกโดยอัตโนมัติ

### สำหรับผู้พัฒนา
1. **ติดตั้งโปรเจค** - ตามขั้นตอนการติดตั้งข้างบน
2. **เปิด VS Code** - `code .`
3. **ทำการแก้ไข** - ทำการเปลี่ยนแปลงในไฟล์ต่างๆ
4. **บันทึกและทดสอบ** - บันทึกแล้วเบราว์เซอร์จะ refresh อัตโนมัติ
5. **Commit และ Push** - อัปโหลดการเปลี่ยนแปลงขึ้น GitHub

---

## 📁 โครงสร้างโปรเจค

```
MyProject/
├── index.html                 # หน้าแรกของเว็บไซต์
├── main.jsx                   # Entry point ของ React
├── App.jsx                    # คอมโพเนนต์หลัก
├── package.json               # Dependencies และ scripts
├── README.md                  # ไฟล์นี้
│
├── components/                # คอมโพเนนต์ React
│   ├── Navbar.jsx            # แถบนำเวิเกศน์ด้านบน
│   └── LessonCard.jsx        # การ์ดบทเรียน
│
├── pages/                     # หน้าต่างๆ
│   ├── Home.jsx              # หน้าแรก
│   ├── Lesson.jsx            # หน้าบทเรียน
│   ├── Quiz.jsx              # หน้าควิซ
│   ├── Start.jsx             # หน้าเริ่มต้น
│   └── Install.jsx           # หน้าติดตั้ง
│
├── css/                       # ไฟล์ CSS สำหรับสไตล์
│   ├── style.css             # สไตล์หลัก
│   ├── home.css              # สไตล์หน้าแรก
│   ├── install.css           # สไตล์หน้าติดตั้ง
│   ├── responsive.css        # Responsive Design
│   └── darkmode.css          # สไตล์โหมดมืด
│
├── js/                        # ไฟล์ JavaScript
│   ├── script.js             # Script หลัก
│   ├── darkmode.js           # ตรรมชาติของโหมดมืด
│   └── copy.js               # ฟังก์ชันคัดลอก
│
├── images/                    # รูปภาพและสื่อ
│
└── git.html                   # หน้า Git Guide
    github.html               # หน้า GitHub Guide
    install.html             # หน้าติดตั้ง
    vscode.html              # หน้า VS Code Guide
```

---

## 📚 Documentation ของ Components

### 🔧 Components หลัก

#### **Navbar Component** (`components/Navbar.jsx`)
- แสดงแถบนำเวิเกศน์ด้านบนของเว็บไซต์
- รองรับ Dark Mode Toggle
- Responsive บนมือถือ

#### **LessonCard Component** (`components/LessonCard.jsx`)
- แสดงการ์ด บทเรียนแต่ละบท
- ปุ่มเข้าถึงบทเรียน
- ข้อมูลเมตา (เวลา, ความยาก)

### 📄 Pages หลัก

#### **Home Page** (`pages/Home.jsx`)
- หน้าแรกของแพลตฟอร์ม
- Hero section พร้อมปุ่ม CTA
- Features highlight

#### **Lesson Page** (`pages/Lesson.jsx`)
- แสดงรายการบทเรียน
- ฟิลเตอร์และค้นหา
- Pagination

#### **Quiz Page** (`pages/Quiz.jsx`)
- แบบทดสอบแบบปรนัย
- ระบบให้คะแนนอัตโนมัติ
- ผลลัพธ์และ Feedback

---

## 🎨 Guide สีและ Styling

### Color Scheme
- **Primary**: Purple/Blue Gradient
- **Secondary**: Red/Orange
- **Text**: Dark Gray / White (Dark Mode)
- **Background**: Light Gray / Dark Blue (Dark Mode)

### Typography
- **Headings**: 2em - 2.5em
- **Body Text**: 1em
- **Small Text**: 0.9em - 0.95em

---

## 🌍 Technologies Used

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling & Layout
- **JavaScript (ES6+)** - Interactivity
- **React** - UI Components & State Management

### Build & Tooling
- **Vite** - Modern build tool
- **npm** - Package management
- **Git** - Version control

### Development
- **VS Code** - Code editor
- **GitHub** - Repository hosting
- **GitHub Pages** - Deployment (optional)

---

## 🔧 Configuration Files

### `package.json`
ระบุ dependencies และ scripts:
```json
{
  "name": "myproject",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  }
}
```

### CSS Variables
กำหนด global variables ใน `css/style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #f5f5f5;
}
```

---

## 🤝 วิธีการมีส่วนร่วม (Contributing)

### ขั้นตอนการ Contribute:

1. **Fork และ Clone**
   ```bash
   git clone https://github.com/your-username/MyProject.git
   cd MyProject
   ```

2. **สร้าง Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **ทำการแก้ไขและ Commit**
   ```bash
   git add .
   git commit -m "Add: YourFeatureName"
   ```

4. **Push ไปยัง Repository**
   ```bash
   git push origin feature/YourFeatureName
   ```

5. **สร้าง Pull Request**
   - ไปยัง GitHub และสร้าง Pull Request
   - อธิบายการเปลี่ยนแปลง

### Contribution Guidelines:
- ทำให้แน่ใจว่า Code ตามมาตรฐาน
- เพิ่ม Comments สำหรับ Logic ที่ซับซ้อน
- ทดสอบก่อน Commit
- ยึดตามชื่อ Branch ที่มาตรฐาน

---

## 🐛 Troubleshooting

### ปัญหา: Port 5173 ถูกใช้งาน
```bash
# ใช้ port อื่น
npm run dev -- --port 3000
```

### ปัญหา: Module not found
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

### ปัญหา: Dark Mode ไม่ทำงาน
- ตรวจสอบ `js/darkmode.js`
- ตรวจสอบ CSS ใน `css/darkmode.css`
- ล้าง Browser Cache

---

## 📞 Support & Contact

- **Issues**: สร้าง Issue บน GitHub
- **Email**: support@myproject.com
- **Documentation**: [คลิกที่นี่](./README.md)

---

## 📝 Changelog

### Version 1.0.0 (2026-06-29)
- ✅ Initial Release
- ✅ Home, Lesson, Quiz Pages
- ✅ Dark Mode Feature
- ✅ Responsive Design
- ✅ Git & GitHub Guides
- ✅ VS Code Guide

---

## 📜 License

โปรเจคนี้ได้รับใบอนุญาตภายใต้ **MIT License** - ดูไฟล์ [LICENSE](./LICENSE) สำหรับรายละเอียดเพิ่มเติม

```
MIT License

Copyright (c) 2026 MyProject Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🌟 ขอบคุณ

ขอขอบคุณทุกคนที่มีส่วนร่วมในการพัฒนาโปรเจคนี้! ❤️

---

<div align="center">

**Made with ❤️ by MyProject Team**

[⬆ กลับไปด้านบน](#-myproject---vs-code-learning-hub)

</div>
