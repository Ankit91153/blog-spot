"use client";

import Image from "next/image";
import { Clock } from "lucide-react";

interface CardProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  link: string;
}

export default function BlogCard({
  category,
  title,
  description,
  readTime,
  image,
  authorName,
  authorRole,
  authorImage,
  link,
}: CardProps) {
  return (
    <div className="md:max-w-sm sm:w-full bg-background text-foreground rounded-xl overflow-hidden shadow-lg border border-card">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category + Read time */}
        <div className="flex justify-between items-center text-sm text-zinc-400">
          <span className="px-2 py-0.5 bg-zinc-800 rounded-md text-xs">
            {category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>

        {/* Description */}
        <p className="text-sm text-zinc-400">{description}</p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src={authorImage}
            alt={authorName}
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{authorName}</p>
            <p className="text-xs text-zinc-400">{authorRole}</p>
          </div>
        </div>

        {/* Button */}
        <a
          href={link}
          className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 transition rounded-lg py-2 mt-3 font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
