"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import profilePic from "@/public/prof.svg";
import back from "@/public/Back.svg";
import icon1 from "@/public/icon1.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon3.svg";
import icon4 from "@/public/icon4.svg";
import ProfileContainer from "@/components/ProfileContainer";
import Terms from "@/components/Terms";
import SavedVideos from "@/components/SavedVideos";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleNavigation = (tab: string, path: string) => {
    if (isMobile) {
      router.push(path);
    } else {
      setActiveTab(tab);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileContainer />;
      case "terms":
        return <Terms />;
      case "savedVideos":
        return <SavedVideos />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#FAFAFA] w-full min-h-screen lg:px-10 pb-[84px] lg:pb-0 flex lg:flex-row flex-col justify-between lg:justify-center lg:items-center">
      <div className="lg:hidden w-full border-b h-[100px] flex items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          
        </div>
        <div className="min-w-[125px] h-[50px] flex items-center pl-2">
          <h2 className="text-[20px] text-[#0A0A0A] font-bold text-left">
            Account
          </h2>
        </div>
      </div>
      <div className="w-[1007px] h-[600px] lg:h-[500px] flex justify-between">
        <div className="w-[342px] h-[352px] shadow-[0px_1px_2px_0px_#1018280F] rounded-[12px] flex flex-col justify-between">
          <div className="w-full h-[90px] flex justify-center items-center">
            <div className="bg-[#170304] lg:bg-[#FAFAFA] w-[306px] h-[75px] rounded-[18px] flex items-center pl-5">
              <div className="min-w-[185px] h-[50px] flex justify-between">
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={profilePic}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div className="min-w-[125px] h-[50px]">
                  <h2 className="text-[16px] text-white lg:text-[#0A0A0A] font-medium text-left">
                    Rahma Olaniyan
                  </h2>
                  <p className="text-[14px] text-white lg:text-[#6C6C6C] text-left">
                    08081325356
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleNavigation("profile", "/profile")}
              className={`pl-[20px] w-full h-[60px] flex items-center border-b border-[#2F2B431A] ${
                activeTab === "profile" && !isMobile ? "bg-[#FAF8F8]" : ""
              }`}
            >
              <div className="min-w-[185px] h-[40px] flex">
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={icon1}
                    alt="icon"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div className="min-w-[135px] h-[40px] ml-2">
                  <h2 className="text-[14px] text-[#0A0A0A] font-medium text-left">
                    Profile
                  </h2>
                  <p className="text-[10px] text-[#6C6C6C] text-left">
                    Edit your personal information
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleNavigation("terms", "/terms")}
              className={`pl-[20px] flex items-center w-full h-[60px] border-b border-[#2F2B431A] ${
                activeTab === "terms" && !isMobile ? "bg-[#FAF8F8]" : ""
              }`}
            >
              <div className="min-w-[185px] h-[40px] flex">
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={icon2}
                    alt="icon"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div className="min-w-[135px] h-[40px] ml-2">
                  <h2 className="text-[14px] text-[#0A0A0A] font-medium text-left">
                    Terms and Conditions
                  </h2>
                  <p className="text-[10px] text-[#6C6C6C] text-left">
                    View our terms here
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleNavigation("savedVideos", "/saved-videos")}
              className={`pl-[20px] flex items-center w-full h-[60px] border-b border-[#2F2B431A] ${
                activeTab === "savedVideos" && !isMobile ? "bg-[#FAF8F8]" : ""
              }`}
            >
              <div className="min-w-[185px] h-[40px] flex">
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={icon3}
                    alt="icon"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div className="min-w-[135px] h-[40px] ml-2">
                  <h2 className="text-[14px] text-[#0A0A0A] font-medium text-left">
                    Saved Videos
                  </h2>
                  <p className="text-[10px] text-[#6C6C6C] text-left">
                    View your saved videos here
                  </p>
                </div>
              </div>
            </button>
            <button className="pl-[20px] flex items-center w-full h-[60px] text-white">
              <div className="min-w-[185px] h-[40px] flex">
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={icon4}
                    alt="icon"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div className="min-w-[135px] h-[40px] ml-2">
                  <h2 className="text-[14px] text-[#0A0A0A] font-medium text-left">
                    Logout
                  </h2>
                  <p className="text-[10px] text-[#6C6C6C] text-left">
                    You can always come back
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Render content only on non-mobile screens */}
        {!isMobile && (
          <div className="w-[640px] h-[474px]">{renderContent()}</div>
        )}
      </div>
    </main>
  );
}
