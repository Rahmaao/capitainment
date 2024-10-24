"use client";

import { useRouter } from "next/navigation";
import Terms from "@/components/Terms";
import Image from "next/image";
import back from "@/public/Back.svg";

export default function TermsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#FAFAFA] w-full min-h-screen lg:px-10 pb-[84px] lg:pb-0 flex lg:flex-row flex-col justify-between lg:justify-center lg:items-center">
      <button
        className="lg:hidden w-full border-b h-[100px] flex items-center"
        onClick={() => router.back()}
      >
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <Image
            src={back}
            alt="Back"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="min-w-[125px] h-[50px] flex items-center pl-2">
          <h2 className="text-[20px] text-[#0A0A0A] font-bold text-left">
          Terms & Conditions
          </h2>
        </div>
      </button>
      <div className="w-[1007px] h-[600px] px-4 lg:h-[500px] flex justify-between">
        <Terms />
      </div>
    </main>
  );
}
