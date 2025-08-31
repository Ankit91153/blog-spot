import Image from "next/image";

export default function AuthorProfile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://ui-avatars.com/api/?name=John+Doe"
        alt="Author Avatar"
        width={30}
        height={30}
        className="rounded-full"
        unoptimized
      />
      <div>
        <h2 className="font-semibold">Author Name</h2>
        <p className="text-sm text-gray-500">Aug 5, 2025</p>
      </div>
    </div>
  );
}
