import { useEffect, useState } from "react";

export default function AuthError() {
  const [errorInfo, setErrorInfo] = useState({
    error: "",
    error_code: "",
    error_description: "",
  });

  // Errors from Supabase are in the URL hash, so we need to parse them on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1)); // remove #
      setErrorInfo({
        error: params.get("error") || "",
        error_code: params.get("error_code") || "",
        error_description: params.get("error_description") || "",
      });
    }
  }, []);


  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>Authentication Error</h1>
      <p>There was an error during the authentication process.</p>
      
      {errorInfo.error_description && (
        <pre style={{ background: '#fee', border: '1px solid #f00', color: '#333', padding: '1em', borderRadius: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          <strong>Error:</strong> {errorInfo.error} <br />
          <strong>Code:</strong> {errorInfo.error_code} <br />
          <strong>Description:</strong> {decodeURIComponent(errorInfo.error_description.replace(/\\+/g, ' '))}
        </pre>
      )}

      <p>
        This usually happens due to a misconfiguration between your Supabase and Google Cloud projects. Please check the following:
      </p>
      <ol>
        <li>
          In your <strong>Supabase Project Dashboard</strong> (under Authentication -&gt; Providers -&gt; Google):
          <ul>
            <li>Ensure the "Client ID" and "Client Secret" are copied correctly from your Google Cloud project.</li>
          </ul>
        </li>
        <br/>
        <li>
          In your <strong>Google Cloud Console</strong> (under APIs & Services -&gt; Credentials):
          <ul>
            <li>
              Select your OAuth 2.0 Client ID and make sure the correct "Authorized redirect URI" is listed.
            </li>
            <li>
              This URI is provided by Supabase and should look exactly like this: 
              <br/>
              <code>https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback</code>
              <br/>
              (You can find this exact URI in your Supabase dashboard under Authentication -&gt; Providers -&gt; Google).
            </li>
          </ul>
        </li>
      </ol>
      <p>After verifying your configuration, please try signing in again.</p>
    </div>
  )
} 