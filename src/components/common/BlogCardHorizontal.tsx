"use client";

export default function BlogCardHorizontal() {
  return (
    <div className="max-w-3xl mx-auto bg-background  border  dark:border-card rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
      {/* Image */}
      <div className="w-full sm:w-1/2 h-48 sm:h-auto">
        <img
          src="https://picsum.photos/600/400"
          alt="Blog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md mb-3">
            Productivity
          </span>
          <h2 className="text-xl font-bold  mb-2">
            10 Essential Tips for Productive Remote Work
          </h2>
          <p className="text-gray-400 mb-4">
            Discover how to maximize your productivity and maintain work-life
            balance while working from home with these expert-approved
            strategies.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-white">Alice Johnson</p>
              <p className="text-xs text-gray-400">5 min read · 12 comments</p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
