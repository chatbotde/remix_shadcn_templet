import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";

function LogoutDialog({ onLogout }: { onLogout: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="border-slate-200 bg-white text-slate-900 hover:bg-slate-100 hover:text-oklch-21.6-0.006-56.043 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
        >
          Logout
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
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16,17 21,12 16,7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </div>
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-2xl font-semibold text-center text-slate-900 dark:text-white">Sign out</DialogTitle>
            <DialogDescription className="text-center text-slate-600 dark:text-slate-400">
              Are you sure you want to sign out of your account?
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="mt-8 flex gap-3">
          <Button
            variant="outline"
            className="flex-1 border-slate-200 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-oklch-21.6-0.006-56.043 text-white hover:bg-oklch-21.6-0.006-56.043/90 dark:bg-white dark:text-oklch-21.6-0.006-56.043 dark:hover:bg-slate-100"
            onClick={handleLogout}
          >
            Sign out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { LogoutDialog };
