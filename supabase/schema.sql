-- Erna Esa Studio — Supabase schema
-- Run this once in the Supabase SQL Editor (Project > SQL Editor > New query).
-- Covers the "Book Appointment" feature (skripsi BAB IV 4.2.9.3.2 ERD: Appointment entity).

create extension if not exists "pgcrypto";

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  treatment text not null,
  appointment_date date not null,
  notes text,
  status text not null default 'pending', -- pending | confirmed | cancelled
  created_at timestamptz not null default now()
);

-- Row Level Security: the public website only INSERTS booking requests.
-- Nobody can read/update/delete with the public anon key — only the
-- service_role key (used server-side / future admin dashboard) can.
alter table public.appointments enable row level security;

drop policy if exists "Public can create appointments" on public.appointments;
create policy "Public can create appointments"
  on public.appointments
  for insert
  to anon
  with check (true);

-- No select/update/delete policy for `anon` is created on purpose:
-- without a matching policy, RLS denies those operations by default.
