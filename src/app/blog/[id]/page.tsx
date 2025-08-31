import AuthorProfile from "@/components/blogs/AuthorProfile";
import BlogContent from "@/components/blogs/BlogContent";
import CommentSection from "@/components/blogs/CommentSection";
import StatsCard from "@/components/blogs/StatsCard";
import { siteMetadata } from "@/constant/data";

export default function BlogDetail() {
  const { content, thumbnail, tags } = siteMetadata;
  return (
    <>
      <main className="page-container min-h-screen-minus-header">
        <div>
          <h2 className="text-5xl font-semibold leading-snug">
            How We Fixed a Poorly Performing React Native App
          </h2>
        </div>
        <div className="mt-6">
          <AuthorProfile />
        </div>
        <div className="mt-6 border border-t-1 border-b-1 border-l-0 border-r-0 border-border">
          <StatsCard likes={10} comments={10} views={100} />
        </div>
        <div className="mt-6">
          <BlogContent content={content} thumbnailUrl={thumbnail} tags={tags} />
        </div>
      </main>
      <div className="mt-6 border border-t-1 border-b-0 border-l-0 border-r-0 border-border">
        <section className="page-container">
            <CommentSection/>
        </section>
      </div>
    </>
  );
}
