import { cn } from "@/lib/utils";

export default function BelowHeading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("text-sm font-semibold lg:text-lg text-faded-text leading-relaxed", className)}>{children}</p>
    )
}