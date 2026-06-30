import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.error(
    'Missing Supabase env vars. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY ' +
      'in frontend/.env.local (dev) or in the Vercel project Environment Variables (prod).',
  )
}

// Safe to use the anon key in the browser bundle by design — Row Level
// Security policies (see supabase/schema.sql) control what it can actually do.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
