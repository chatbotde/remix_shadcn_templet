import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useId } from "react";

function Login({ onLogin }: { onLogin: () => void }) {
  const id = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="rounded-full px-6 font-medium text-sm bg-background hover:bg-accent text-accent-foreground hover:text-accent-foreground dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:hover:text-white"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:max-w-[400px]">
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            aria-hidden="true"
          >
            <svg
              className="stroke-oklch-21.6-0.006-56.043 dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
            >
              <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
              <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
            </svg>
          </div>
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-2xl font-semibold text-slate-900 dark:text-white">Welcome back</DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-400">
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`} className="text-sm font-medium text-slate-900 dark:text-white">Email</Label>
              <Input 
                id={`${id}-email`} 
                placeholder="hi@example.com" 
                type="email" 
                required 
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-500 focus-visible:ring-oklch-21.6-0.006-56.043 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-password`} className="text-sm font-medium text-slate-900 dark:text-white">Password</Label>
              <Input
                id={`${id}-password`}
                placeholder="Enter your password"
                type="password"
                required
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-500 focus-visible:ring-oklch-21.6-0.006-56.043 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id={`${id}-remember`} 
                className="border-slate-300 data-[state=checked]:bg-oklch-21.6-0.006-56.043 data-[state=checked]:border-oklch-21.6-0.006-56.043 dark:border-slate-700"
              />
              <Label 
                htmlFor={`${id}-remember`} 
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                Remember me
              </Label>
            </div>
            <a 
              className="text-sm text-slate-600 underline-offset-4 hover:text-oklch-21.6-0.006-56.043 hover:underline dark:text-slate-400" 
              href="#"
            >
              Forgot password?
            </a>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-oklch-21.6-0.006-56.043 text-white hover:bg-oklch-21.6-0.006-56.043/90 dark:bg-white dark:text-oklch-21.6-0.006-56.043 dark:hover:bg-slate-100"
          >
            Sign in
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400">Or continue with</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-slate-200 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { Login as login };
