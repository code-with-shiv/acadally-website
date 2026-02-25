export function StatCard({ value, label, color = "var(--purple-primary)" }: { value: string; label: string; color?: string }) {
    return (
        <div
            className="bg-white border rounded-lg md:rounded-xl p-3 md:p-5 shadow-sm flex flex-col items-center justify-center transition-all hover:shadow-md min-w-0"
            style={{ borderColor: `color-mix(in srgb, ${color}, transparent 85%)` }}
        >
            <h3
                className="text-lg sm:text-2xl md:text-3xl font-semibold mb-1"
                style={{ color: color }}
            >
                {value}
            </h3>
            <p className="text-[var(--faded-text)] font-normal text-[8px] sm:text-sm md:text-md text-center leading-tight">
                {label}
            </p>
        </div>
    );
}