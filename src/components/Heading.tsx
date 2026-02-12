export default function Heading({ text, element }: { text?: string, element?: React.ReactNode }) {
    return (
        <div className="font-bold text-3xl lg:text-5xl leading-tight">
            {text ? text : element}
        </div>
    )
}