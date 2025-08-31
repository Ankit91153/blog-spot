"use client";
import BlogCard from "../common/BlogCard";
import BlogCardSkeleton from "../skeletons/BlogCardSkelton";

export default function MostViewBlogs() {
  return (
    <div className="mb-20 flex flex-col gap-10">
      <div>
        <h1 className=" mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
          Most Viewed Blogs
        </h1>
      </div>
      <div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          <BlogCard
            category="Productivity"
            title="10 Essential Tips for Productive Remote Work"
            description="Discover how to maximize your productivity and maintain work-life balance while working from home with these expert-approved strategies."
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1520839090488-4a6c211e2f94"
            authorName="Alice Johnson"
            authorRole="Blogger"
            authorImage="https://i.pravatar.cc/150?img=32"
            link="#"
          />
          <BlogCard
            category="Productivity"
            title="10 Essential Tips for Productive Remote Work"
            description="Discover how to maximize your productivity and maintain work-life balance while working from home with these expert-approved strategies."
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1520839090488-4a6c211e2f94"
            authorName="Alice Johnson"
            authorRole="Blogger"
            authorImage="https://i.pravatar.cc/150?img=32"
            link="#"
          />
          <BlogCard
            category="Productivity"
            title="10 Essential Tips for Productive Remote Work"
            description="Discover how to maximize your productivity and maintain work-life balance while working from home with these expert-approved strategies."
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1520839090488-4a6c211e2f94"
            authorName="Alice Johnson"
            authorRole="Blogger"
            authorImage="https://i.pravatar.cc/150?img=32"
            link="#"
          />
          <BlogCard
            category="Productivity"
            title="10 Essential Tips for Productive Remote Work"
            description="Discover how to maximize your productivity and maintain work-life balance while working from home with these expert-approved strategies."
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1520839090488-4a6c211e2f94"
            authorName="Alice Johnson"
            authorRole="Blogger"
            authorImage="https://i.pravatar.cc/150?img=32"
            link="#"
          />
          <BlogCardSkeleton/>
        </div>
      </div>
    </div>
  );
}
