import { Button } from "~/components/ui/button";
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
import { Sparkles, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { getSupabaseBrowserClient } from "~/lib/supabase/client";

function Signup({ onSignup }: { onSignup: () => void }) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
    setIsOpen(false);
  };

  const handleGoogleSignup = async () => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleLoginClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="rounded-full px-6 font-medium text-sm bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200"
        >
          Sign up
        </Button>
      </DialogTrigger>
      <DialogContent className="border-0 bg-white p-0 shadow-2xl dark:bg-black sm:max-w-[400px] overflow-hidden">
        {/* Header with black background */}
        <div className="bg-black p-6 text-white">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
          <DialogHeader className="text-center space-y-1">
            <DialogTitle className="text-xl font-bold">Create an account</DialogTitle>
            <DialogDescription className="text-gray-300 text-sm">
              Enter your information to get started
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor={`${id}-name`} className="text-sm font-semibold text-black dark:text-white">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    id={`${id}-name`} 
                    placeholder="Enter your full name" 
                    type="text" 
                    required 
                    className="pl-10 h-10 border-gray-200 bg-white text-black placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:border-black dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:ring-white dark:focus-visible:border-white transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor={`${id}-email`} className="text-sm font-semibold text-black dark:text-white">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    id={`${id}-email`} 
                    placeholder="Enter your email" 
                    type="email" 
                    required 
                    className="pl-10 h-10 border-gray-200 bg-white text-black placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:border-black dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:ring-white dark:focus-visible:border-white transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor={`${id}-password`} className="text-sm font-semibold text-black dark:text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id={`${id}-password`}
                    placeholder="Create a strong password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10 h-10 border-gray-200 bg-white text-black placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:border-black dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:ring-white dark:focus-visible:border-white transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-10 bg-black text-white hover:bg-gray-800 font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Create your account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-500 dark:bg-black dark:text-gray-400 font-medium">Or continue with</span>
              </div>
            </div>

            <Button 
              onClick={handleGoogleSignup}
              type="button"
              variant="outline" 
              className="w-full h-10 border-gray-200 bg-white text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition-all duration-200"
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
              Continue with Google
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={handleLoginClick}
                  className="text-black hover:text-gray-700 font-semibold underline-offset-4 hover:underline dark:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Login
                </button>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                By signing up you agree to our{" "}
                <a 
                  className="text-black hover:text-gray-700 underline-offset-4 hover:underline dark:text-white dark:hover:text-gray-300 transition-colors" 
                  href="#"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { Signup };
