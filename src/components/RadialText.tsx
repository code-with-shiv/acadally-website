import { cn } from "@/lib/utils"

export function RadialText({ text, className }: { text: string; className?: string }) {
    return (
        <div
            style={{
                background: 'radial-gradient(circle, #FF8A00 0%, #6063AB 50%, #1C4CC3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
            }}
            className={cn("inline-block font-bold text-3xl lg:text-5xl leading-tight", className)}
        >
            {text}
        </div>
    )
}
