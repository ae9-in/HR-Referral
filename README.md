# HR Referral Platform — Refentra

A full-stack employee referral management system built with **Next.js** (frontend) and **NestJS** (backend).

---

## 📁 Project Structure

```
HR-Referral/
├── frontend/          ← Next.js 14 web application
│   ├── src/
│   │   ├── app/       ← Pages (auth, dashboard, admin, referrals)
│   │   ├── components/← UI components
│   │   ├── context/   ← Global state (AppContext)
│   │   └── lib/       ← Axios API client
│   ├── public/
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/           ← NestJS REST API
│   ├── src/
│   │   ├── auth/      ← Login, OTP, JWT
│   │   ├── referrals/ ← Referral CRUD
│   │   ├── positions/ ← Job positions
│   │   ├── users/     ← User management
│   │   └── main.ts
│   ├── prisma/        ← Prisma schema & SQLite database
│   │   └── schema.prisma
│   ├── scripts/       ← Seed & utility scripts
│   │   ├── seed-admin.js
│   │   ├── seed-user.js
│   │   ├── seed-referrals.js
│   │   └── verify-users.js
│   ├── docker-compose.yml
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
# Setup database
npm run prisma:push
# Seed admin user
npm run prisma:seed
# Seed sample data (optional)
npm run seed:data
# Start dev server
npm run dev
# API runs at: http://localhost:4000/api
```

### 2. Frontend Setup
```bash
cd frontend
npm install
# Start dev server
npm run dev
# App runs at: http://localhost:1234
```

---

## 🔑 Default Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin (HR)** | admin@refentra.com | admin123 |
| **Employee** | employee@refentra.com | user123 |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React 18, TailwindCSS, Framer Motion |
| Backend | NestJS 10, Passport.js, JWT |
| Database | SQLite (local) via Prisma ORM |
| Email | Nodemailer + Gmail SMTP |

---

## ✨ Features

### User Side
- Register / Login (email + password or OTP)
- Submit referrals with candidate details
- Resume upload support
- Real-time referral status tracking

### Admin / HR Side
- Secure admin login
- Dashboard with all referrals
- Update referral status (New / Contacted / Selected / Rejected)
- Search & filter referrals
- Export data to CSV
