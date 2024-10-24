"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AdminNavbar() {
  const pathname = usePathname()!; 
  const pageName = getPageNameFromRoute(pathname);

  return (
    <nav className="bg-[#FFFFFF] text-white h-20 flex items-center justify-between px-4">
      <div className="text-lg text-[#0A0D14] font-medium">{pageName}</div>

      <div className="relative">
        <button className="p-2 rounded">
          <Image
            src="/notifications-icon.svg" // replace with your notifications icon path
            alt="Notifications"
            width={24}
            height={24}
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </nav>
  );
}

// Helper function to get page name from route
function getPageNameFromRoute(pathname: string): string {
  switch (pathname) {
    case "/admin/dashboard":
      return "Dashboard";
    case "/admin/users":
      return "Users";
    case "/admin/transactions":
      return "Transactions";
    case "/admin/admin-videos":
      return "Videos";
    case "/admin/admin-settings":
      return "Settings";
    default:
      return "Admin";
  }
}
