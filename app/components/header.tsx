import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { login as LoginDialog } from "~/components/login-dialog";
import { Signup } from "~/components/sign-up";
import { Link } from "@remix-run/react";
import * as React from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "~/components/ui/sheet";
import { useMediaQuery } from "~/hooks/use-media-query";
// import { LogoutDialog } from "~/components/logout-dialog"; // If you want logout dialog

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { to: "/pricing", text: "Pricing" },
    { to: "/features", text: "Features" },
    { to: "/enterprise", text: "Enterprise" },
    { to: "/download", text: "download" },
    { to: "/docs", text: "docs" },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-gray-800 bg-black p-4">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center">
          <img src="/logo-light.png" alt="Sonicthing Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-white">Sonicthinking</span>
        </Link>
      </div>

      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-neutral-400 bg-neutral-900">
            <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-semibold">Sonicthinking</span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    className="text-lg hover:text-blue-400"
                  >
                    {link.text}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <LoginDialog onLogin={() => setIsOpen(false)} />
              <Signup onSignup={() => setIsOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <Link to={link.to}>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-black text-white hover:bg-neutral-700 hover:text-white`}>
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-3 md:gap-4">
            <LoginDialog onLogin={() => {}} />
            <Signup onSignup={() => {}} />
            {/* {isAuthenticated && <LogoutDialog onLogout={() => {}} />} */}
          </div>
        </>
      )}
    </header>
  );
}