# Open Source Economy — Web App

**Next.js (App Router)** app with **Tailwind CSS**, **design tokens via CSS variables**, and an API layer powered by **Prisma + Vercel Postgres**. It ships a working **Contact Form** and **Newsletter Subscribe** flow.

---

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Prisma: Generate, Migrate, Seed](#prisma-generate-migrate-seed)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Example Prisma Models](#example-prisma-models)
- [Testing](#testing)
- [Deployment (Vercel)](#deployment-vercel)

---

## Overview

**Architecture**

- **UI**: Next.js (App Router), React Server/Client Components
- **Styling**: Tailwind + `globals.css` with CSS variables (design tokens)
- **Fonts**: Sora (default), Roboto (body) via `next/font`
- **Data**: Prisma ORM → PostgreSQL (Vercel Postgres in prod)
- **API**:
  - `POST /api/subscribe` → upsert a `Subscription`
  - `POST /api/contact` → validate + (optionally) store a `ContactMessage`

---

## Folder Structure

```txt
app/
  api/
    contact/route.ts
    subscribe/route.ts
  components/
    layout/
      Nav.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Log4Shell.tsx
      RiskScore.tsx
      ContactForm.tsx
    primitives/
      Card.tsx
      GradientButton.tsx
  layout.tsx
  globals.css
lib/
  prisma.ts
  theme.ts
prisma/
  schema.prisma
```

---

## Local Setup

**Prerequisites**

- Node.js 18+ (20+ recommended)
- PNPM / Yarn / npm
- PostgreSQL (optional locally; you can also point directly to Vercel Postgres)
- Vercel CLI (optional): `npm i -g vercel`

**Install**

```bash
git clone <open-source-economy-repo-url>
cd <project>
pnpm install   # or npm/yarn
```

---

## Environment Variables

Create **`.env.local`** in the project root.

### Option A — Local Postgres

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/ose_db?schema=public"
# Only if you add 'directUrl' in schema.prisma:
# DIRECT_URL="postgresql://USER:PASSWORD@localhost:5432/ose_db?schema=public"
```

### Option B — Vercel Postgres (recommended for prod)

From Vercel → Storage → Postgres → **Prisma** tab:

```env
# Use the Prisma-optimized pooled URL
DATABASE_URL="<POSTGRES_PRISMA_URL>"

```

---

## Prisma: Generate, Migrate, Seed

> You can run Prisma via `npx prisma` (no global install needed).  
> If you install globally, you can run `prisma ...` anywhere without `npx`.

**Generate client**

```bash
npx prisma generate
```

**Create/apply migrations (dev)**

```bash
npx prisma migrate dev --name init
```

---

## Running the App

```bash
pnpm dev   # or npm run dev / yarn dev
# http://localhost:3000
```

---

## API Endpoints

### `POST /api/subscribe`

- **Body**:
  ```json
  { "email": "user@example.com" }
  ```
- **Behavior**: Upserts `Subscription` (normalizes to lowercase)

### `POST /api/contact`

- **Body**:
  ```json
  {
    "name": "Ada",
    "email": "ada@example.com",
    "linkedin": "",
    "message": "Hello",
    "honeypot": ""
  }
  ```
- **Behavior**: Validates inputs; logs/stores (depending on your implementation)
- **Response**:
  ```json
  { "ok": true }
  ```

---

## Example Prisma Models

`prisma/schema.prisma`:

````prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Subscription {
  id        BigInt   @id @default(autoincrement())
  email     String   @unique
  status    String   @default("subscribed")
  createdAt DateTime @default(now())
}

model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  linkedin  String?  @default("")
  message   String
  ip        String?  @default("")
  createdAt DateTime @default(now())
}

## Testing

### Quick manual (cURL)

**Subscribe**

```bash
curl -i -X POST http://localhost:3000/api/subscribe   -H "Content-Type: application/json"   -d '{"email":"test@example.com"}'
````

**Contact**

```bash
curl -i -X POST http://localhost:3000/api/contact   -H "Content-Type: application/json"   -d '{"name":"Ada","email":"ada@ex.com","linkedin":"","message":"Hello"}'
```

## Deployment (Vercel)

1. **Create Vercel Project** and link your Git repo.
2. **Add Vercel Postgres** (Storage → Postgres).
3. **Env Vars** (Project → Settings → Environment Variables):
   - `DATABASE_URL = <POSTGRES_PRISMA_URL>`
4. **Build Settings** (to apply migrations on deploy):
   - Build Command:
     ```bash
     pnpm prisma migrate deploy && pnpm build
     ```
5. **Deploy** (push to the connected Git branch).

**Alternative**: From local, once Vercel env vars are configured:

```bash
npx prisma migrate deploy    # applies migrations to the production DB
vercel --prod                # optional CLI deployment
```

---
