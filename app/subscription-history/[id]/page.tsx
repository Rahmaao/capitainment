"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import back from "@/public/Back.svg";

// This would typically come from a database or API
const subscriptions = [
  {
    id: 1,
    date: "2024-08-07",
    description: "Monthly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
    transactionId: "TRX-12345-67890",
    type: "Debit",
  },
  {
    id: 2,
    date: "2024-07-07",
    description: "Weekly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
    transactionId: "TRX-23456-78901",
    type: "Debit",
  },
  {
    id: 3,
    date: "2024-06-07",
    description: "Monthly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
    transactionId: "TRX-34567-89012",
    type: "Debit",
  },
  {
    id: 4,
    date: "March 23, 1997",
    description: "Weekly Subscription",
    amount: "₦3,000.00",
    status: "Failed",
    transactionId: "TRX-34567-89012",
    type: "Debit",
  },
];

export default function ReceiptPage({ params }: { params: { id: string } }) {
  const receipt = subscriptions.find((sub) => sub.id === parseInt(params.id));
  const router = useRouter();

  if (!receipt) {
    return <div className="container mx-auto p-4">Receipt not found</div>;
  }

  return (
    <div className="container bg-[#FAFAFA] pb-[84px] lg:pb-0 h-screen">
      <div className="w-full lg:w-[375px] h-full lg:h-[80%] bg-white border">
        <button
          className="w-full border-b h-[100px] lg:h-[70px] flex items-center"
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
              Receipt
            </h2>
          </div>
        </button>
        <div className="p-4 text-black">
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Transaction Type:</p>
            <p className="text-[14px] font-normal text-[#100F0F]">{receipt.type}</p>
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Transaction ID:</p>
            <p className="text-[14px] font-normal text-[#100F0F]">{receipt.transactionId}</p>
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Payment Date:</p>
            <p className="text-[14px] font-normal text-[#100F0F]">{receipt.date}</p>
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Description:</p>
            <p className="text-[14px] font-normal text-[#100F0F]">{receipt.description}</p>
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Amount:</p>
            <p className="text-[14px] font-normal text-[#100F0F]">{receipt.amount}</p>
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-normal text-[#777777]">Status:</p>
            <p className={`text-[14px] font-normal ${
              receipt.status === "Successful" ? "text-green-500" : "text-red-500"
            }`}>
              {receipt.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
