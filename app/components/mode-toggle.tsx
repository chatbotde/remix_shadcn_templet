import { Moon, Sun } from "lucide-react"
import { Theme, useTheme } from "remix-themes"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setTheme] = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative h-9 w-9 rounded-full text-slate-300 hover:bg-oklch-21.6-0.006-56.043/10 hover:text-white"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="mt-2 w-36 rounded-lg border border-slate-800 bg-oklch-21.6-0.006-56.043 p-2"
      >
        <DropdownMenuItem 
          onClick={() => setTheme(Theme.LIGHT)}
          className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme(Theme.DARK)}
          className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}