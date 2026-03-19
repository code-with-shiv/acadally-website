export function StatCard({ value, label, color = "var(--purple-primary)" }: { value: string; label: string; color?: string }) {
    return (
        <div
            className="bg-white border rounded-lg md:rounded-[11.05px] p-3 md:p-6 shadow-sm flex flex-col items-center justify-center gap-1 md:gap-4 transition-all hover:shadow-md min-w-0"
            style={{ borderColor: `color-mix(in srgb, ${color}, transparent 85%)` }}
        >
            <h3
                className="text-lg sm:text-2xl md:text-[32px] font-semibold md:font-bold md:leading-[100%] md:tracking-[0.04em] md:uppercase"
                style={{ color: color }}
            >
                {value}
            </h3>
            <p className="text-faded-text font-normal md:font-medium text-[8px] sm:text-sm md:text-[16px] text-center leading-tight md:leading-[100%] md:tracking-[0.04em]">
                {label}
            </p>
        </div>
    );
}