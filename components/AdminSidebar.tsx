// components/AdminSidebar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: "/dashboard.svg" },
    { href: "/admin/users", label: "Users", icon: "/people.svg" },
    { href: "/admin/transactions", label: "Transactions", icon: "/receipt.svg" },
    { href: "/admin/admin-videos", label: "Videos", icon: "/video.svg" },
    { href: "/admin/admin-settings", label: "Settings", icon: "/setting.svg" },
    { href: "#", label: "Logout", icon: "/logout.svg" },
  ];

  return (
    <aside className="w-64 bg-[#FFFFFF] text-[#777777] h-screen fixed top-0 left-0">
      <div className="border-b h-20">
        <Link href="/" className="w-[211px] h-full relative hidden md:flex">
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
        </Link>
      </div>
      <nav className="mt-10">
        <ul className="flex flex-col text-[14px] gap-2">
          {sidebarItems.map((item) => (
            <li
              key={item.href}
              className={`flex items-center pl-4 h-[36px] gap-3 ${
                pathname === item.href
                  ? "bg-[#BC182317] text-[#BC1823]"
                  : "hover:bg-[#BC182317]"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
              />
              <Link href={item.href} className="block">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}