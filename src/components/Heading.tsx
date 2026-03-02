import { cn } from "@/lib/utils";

export default function Heading({ text, element, className }: { text?: string, element?: React.ReactNode, className?: string }) {
    return (
        <div
            className={cn("inline-block font-bold text-4xl lg:text-5xl leading-tight", className)}>
            {text ? text : element}
        </div>
    )
}