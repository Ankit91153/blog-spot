"use client";
import { ThumbsUp } from "lucide-react";
import AuthorProfile from "./AuthorProfile";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ShowAllComment() {
  const [replyShow, setReplyShow] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <AuthorProfile />

      <p>
        This is a sample comment. It provides insights and feedback on the blog
        post.
      </p>

      <div
        className={`flex flex-wrap ${
          replyShow ? "items-start" : "item-center"
        } gap-4`}
      >
        {/* Like Section */}
        <div className="flex items-center">
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm font-medium ml-1">12 Likes</span>
        </div>

        {/* Reply Section */}
        <div className="flex-1">
          <button
            onClick={() => setReplyShow((prev) => !prev)}
            className="text-sm  hover:underline"
          >
            Reply
          </button>

          {replyShow && (
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <Input placeholder="What’s your thought?" className="flex-1 w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
