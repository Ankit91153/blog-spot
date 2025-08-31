import Image from "next/image";

interface BlogContentProps {
  thumbnailUrl: string;
  content: any;
  tags: string[];
}

export default function BlogContent({
  thumbnailUrl,
  content,
  tags,
}: BlogContentProps) {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Image
          src={thumbnailUrl}
          alt="Thumbnail"
          className="w-full object-cover"
          width={800}
          height={400}
        />
      </div>
       <div
        className="prose max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-background text-xs px-2 py-1 rounded-md mr-2 mb-2 border dark:border-card"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
