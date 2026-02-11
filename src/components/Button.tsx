export default function Button({ text, classes }: { text: string; classes?: string }) {
    return (
        <button className={`rounded-full px-4 md:px-6 py-2  font-semibold text-sm md:text-base hover:opacity-90 transition-opacity ${classes}`}>
            {text}
        </button>
    )
}