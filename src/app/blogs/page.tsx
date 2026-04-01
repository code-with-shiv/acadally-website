import BlogsListMain from "@/components/BlogsListMain";
import BlogsHighlight from "@/components/BlogsHighlight";
import BlogsExplore from "@/components/BlogsExplore";
import Transform from "@/components/Transform";

export default function Blogs() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden lg:min-h-screen">
                {/* Soft Background Glows matching the events page */}
                <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                </div>

                <div className="relative z-10 flex flex-col px-4 py-2 lg:px-20 lg:py-5">
                    <BlogsListMain />
                    <BlogsHighlight />
                </div>
            </div>

            <BlogsExplore />
            <Transform />
        </main>
    )
}
