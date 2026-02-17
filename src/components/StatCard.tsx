export function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-white border border-[#E9E7F6] rounded-xl md:rounded-3xl p-3 md:p-8 shadow-sm flex flex-col items-center justify-center transition-all hover:shadow-md hover:border-blue-200 min-w-0">
            <h3 className="text-lg sm:text-3xl md:text-5xl font-black text-[#393091] mb-1 md:mb-2">{value}</h3>
            <p className="text-[#515151] font-semibold text-[8px] sm:text-sm md:text-lg text-center leading-tight">{label}</p>
        </div>
    );
}