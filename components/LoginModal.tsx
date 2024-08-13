// @ts-nocheck
import React, { useState } from "react";
import Btn1 from "../components/btn-1";
import OtpModal from "./OtpModal";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleContinue = () => {
    setShowOtpModal(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {!showOtpModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-[300px] md:w-[350px] bg-white h-[380px] p-6 rounded-lg">
            <div className="h-[280px] flex flex-col justify-between">
              <div className="flex justify-between border-b border-[#E9E9E9] items-start w-full h-[55px]">
                <h2 className="font-bold text-[20px] text-black">Login</h2>
                <button onClick={onClose}>
                  <div className="flex items-center">
                  <Image
                      src="/exit.svg" // Ensure this path is correct
                      alt="Close Icon"
                      width={24}
                      height={24}
                      className="inline-block align-middle"
                    />
                  </div>
                </button>
              </div>
              <div className="w-full">
                <p className="text-xs text-[#777777]">
                  Let’s get your personal information
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
                  href="#"
                  className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
                  onClick={handleContinue}
                >
                  Continue
                </a>
                <p className="text-xs text-[#777777]">
                Don&apos;t have an account? <a href="/register" className="text-[#BC1823] hover:underline">Register</a> 
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <OtpModal isOpen={showOtpModal} onClose={onClose} onVerify={onLogin} />
      )}
    </>
  );
};

export default LoginModal;
