// Supabase client configuration for browser
import { createBrowserClient } from '@supabase/ssr';
import { type SupabaseClient } from '@supabase/supabase-js';

// Add ENV type to Window interface
declare global {
  interface Window {
    ENV?: {
      SUPABASE_URL?: string;
      SUPABASE_ANON_KEY?: string;
    };
  }
}

let browserClient: SupabaseClient | undefined;

export function getSupabaseBrowserClient() {
  if (browserClient) {
    return browserClient;
  }

  // Ensure this code only runs in the browser
  if (typeof document === 'undefined') {
    return null;
  }
  
  const supabaseUrl = window.ENV?.SUPABASE_URL;
  const supabaseAnonKey = window.ENV?.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    // You might want to throw an error here or handle it gracefully
    return null;
  }

  browserClient = createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  );

  return browserClient;
}