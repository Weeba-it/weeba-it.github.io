import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-up";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && `animate-${animation}`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
