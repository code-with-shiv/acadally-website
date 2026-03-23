export default function Video({ className }: { className?: string }) {
    return (
        <div className={className}>
            <iframe
                src="https://www.youtube.com/embed/vSk8Rf5Asyk?autoplay=1"
                title="AcadAlly Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>
    )
}