import type { MetaFunction } from "@remix-run/node";
import { LogoutDialog } from "~/components/logout-dialog";

export const meta: MetaFunction = () => {
  return [
    { title: "Logout - Sonicthinking" },
    { name: "description", content: "Logout from your account" },
  ];
};

export default function Logout() {
  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout successful");
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="w-full max-w-md">
        <LogoutDialog onLogout={handleLogout} />
      </div>
    </div>
  );
}
