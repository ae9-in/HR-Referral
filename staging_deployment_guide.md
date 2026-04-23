# 🚀 Refentra — Staging Deployment Guide

> **Stack**: NestJS (Backend) · Next.js 14 (Frontend) · Supabase PostgreSQL (Database)  
> **Services**: Render (Backend) · Vercel (Frontend) · Supabase (DB)

---

## ⚠️ Pre-Deployment Checklist

> [!IMPORTANT]
> Complete ALL of these before deploying.

- [ ] Supabase project is **active** (not paused) — visit [supabase.com/dashboard](https://supabase.com/dashboard)
- [ ] Supabase DB direct connection URL obtained (port **5432**)
- [ ] Git repo pushed to GitHub
- [ ] Render account ready at [render.com](https://render.com)
- [ ] Vercel account ready at [vercel.com](https://vercel.com)

---

## 🗄️ Step 1 — Fix Supabase (Database)

Your Supabase free-tier project auto-pauses after 1 week of inactivity.

### 1a. Wake the project
1. Go to → [supabase.com/dashboard](https://supabase.com/dashboard)
2. Find project **`qvxslvbeskuoindssxqc`**
3. If it shows **"Paused"** → click **"Restore project"**
4. Wait ~2 minutes for it to become active

### 1b. Get the correct DATABASE_URL
1. In Supabase dashboard → **Settings → Database**
2. Under **"Connection string"** tab → select **"URI"**
3. Make sure **"Display connection pooler"** is **OFF** (direct connection, port 5432)
4. Copy the URI — it looks like:
```
postgresql://postgres:[PASSWORD]@db.qvxslvbeskuoindssxqc.supabase.co:5432/postgres
```

> [!WARNING]
> Use port **5432** (direct), NOT port **6543** (pgBouncer pooler). Prisma migrations require the direct connection.

---

## 🖥️ Step 2 — Deploy Backend to Render

### 2a. Prepare `vercel.json` is NOT used for Render
The backend already has a `start` script: `node dist/main.js`

### 2b. Create Web Service on Render
1. Go to [render.com/dashboard](https://dashboard.render.com) → **New → Web Service**
2. Connect your **GitHub repo** → select **`refentra`**
3. Configure:

| Setting | Value |
|---|---|
| **Name** | `refentra-backend-staging` |
| **Root Directory** | `backend` |
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Plan** | Free (or Starter for staging) |

### 2c. Set Environment Variables on Render
In Render → **Environment** tab, add:

```env
DATABASE_URL=postgresql://postgres:[PASS]@db.qvxslvbeskuoindssxqc.supabase.co:5432/postgres
PORT=4000
JWT_SECRET=refhire-staging-secret-key-2024-CHANGE-THIS
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=shilpak2k23@gmail.com
SMTP_PASS=utez njiu ovfc axmq
SMTP_FROM="Refentra Auth" <shilpak2k23@gmail.com>
NODE_ENV=staging
```

> [!CAUTION]
> Generate a strong `JWT_SECRET` for staging. Do NOT reuse the dev key in production.

### 2d. Deploy
Click **"Create Web Service"** → Render will build and deploy.  
Your backend staging URL will be: `https://refentra-backend-staging.onrender.com`

---

## 🌐 Step 3 — Deploy Frontend to Vercel

### 3a. Update CORS in backend `main.ts`
The backend already allows `*.vercel.app` — no changes needed ✅

### 3b. Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Configure:

| Setting | Value |
|---|---|
| **Root Directory** | `frontend` |
| **Framework Preset** | Next.js |
| **Build Command** | `next build` |
| **Output Directory** | `.next` |

### 3c. Set Environment Variables on Vercel
In Vercel → **Settings → Environment Variables**:

```env
NEXT_PUBLIC_API_URL=https://refentra-backend-staging.onrender.com
```

> [!NOTE]
> Set this for **Preview** and **Production** environments both.

### 3d. Deploy
Click **Deploy** → Vercel builds and deploys.  
Your frontend staging URL: `https://refentra-staging.vercel.app`

---

## 🔒 Step 4 — Update Backend CORS for Staging

In `d:\refentra\backend\src\main.ts`, the CORS config already allows `*.vercel.app`:
```ts
if (!origin || allowed.includes(origin) || /\.vercel\.app$/.test(origin)) {
  callback(null, true);
}
```
✅ No changes needed — any `*.vercel.app` domain is permitted.

---

## ✅ Step 5 — Post-Deployment Verification

Run these checks after deployment:

### Backend Health
```
GET https://refentra-backend-staging.onrender.com/api/auth/login
```
Expected: `401 Unauthorized` (endpoint exists, not 404)

### Frontend
- Open `https://refentra-staging.vercel.app`
- Login page should load
- Admin login: `admin@refentra.com` (seed the DB first)

### Seed the Staging DB
After backend is live, run locally pointing to staging DB:
```powershell
# In d:\refentra\backend
$env:DATABASE_URL="postgresql://postgres:[PASS]@db.qvxslvbeskuoindssxqc.supabase.co:5432/postgres"
npm run prisma:seed
```

---

## 🏠 Local Dev Status

| Service | Status | URL |
|---|---|---|
| **Frontend** | ✅ Running | http://localhost:1234 |
| **Backend** | ✅ Running | http://localhost:4000/api |
| **Database** | ⚠️ Paused | Needs Supabase restore |

---

## 🔄 Deployment Architecture

```mermaid
graph TD
    U[User Browser] --> V[Vercel - Frontend\nNext.js 14]
    V --> R[Render - Backend\nNestJS + Prisma]
    R --> S[Supabase\nPostgreSQL]
    R --> G[Gmail SMTP\nEmail / OTP]
```

---

## 📋 Environment Summary

### Backend `.env` (local dev)
```env
DATABASE_URL="postgresql://postgres:...@db.qvxslvbeskuoindssxqc.supabase.co:5432/postgres"
PORT=4000
JWT_SECRET=refhire-dev-secret-key-2024
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="shilpak2k23@gmail.com"
SMTP_PASS="utez njiu ovfc axmq"
SMTP_FROM='"Refentra Auth" <shilpak2k23@gmail.com>'
```

### Frontend `.env.local` (local dev)
```env
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

### Frontend (Vercel Staging)
```env
NEXT_PUBLIC_API_URL="https://refentra-backend-staging.onrender.com"
```
