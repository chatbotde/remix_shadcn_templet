import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";

export const meta: MetaFunction = () => [
  { title: "Enterprise - Coming Soon" },
  { name: "description", content: "Enterprise solutions coming soon." },
];

export default function Enterprise() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black dark:text-white">
            Coming Soon
          </h1>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 