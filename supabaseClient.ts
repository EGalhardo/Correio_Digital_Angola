import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

// Load client-side or backend environment variables safely
const supabaseUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_URL) || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

// Fallback warning in console if keys are missing during development
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase integration: Missing VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY. ' +
    'Please set these environment variables to connect to your database.'
  );
}

// Create and export the Supabase Client. If running in Node, pass ws transport for realtime
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
  typeof window === 'undefined' ? { realtime: { transport: ws as any } } : undefined
);
