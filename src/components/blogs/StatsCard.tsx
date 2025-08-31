import { ThumbsUp, MessageSquare, Eye } from "lucide-react";

interface StatsProps {
  likes: number;
  comments: number;
  views: number;
}

export default function StatsCard({ likes, comments, views }: StatsProps) {
  const stats = [
    { label: "Likes", value: likes, icon: <ThumbsUp className="w-4 h-4" /> },
    { label: "Comments", value: comments, icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Views", value: views, icon: <Eye className="w-4 h-4" /> },
  ];

  return (
    <div className="flex gap-6  text-sm py-3">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-1">
          {stat.icon}
          <span className="font-medium">{stat.value}</span>
          <span className="hidden sm:inline">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
