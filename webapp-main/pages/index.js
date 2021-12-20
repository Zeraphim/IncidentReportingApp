import Head from "next/head";
import Reputation from "../components/reputation";

export default function Home() {
  return (
    <>
      <div className="flex grid grid-cols-10 justify-center mx-8 xl:mx-52 2xl:mx-64 gap-x-4">
        <div className="col-span-2 bg-gray-600 h-screen">Sidebar pane</div>
        <div className="col-span-5 bg-gray-600 h-screen">Content pane</div>
        <div className="col-span-3 bg-gray-600 h-screen">
          <Reputation />
        </div>
      </div>
    </>
  );
}
