import type { MetaFunction } from "@remix-run/node";
import { Signup } from "~/components/sign-up";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up - Sonicthinking" },
    { name: "description", content: "Create your account" },
  ];
};

export default function SignupPage() {
  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signup successful");
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="w-full max-w-md">
        <Signup onSignup={handleSignup} />
      </div>
    </div>
  );
}
