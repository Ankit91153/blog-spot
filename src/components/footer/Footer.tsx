export const revalidate = false;

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background  dark:border-card">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://bloglatest.vercel.app/" className="hover:underline">
            BlogLatest™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
