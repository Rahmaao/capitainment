import CategoriesContainer from "@/components/CategoriesContainer";
import VideosContainer from "@/components/VideosContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] w-full min-h-screen mt-10 px-2 lg:px-10 pb-[84px] lg:pb-0">
      <div className="lg:h-[45px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:hidden flex flex-col text-black pb-3 lg:pb-0">
          <p className="font-bold text-[20px]">Hi, Jumoke</p>
          <p className="font-normal text-[14px]">Welcome to captainment video portal</p>
        </div>
        <CategoriesContainer />
      </div>
      <div className="mt-10">
        <VideosContainer />
      </div>
    </main>
  );
}
