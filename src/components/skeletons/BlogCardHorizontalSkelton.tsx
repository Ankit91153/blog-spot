"use client";

export default function BlogCardHorizontalSkelton() {
  return (
    <div className="max-w-3xl mx-auto bg-[#111] rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
      {/* Image Skeleton */}
      <div className="w-full sm:w-1/2 h-48 sm:h-auto">
        <div className="w-full h-full bg-slate-700 animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="mb-4">
          <div className="h-6 w-24 bg-slate-700 rounded animate-pulse mb-2"></div>
          <div className="h-8 w-3/4 bg-slate-700 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-slate-700 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-5/6 bg-slate-700 rounded animate-pulse"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-slate-700 rounded-full animate-pulse"></div>
            <div>
              <div className="h-4 w-24 bg-slate-700 rounded animate-pulse mb-2"></div>
              <div className="h-3 w-16 bg-slate-700 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="h-10 w-27 rounded-lg bg-slate-700  animate-pulse "></div>
        </div>
      </div>
    </div>
  );
}
