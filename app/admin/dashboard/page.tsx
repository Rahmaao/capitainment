import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Image from "next/image";

// app/admin/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="w-full h-[85%] p-4 flex flex-col justify-between">
      <p className="text-[#080708] text-[16px]">Overview</p>
      <div className="w-full h-[90%] flex flex-col justify-between">
        <div className="w-full h-[110px] flex justify-between">
          <div className="w-[240px] bg-[#FFFFFF] h-full border border-[#E5E5E5] rounded-lg flex justify-between p-5">
            <div className="w-[75%] h-[85%]">
              <p className="text-[#686767] text-[12px] font-normal">Videos</p>
              <p className="text-[#080708] text-[24px] font-semibold">200</p>
            </div>
            <div className="w-[34px] h-[34px]">
              <Image
                src="/frame1.png" 
                alt="frame"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="w-[240px] bg-[#FFFFFF] h-full border border-[#E5E5E5] rounded-lg flex justify-between p-5">
            <div className="w-[75%] h-[85%]">
              <p className="text-[#686767] text-[12px] font-normal">Users</p>
              <p className="text-[#080708] text-[24px] font-semibold">582</p>
            </div>
            <div className="w-[34px] h-[34px]">
              <Image
                src="/frame2.png" 
                alt="frame"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="w-[240px] bg-[#FFFFFF] h-full border border-[#E5E5E5] rounded-lg flex justify-between p-5">
            <div className="w-[75%] h-[85%]">
              <p className="text-[#686767] text-[12px] font-normal">
                Daily Views
              </p>
              <p className="text-[#080708] text-[24px] font-semibold">346</p>
            </div>
            <div className="w-[34px] h-[34px]">
              <Image
                src="/frame3.png" 
                alt="frame"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className="w-[240px] bg-[#FFFFFF] h-full border border-[#E5E5E5] rounded-lg flex justify-between p-5">
            <div className="w-[75%] h-[85%]">
              <p className="text-[#686767] text-[12px] font-normal">
                Total Views
              </p>
              <p className="text-[#080708] text-[24px] font-semibold">709</p>
            </div>
            <div className="w-[34px] h-[34px]">
              <Image
                src="/frame4.png" 
                alt="frame"
                width={34}
                height={34}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] flex justify-between">
          <div className="w-[68%] h-full flex flex-col justify-between">
            <p className="text-[#080708] text-[16px]">Sales Performance</p>
            <div className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg h-[90%] pt-6">
              <LineChart />
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-between">
            <p className="text-[#080708] text-[16px]">Categories</p>
            <div className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg h-[90%]">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
