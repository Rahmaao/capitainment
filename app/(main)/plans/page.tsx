"use client"; // Ensure this is a Client Component

import { useState } from "react";
import Image from "next/image";
import tick from "@/public/tick.svg";

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  const handlePlanChange = (plan: "daily" | "weekly" | "monthly") => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="h-[90%] w-[90%] flex flex-col">
        <div className="container mx-auto flex flex-col items-center p-4 text-black">
          {/* <h1 className="text-2xl font-bold mb-4">Choose a Plan</h1> */}
          <div className="flex items-center bg-[#F5F5F5] px-2 rounded-lg h-[51px] lg:w-[522px] mb-6">
            <button
              className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${
                selectedPlan === "daily"
                  ? "bg-[#BC1823] text-white"
                  : "bg-[#F5F5F5]"
              }`}
              onClick={() => handlePlanChange("daily")}
            >
              Daily
            </button>
            <button
              className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${
                selectedPlan === "weekly"
                  ? "bg-[#BC1823] text-white"
                  : "bg-[#F5F5F5]"
              }`}
              onClick={() => handlePlanChange("weekly")}
            >
              Weekly
            </button>
            <button
              className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${
                selectedPlan === "monthly"
                  ? "bg-[#BC1823] text-white"
                  : "bg-[#F5F5F5]"
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              Monthly
            </button>
          </div>
          <div>
            {selectedPlan === "daily" && (
              <div className="w-[343px] h-[444px] bg-[#FFFFFF] rounded-lg p-4 flex flex-col justify-between">
                <div className="h-[250px] flex flex-col gap-2">
                  <div>
                    <p className="text-[#BC1823] text-[13px]">DAILY</p>
                    <p className="text-[30px] text-[#170304] font-bold mb-2">
                      ₦50/
                      <span className="text-[15px] font-medium">per day</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Unlimited Streaming of Video Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        100+ Hours Streaming Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Monthly Subscription Updates
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Value Added Content
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className={`w-[313px] h-[56px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300`}
                >
                  Subscribe
                </a>
              </div>
            )}
            {selectedPlan === "weekly" && (
              <div className="w-[343px] h-[444px] bg-[#FFFFFF] rounded-lg p-4 flex flex-col justify-between">
                <div className="h-[250px] flex flex-col gap-2">
                  <div>
                    <p className="text-[#BC1823] text-[13px]">WEEKLY</p>
                    <p className="text-[30px] text-[#170304] font-bold mb-2">
                      ₦150/
                      <span className="text-[15px] font-medium">per week</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Unlimited Streaming of Video Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        100+ Hours Streaming Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Monthly Subscription Updates
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Value Added Content
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className={`w-[313px] h-[56px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300`}
                >
                  Subscribe
                </a>
              </div>
            )}
            {selectedPlan === "monthly" && (
              <div className="w-[343px] h-[444px] bg-[#FFFFFF] rounded-lg p-4 flex flex-col justify-between">
                <div className="h-[250px] flex flex-col gap-2">
                  <div>
                    <p className="text-[#BC1823] text-[13px]">MONTHLY</p>
                    <p className="text-[30px] text-[#170304] font-bold mb-2">
                      ₦500/
                      <span className="text-[15px] font-medium">per month</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Unlimited Streaming of Video Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        100+ Hours Streaming Content
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Monthly Subscription Updates
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={tick}
                        alt="Icon"
                        width={14}
                        height={14}
                        className="inline-block"
                      />
                      <p className="text-sm text-[#777777]">
                        Value Added Content
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className={`w-[313px] h-[56px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300`}
                >
                  Subscribe
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
