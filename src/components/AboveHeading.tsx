export default function AboveHeading({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm font-semibold lg:text-lg text-faded-text leading-relaxed">{children}</p>
    )
}