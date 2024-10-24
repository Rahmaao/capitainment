"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import LoginModal from "@/components/LoginModal";



export default function Register() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  
    const handleButtonClick = () => {
      setIsLoginModalOpen(true);
    };

    const handleLogin = () => {
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
    };
    
  




  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="w-[300px] md:w-[350px] border-[#E9E9E9] border bg-white h-[430px] p-6 rounded-lg">
        <div className="h-[380px] flex flex-col justify-between">
          <div className="flex justify-between border-b border-[#E9E9E9] items-start w-full h-[55px]">
            <h2 className="font-bold text-[18px] text-black">Create Account</h2>
          </div>
          <div className="w-full">
            <p className="text-xs text-[#777777]">
              Let’s get your personal information
            </p>
          </div>
          <div className="w-full h-[70px] flex flex-col justify-between">
            <p className="text-sm text-[#2F2B43]">First Name</p>
            <div className="relative">
              <input
                type="text"
                className="w-full h-[40px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-xs"
                placeholder="Gabby"
              />
            </div>
          </div>
          <div className="w-full h-[70px] flex flex-col justify-between">
            <p className="text-sm text-[#2F2B43]">Last Name</p>
            <div className="relative">
              <input
                type="text"
                className="w-full h-[40px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-xs"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="w-full h-[70px] flex flex-col items-center justify-between">
            <a
              href="/register-phone"
              className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
              // onClick={handleContinue}
            >
              Continue
            </a>
            <p className="text-xs text-[#777777]">
              Already have an account?{" "}
              <button onClick={() => handleButtonClick()} className="text-[#BC1823] hover:underline">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
