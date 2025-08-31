"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BlogCardSkeleton() {
  return (
    <div className="md:max-w-sm sm:w-full bg-background text-foreground rounded-xl overflow-hidden shadow-lg border border-card">
      {/* Image Skeleton */}
      <div className="relative w-full h-56">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category + Read time */}
        <div className="flex justify-between items-center text-sm">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-4 w-12 rounded-md" />
        </div>

        {/* Title */}
        <Skeleton className="h-6 w-full rounded-md" />
        <Skeleton className="h-6 hidden md:block w-3/4 rounded-md" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4  w-5/6 md:w-full rounded-md" />
          <Skeleton className="h-4 hidden md:block w-full rounded-md" />
          <Skeleton className="h-4 hidden md:block w-5/6 rounded-md" />
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-3 w-16 rounded-md" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-lg mt-3" />
      </div>
    </div>
  );
}
