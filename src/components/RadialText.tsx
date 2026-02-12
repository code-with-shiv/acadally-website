export function RadialText({ text }: { text: string }) {
    return (
        <div
            style={{
                background: 'radial-gradient(circle, #FF8A00 0%, #6063AB 50%, #1C4CC3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
            }}
            className="inline-block font-bold text-3xl lg:text-5xl leading-tight"
        >
            {text}
        </div>
    )
}