"use client";

import React, { useState } from "react";
import Image from "next/image";
import success from "@/public/success.svg";
import { useRouter } from "next/navigation";

export default function RegisterPhone() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="w-[300px] md:w-[350px] border-[#E9E9E9] border bg-white h-[380px] p-6 rounded-lg">
        <div className="h-[300px] flex flex-col justify-between">
          {/* <div className="w-full border-b flex items-center h-[55px]"></div> */}
          <div className="w-full h-[160px] flex flex-col items-center justify-between">
            <div className="w-[100px] h-[100px]">
            <Image
                  src={success}
                  alt="Success"
                  width={100}
                  height={100}
                  className="rounded-full"
                />

            </div>
            <p className="md:text-[20px] font-bold text-[#170304]">
            Account Created Successfully
            </p>
            <p className="text-xs text-[#777777]">
            Welcome to captainment video portal
            </p>
          </div>
          
          <div className="w-full h-[70px] flex flex-col items-center justify-between">
            <a
              href="/"
              className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
              
            >
              Go to Homepage
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
