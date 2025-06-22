// Supabase server client
import { createServerClient, parse, serialize } from '@supabase/ssr';
import { type CookieOptions } from '@remix-run/node';

export function createServerSupabaseClient({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) {
  const supabaseUrl = process.env.SUPABASE_URL as string;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables for server');
  }
  
  const cookies = parse(request.headers.get('Cookie') ?? '');
  const headers = response.headers;

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(key) {
        return cookies[key];
      },
      set(key, value, options) {
        headers.append('Set-Cookie', serialize(key, value, options as CookieOptions));
      },
      remove(key, options) {
        headers.append('Set-Cookie', serialize(key, '', options as CookieOptions));
      },
    },
  });
}