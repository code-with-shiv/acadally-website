export default function PaddingWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-4 py-2 lg:px-20 lg:py-5">
            {children}
        </div>
    )
}