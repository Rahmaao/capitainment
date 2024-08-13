// app/plans/page.tsx
"use client"; // Ensure this is a Client Component

import { useState } from "react";

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<"daily" | "weekly" | "monthly">("daily");

  const handlePlanChange = (plan: "daily" | "weekly" | "monthly") => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="h-[90%] w-[90%] flex flex-col">
        

        
      
    <div className="container mx-auto flex flex-col items-center p-4 bg-purple-600 text-black">
      {/* <h1 className="text-2xl font-bold mb-4">Choose a Plan</h1> */}
      <div className="flex items-center bg-[#F5F5F5] px-2 rounded-lg h-[51px] lg:w-[522px] mb-6">
        <button
          className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${selectedPlan === "daily" ? "bg-[#BC1823] text-white" : "bg-[#F5F5F5]"}`}
          onClick={() => handlePlanChange("daily")}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${selectedPlan === "weekly" ? "bg-[#BC1823] text-white" : "bg-[#F5F5F5]"}`}
          onClick={() => handlePlanChange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 lg:w-[174px] h-[41px] rounded-lg ${selectedPlan === "monthly" ? "bg-[#BC1823] text-white" : "bg-[#F5F5F5]"}`}
          onClick={() => handlePlanChange("monthly")}
        >
          Monthly
        </button>
      </div>
      <div>
        {selectedPlan === "daily" && (
          <div className="w-[343px] h-[444px] bg-red-500 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Daily Plan</h2>
            <p>Details about the daily plan...</p>
          </div>
        )}
        {selectedPlan === "weekly" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Weekly Plan</h2>
            <p>Details about the weekly plan...</p>
          </div>
        )}
        {selectedPlan === "monthly" && (
          <div>
            <h2 className="text-xl font-bold mb-2">Monthly Plan</h2>
            <p>Details about the monthly plan...</p>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}
