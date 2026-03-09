import { cn } from "@/lib/utils";

export default function BlueText({ text, className }: { text: string, className?: string }) {
    return (
        <span className={cn("text-main-page-secondary font-semibold", className)}> {text}</span>
    )
}