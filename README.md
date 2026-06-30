# Erna Esa Studio — Website

React (Vite) website for Erna Esa Studio salon, built from the UI/UX design in
the skripsi *"Penerapan Design Thinking dan Metode Prototyping dalam
Perancangan Desain UI/UX Website Layanan Salon Erna Esa Studio Menggunakan
Figma"*. Frontend talks directly to Supabase (Postgres) for the appointment
booking feature.

## Project layout

```
ErnaSalon/
├── frontend/      # React + Vite + Tailwind site (this is what's deployed to Vercel)
├── backend/       # Unfinished Express API scaffold — not used by the live site yet,
│                  # kept for a possible future admin dashboard. Not deployed.
└── supabase/
    └── schema.sql # Run this in Supabase SQL Editor to create the appointments table
```

The booking form on `/book-appointment` writes directly to Supabase using the
public **anon** key (safe to expose — see "Why no backend?" below). The
`backend/` folder is left as-is; it currently won't even start (`npm run dev`
will throw, since `src/routes/*` and `src/middleware/errorHandler.js` it
imports don't exist yet) and isn't wired into the deployed site.

## 1. Set up Supabase

1. Go to your Supabase project → **SQL Editor** → New query.
2. Paste the contents of `supabase/schema.sql` and run it. This creates the
   `appointments` table with Row Level Security so the public site can only
   `INSERT` new bookings — not read, edit, or delete anyone else's data.
3. Go to **Project Settings → API** and copy the **Project URL** and the
   **anon public** key (NOT the `service_role` key).

## 2. Run the frontend locally

```bash
cd frontend
npm install
cp .env.example .env.local   # then fill in VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

> A `.env.local` with real values has already been created for you, copied
> from the Supabase project you had in `backend/.env.example`. Double check it
> still matches your Supabase project before running.

## 3. Deploy to Vercel

1. Push this repo to GitHub (`dimasboim/ErnaSalon`).
2. In Vercel: **New Project** → import the GitHub repo.
3. Because this is a monorepo, set **Root Directory** to `frontend` in the
   Vercel project's "Configure Project" step (or later under
   Settings → General → Root Directory).
4. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`
   (Vercel detects these automatically once Root Directory = `frontend`).
5. Add Environment Variables in Vercel (Settings → Environment Variables):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SALON_WHATSAPP` (optional, defaults to the number already in the code)
6. Deploy. `frontend/vercel.json` already configures the SPA rewrite so
   client-side routes (e.g. `/book-appointment`) work on refresh/direct link.

## Why no backend for booking?

Vercel runs serverless — it can't host a long-running `app.listen()` Express
server the way `backend/server.js` expects. Supabase is designed to be called
straight from the browser with its anon key; Row Level Security (not key
secrecy) is what protects your data. That's why the booking form calls
`supabase.from('appointments').insert(...)` directly instead of going through
a custom API. If you later want an admin dashboard to view/manage bookings,
that's a good use for finishing the `backend/` Express API (using the
`service_role` key server-side only) or a protected admin page in the
frontend using Supabase Auth.

## ⚠️ Security note

`backend/.env.example` previously contained **real Supabase credentials,
including the service_role key** — that file has been rewritten to use
placeholders, and the real values were moved to `backend/.env` (gitignored).
Since the service_role key was pasted into an AI chat and various local
files, **rotate it** in Supabase → Settings → API → "Reset service_role
secret" before relying on this project for anything production-sensitive, and
generate a new `JWT_SECRET` if you ever finish the `backend/` API.

## Content placeholders

Prices, treatment names, gallery photos, and product images in
`frontend/src/data/siteData.js` are illustrative placeholders (picsum.photos
images, approximate prices) mirroring the Figma wireframes from the skripsi.
Replace them with the salon's real price list and photos before going live —
put real images in `frontend/public/images/` and update the `img` fields.
