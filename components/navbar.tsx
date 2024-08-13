// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Btn1 from "../components/btn-1";
import { useRouter } from "next/router";

import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activePath, setActivePath] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (isLoggedIn) {
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { pathname } = window.location;
    setActivePath(pathname);
  }, []);

  const navbarItems = [
    {
      url: "/",
      text: "Home",
      icon: "/home.svg",
      activeIcon: "/home-active.svg",
      hoverIcon: "/home-active.svg",
    },
    {
      url: "/plans",
      text: "Plans",
      icon: "/plans.svg",
      activeIcon: "/plans-active.svg",
      hoverIcon: "/plans-active.svg",
    },
    {
      url: "/subscription",
      text: "History",
      icon: "/history.svg",
      activeIcon: "/history-active.svg",
      hoverIcon: "/history-active.svg",
    },
    {
      url: "/account",
      text: "Account",
      icon: "/profile.svg",
      activeIcon: "/profile-active.svg",
      hoverIcon: "/profile-active.svg",
    },
  ];

  return (
    <div
      className={`bg-white lg:pr-8 ${
        isMobile ? "fixed bottom-0 left-0 right-0" : "relative"
      } flex justify-between text-white h-[84px] w-full shadow-[12px_4px_4px_4px_#E5E5E540] z-50`}
    >
      <a href="/" className="w-[211px] h-full relative hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={211}
          height={40}
          priority
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </a>

      {/* Navigation Items (Shown at Bottom on Mobile) */}
      {isMobile && (
        <div className="w-full flex justify-around items-center">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="h-[30px] text-black text-[16px] flex justify-center items-center"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredLink(item.url)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={
                    activePath === item.url
                      ? item.activeIcon
                      : hoveredLink === item.url
                      ? item.hoverIcon
                      : item.icon
                  }
                  alt={`${item.text} Icon`}
                  width={24}
                  height={24}
                />
                <span
                  className={`text-black ${
                    activePath === item.url || hoveredLink === item.url
                      ? "text-[#BC1823]"
                      : ""
                  }`}
                >
                  {item.text}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Navigation Links (Shown at Top on Desktop) */}
      <div
        className={`w-[410px] h-full flex ${
          isMobile ? "hidden lg:flex justify-between" : "justify-between"
        } items-center`}
      >
        {navbarItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="min-w-[20%] px-2 h-[30px] text-black text-[16px] flex"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setHoveredLink(item.url)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="flex items-center space-x-2">
              <Image
                src={
                  activePath === item.url
                    ? item.activeIcon
                    : hoveredLink === item.url
                    ? item.hoverIcon
                    : item.icon
                }
                alt={`${item.text} Icon`}
                width={24}
                height={24}
              />
              <span
                className={`text-black ${
                  activePath === item.url || hoveredLink === item.url
                    ? "text-[#BC1823]"
                    : ""
                }`}
              >
                {item.text}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Additional Elements (Shown at Top on Desktop) */}
      {!isMobile && (
        <div className="w-[330px] h-full justify-between items-center hidden md:flex">
          <input
            type="text"
            className="w-[178px] h-[40px] border border-[#2F2B431A] rounded-xl outline-none text-black text-center placeholder:text-black"
            placeholder="Search"
          />
          <button
            onClick={() => handleButtonClick()}
            // href="#"
            className={`w-[131px] h-[40px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300`}
          >
            Login
          </button>
        </div>
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Navbar;
