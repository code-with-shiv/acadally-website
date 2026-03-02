import { cn } from "@/lib/utils";

type HeadingProps = {
    text?: string;
    element?: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
};

export default function Heading({ text, element, className, as: Component = "div" }: HeadingProps) {
    return (
        <Component
            className={cn("inline-block font-bold text-3xl lg:text-4xl leading-tight", className)}>
            {text ? text : element}
        </Component>
    )
}