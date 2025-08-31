import Image from "next/image";
import { Input } from "../ui/input";

export default function WrtiteComment() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className=" flex items-center gap-3">
        <Image
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="Author Avatar"
          width={30}
          height={30}
          className="rounded-full"
          unoptimized
        />
        <h4 className="text-sm font-semibold leading-snug">Write a comment</h4>
      </div>
      <Input placeholder="What Your Thought"/>
    </div>
  );
}
