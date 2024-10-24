"use client";

import React, { useState } from "react";
import Image from "next/image";
import back from "@/public/Back.svg";
import { useRouter } from "next/navigation";

export default function RegisterPhone() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="w-[300px] md:w-[350px] border-[#E9E9E9] border bg-white h-[380px] p-6 rounded-lg">
        <div className="h-[300px] flex flex-col justify-between">
        <button
              className="w-full border-b flex items-center"
              onClick={() => router.back()} // Add the onClick handler to go back
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center">
                <Image
                  src={back}
                  alt="Back"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div className="min-w-[125px] h-[50px] flex items-center pl-2">
                <h2 className="text-[18px] text-[#0A0A0A] font-bold text-left">
                Enter Phone Number
                </h2>
              </div>
            </button>
          <div className="w-full">
            <p className="text-xs text-[#777777]">
              Now we have your name, please let us know your MTN phone number.
            </p>
          </div>
          <div className="w-full h-[70px] flex flex-col justify-between">
            <p className="text-sm text-[#2F2B43]">Phone Number</p>
            <div className="relative">
              <input
                type="text"
                className="w-full h-[40px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-xs"
                placeholder="0808132536"
              />
              <Image
                src="/mtn.svg"
                alt="MTN Icon"
                width={16}
                height={16}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>
          <div className="w-full h-[70px] flex flex-col items-center justify-between">
            <a
              href="/verification"
              className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
              //   onClick={handleContinue}
            >
              Continue
            </a>
            {/* <p className="text-xs text-[#777777]">
                Don&apos;t have an account? <a href="/register" className="text-[#BC1823] hover:underline">Register</a> 
                </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
