import type { MetaFunction } from "@remix-run/node";
import { login as LoginComponent } from "~/components/login-dialog";

export const meta: MetaFunction = () => {
  return [
    { title: "Login - Sonicthinking" },
    { name: "description", content: "Login to your account" },
  ];
};

export default function Login() {
  const handleLogin = () => {
    // Handle login logic here
    console.log("Login successful");
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="w-full max-w-md">
        <LoginComponent onLogin={handleLogin} />
      </div>
    </div>
  );
}
