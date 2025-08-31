
import BlogCardHorizontal from "@/components/common/BlogCardHorizontal";
import BlogCardHorizontalSkelton from "@/components/skeletons/BlogCardHorizontalSkelton";

export default function Blog() {
    return <main className="page-container min-h-screen-minus-header">
         <BlogCardHorizontal/>
         <BlogCardHorizontalSkelton/>
    </main>;
}