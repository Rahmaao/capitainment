"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import back from "@/public/Back.svg";
import { useRouter } from "next/navigation";

// Define the type for props
interface VerifyOtpProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;
  onResend: () => void;
}

// Create the component with props type
const VerifyOtpPage: React.FC<VerifyOtpProps> = ({
  isOpen,
  onClose,
  onVerify,
  onResend,
}) => {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendTimeout, setResendTimeout] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRefs.current[0]?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (resendTimeout > 0) {
      const timer = setTimeout(() => setResendTimeout(resendTimeout - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimeout]);

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="w-[300px] md:w-[350px] border-[#E9E9E9] border bg-white h-[380px] p-6 rounded-lg">
        <div className="h-[320px] flex flex-col justify-between">
          <button
            className="w-full border-b flex items-center"
            onClick={() => router.back()}
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
                Verify Phone Number
              </h2>
            </div>
          </button>
          <div className="w-full">
            <p className="text-xs text-[#777777]">
              Please log in to your account with the code sent to +234********
            </p>
          </div>
          <div className="w-full flex justify-between mt-4">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-[40px] h-[40px] border border-[#2F2B431A] rounded-md outline-none text-black text-center"
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-4">
            {resendTimeout > 0 ? (
              <p className="text-sm text-[#777777]">
                Resend OTP in {resendTimeout} seconds
              </p>
            ) : (
              <button
                className="text-sm text-[#BC1823] hover:underline"
                onClick={() => {
                  onResend();
                  setResendTimeout(30);
                }}
              >
                Resend OTP
              </button>
            )}
          </div>
          <div className="w-full h-[70px] flex items-center justify-center mt-4">
            <a
              href="/success"
              className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                onVerify();
              }}
            >
              Verify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Correctly export the component
export default VerifyOtpPage;
