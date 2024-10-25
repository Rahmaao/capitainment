// app/admin/layout.tsx
import { ReactNode } from 'react';
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { PageProvider } from '@/contexts/PageContext';

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageProvider>
      <div className="flex">
        <AdminSidebar />
        <main className="ml-64 w-full bg-[#FAFAFA] min-h-screen">
          <AdminNavbar />
          {children}
        </main>
      </div>
    </PageProvider>
  );
}