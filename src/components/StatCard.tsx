export function StatCard({ value, label, color = "var(--purple-primary)" }: { value: string; label: string; color?: string }) {
    return (
        <div
            className="bg-white border rounded-xl md:rounded-3xl p-3 md:p-8 shadow-sm flex flex-col items-center justify-center transition-all hover:shadow-md min-w-0"
            style={{ borderColor: `color-mix(in srgb, ${color}, transparent 85%)` }}
        >
            <h3
                className="text-lg sm:text-3xl md:text-5xl font-black mb-1 md:mb-2"
                style={{ color: color }}
            >
                {value}
            </h3>
            <p className="text-[var(--faded-text)] font-semibold text-[8px] sm:text-sm md:text-lg text-center leading-tight">
                {label}
            </p>
        </div>
    );
}