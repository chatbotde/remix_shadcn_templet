import type { MetaFunction } from "@remix-run/node";
import { buttonVariants } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { useMediaQuery } from "~/hooks/use-media-query";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "@remix-run/react";
import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sonicthinking" },
    { name: "description", content: "Choose the perfect plan for your AI assistant needs. Free tier available with premium features for power users." },
  ];
};

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  featured?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to premium  llm models.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleToggle = useCallback((checked: boolean) => {
    setIsMonthly(!checked);
    if (checked) {
      try {
        // Trigger confetti from center of screen instead of specific element
        confetti({
          particleCount: 50,
          spread: 60,
          origin: {
            x: 0.5,
            y: 0.5,
          },
          colors: [
            "hsl(var(--primary))",
            "hsl(var(--accent))",
            "hsl(var(--secondary))",
            "hsl(var(--muted))",
          ],
          ticks: 200,
          gravity: 1.2,
          decay: 0.94,
          startVelocity: 30,
          shapes: ["circle"],
        });
      } catch (error) {
        console.warn("Confetti animation failed:", error);
      }
    }
  }, []);

  const handlePlanClick = useCallback((href: string) => {
    setIsLoading(true);
    // Add a small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (!plans || plans.length === 0) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-muted-foreground">No pricing plans available</h2>
          <p className="text-muted-foreground mt-2">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg whitespace-pre-line max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
              disabled={isLoading}
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-sm sm:text-base">
          Annual billing <span className="text-primary">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.1,
            }}
            className={cn(
              `rounded-2xl border-[1px] p-4 sm:p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative`,
              "border-border",
              "flex flex-col min-h-[600px]",
              plan.featured && "bg-green-50 border-green-200"
            )}
          >
            <div className="flex-1 flex flex-col">
              <p className="text-sm sm:text-base font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-x-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-xs sm:text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-4 sm:mt-5 gap-2 flex flex-col flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4" />

              <Link
                to={plan.href}
                onClick={() => handlePlanClick(plan.href)}
                className={cn(
                  buttonVariants({
                    variant: plan.featured ? "default" : "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-base sm:text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  {
                    "hover:bg-primary hover:text-primary-foreground": !plan.featured,
                    "bg-background text-foreground": !plan.featured,
                  }
                )}
              >
                {isLoading ? "Loading..." : plan.buttonText}
              </Link>
              <p className="mt-4 sm:mt-6 text-xs leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const demoPlans = [
  {
    name: "STARTER",
    price: "20",
    yearlyPrice: "16",
    period: "per month",
    features: [
      "auto screen image process",
      "auto device audio input",
      "premium llm availble",
      
      
    ],
    description: "Perfect for individuals and small team",
    buttonText: "Start Free Trial",
    href: "/sign-up",
  },
  {
    name: "PROFESSIONAL",
    price: "25",
    yearlyPrice: "20",
    period: "per month",
    features: [
      "new feature early access",
      "all inlcude in starter",
      
     
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    featured: true,
  },
  {
    name: "ENTERPRISE",
    price: "~",
    yearlyPrice: "~",
    period: "per month",
    features: [
      "coming soon",
      
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Pricing 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
    </div>
  );
}
