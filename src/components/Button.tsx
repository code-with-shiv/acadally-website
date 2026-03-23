import { cn } from "@/lib/utils";

export default function Button({ text, classes, onClick }: { text: string; classes?: string; onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn("rounded-full px-4 md:px-8 py-2 font-semibold text-sm md:text-base hover:opacity-90 transition-opacity cursor-pointer", classes)}
        >
            {text}
        </button>
    )
}