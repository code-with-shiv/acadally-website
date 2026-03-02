import { cn } from "@/lib/utils"

type RadialTextProps = {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
};

export function RadialText({ text, className, as: Component = "div" }: RadialTextProps) {
    return (
        <Component
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
        </Component>
    )
}
