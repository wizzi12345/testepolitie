import { createClient } from '@supabase/supabase-js'

// Client server-side cu cheie service (NUMAI pe server!)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)
