import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b bg-background p-4">
      <div className="flex items-center gap-2">
        <img src="/logo-light.png" alt="Sonicthing Logo" className="h-8 w-8" />
        <Link to="/" className="text-xl font-semibold">Sonicthing</Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Enterprise
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Forum
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Button variant="outline">
            Sign in
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
}