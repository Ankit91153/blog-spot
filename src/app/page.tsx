import LatestBlogs from "@/components/home/LatestBlogs";
import MainContent from "@/components/home/MainContent";
import MostViewBlogs from "@/components/home/MostViewBlogs";

export default function Home() {
  return <main className="page-container">
    <MainContent/>
    <LatestBlogs/>
    <MostViewBlogs/>
  </main>;
}
