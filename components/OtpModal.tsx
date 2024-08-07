
// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;
  onResend: () => void; // Add a new prop for the resend functionality
}

const OtpModal: React.FC<OtpModalProps> = ({ isOpen, onClose, onVerify, onResend }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendTimeout, setResendTimeout] = useState(30); // Countdown for the resend button
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if a digit was entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Move to the previous input field if backspace was pressed and the field is empty
      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    // Focus on the first input field when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    // Handle the countdown for the resend button
    if (resendTimeout > 0) {
      const timer = setTimeout(() => setResendTimeout(resendTimeout - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimeout]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-[300px] md:w-[350px] bg-white h-[380px] p-6 rounded-lg">
        <div className="h-[320px] flex flex-col justify-between">
          <div className="flex justify-between border-b border-[#E9E9E9] items-start w-full h-[55px]">
            <h2 className="font-bold text-[20px] text-black">Enter OTP</h2>
            <button onClick={onClose}>
              <div className="flex items-center">
                <img
                  src="/exit.svg" // Replace with the path to your SVG in the public folder
                  alt="Close Icon"
                  className="h-6 w-6 inline-block align-middle"
                />
              </div>
            </button>
          </div>
          <div className="w-full">
                <p className="text-xs text-[#777777]">
                Please login your account with the code sent to +234********
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
                ref={(el) => (inputRefs.current[index] = el)}
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
                  setResendTimeout(30); // Reset the countdown
                }}
              >
                Resend OTP
              </button>
            )}
          </div>
          <div className="w-full h-[70px] flex items-center justify-center mt-4">
            <a
              href="#"
              className="w-full h-10 bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
              onClick={onVerify}
            >
              Verify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
