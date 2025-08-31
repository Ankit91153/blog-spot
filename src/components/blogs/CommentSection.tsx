import ShowAllComment from "./ShowAllComment";
import WrtiteComment from "./WriteComment";

export default function CommentSection() {
  return (
    <div className=" flex flex-col">
      <h2 className="text-lg font-semibold leading-snug">Response ({1})</h2>
      <WrtiteComment />
      <div className="mt-6 pt-10 pb-20 border border-t-1 border-b-0 border-l-0 border-r-0 border-border">
        <ShowAllComment/>
      </div>
    </div>
  );
}
