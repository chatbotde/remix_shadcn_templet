import { type LoaderFunctionArgs, redirect } from '@remix-run/node'
import { createServerSupabaseClient } from '~/lib/supabase/server'

export async function loader({ request }: LoaderFunctionArgs) {
  const response = new Response()
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') || '/'

  if (code) {
    const supabase = createServerSupabaseClient({ request, response })
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return redirect(next, {
        headers: response.headers,
      })
    }
  }

  // return the user to an error page with instructions
  return redirect('/', {
    headers: response.headers,
  })
} 