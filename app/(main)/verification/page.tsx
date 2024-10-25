// app/(main)/verification/page.tsx
"use client";

import { useRouter } from "next/navigation";
import VerifyOtpForm from "@/components/VerifyOtpForm";

export default function VerificationPage() {
  const router = useRouter();

  const handleVerify = async (otp: string) => {
    try {
      // Add your verification API call here
      console.log("Verifying OTP:", otp);
      // If verification is successful
      router.push('/success');
    } catch (error) {
      console.error("Verification failed:", error);
      // Handle error (show error message, etc.)
    }
  };

  const handleResend = async () => {
    try {
      // Add your resend OTP API call here
      console.log("Resending OTP");
      // Handle success (show success message, etc.)
    } catch (error) {
      console.error("Resend failed:", error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <VerifyOtpForm
        onVerify={handleVerify}
        onResend={handleResend}
        onBack={() => router.back()}
        phoneNumber="+234********" // You can pass this as a prop or get it from context/state
      />
    </div>
  );
}