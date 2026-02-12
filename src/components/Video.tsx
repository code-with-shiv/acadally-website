export default function Video({ className }: { className?: string }) {
    return (
        <div className={className}>
            <video src="/video.mp4" autoPlay loop muted controls className="w-full h-full" />
        </div>
    )
}