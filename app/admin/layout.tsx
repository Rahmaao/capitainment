// app/admin/layout.tsx
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children, pageName
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 w-full bg-[#FAFAFA] min-h-screen">
      <AdminNavbar/>
        {children}
      </main>
    </div>
  );
}