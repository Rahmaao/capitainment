"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import VideosContainer from "@/components/VideosContainer";
import AdminVideos from "@/components/AdminVideos";

const users = [
  {
    id: 1,
    name: "John Doe",
    dateRegistered: "March 23, 2023",
    email: "johndoe@example.com",
    phoneNumber: "08123456789",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Doe",
    dateRegistered: "April 5, 2023",
    email: "janedoe@example.com",
    phoneNumber: "08198765432",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Jack Smith",
    dateRegistered: "May 15, 2023",
    email: "jacksmith@example.com",
    phoneNumber: "08112345678",
    status: "Active",
  },
  {
    id: 4,
    name: "Jill White",
    dateRegistered: "June 20, 2023",
    email: "jillwhite@example.com",
    phoneNumber: "08187654321",
    status: "Inactive",
  },
  // Add more entries if needed
];

const itemsPerPage = 10; // Number of items per page

export default function UserManagement() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((user) => user.id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((userId) => userId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setSelectedPage(page);
    }
  };

  const handlePageSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
    setSelectedPage(selectedPage);
  };

  const handleActionClick = (userId: number) => {
    setSelectedUser(userId);
    setShowModal(true);
  };

  const handleDeactivate = () => {
    console.log(`Deactivating user with ID: ${selectedUser}`);
    setShowModal(false);
  };

  return (
    <div className="w-full h-[85%] p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#080708] text-[16px]">All Videos</p>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="/search.svg" // Replace with the path to your icon
                alt="Search Icon"
                width={16} // Adjust the width of the icon
                height={16} // Adjust the height of the icon
              />
            </div>
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-[#E2E4E9] rounded-[10px] p-2 pl-10 w-[375px] h-[40px] text-[14px]" // Adjust padding to make space for the icon
            />
          </div>
          <button
            onClick={() => console.log("Exporting data...")}
            className="border border-[#E2E4E9] text-[#777777] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
          >
            <Image
              src="/export.svg" // Replace with the path to your icon
              alt="Export Icon"
              width={16} // Adjust the width of the icon
              height={16} // Adjust the height of the icon
              className="mr-2" // Adds space between the icon and the text
            />
            Export
          </button>
          <a href="/admin/categories"
            
            className="bg-[#20232D] text-[#FFFFFF] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
          >
            View Categories
          </a>
          <a href="/admin/upload-video"
            onClick={() => console.log("Exporting data...")}
            className="bg-[#BC1823] text-[#FFFFFF] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
          >
            Upload Video
          </a>
        </div>
      </div>

      <div className="min-h-[80%] w-[98%] flex flex-col">
        <AdminVideos />

        {/* Updated Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-[#686767] text-[14px]">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-[#FFFFFF] text-[#686767] border border-[#E2E4E9] px-3 py-1 rounded-md"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border border-[#E2E4E9] rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#F6F8FA] text-[#0A0D14]"
                    : "bg-[#FFFFFF] text-[#686767]"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-[#FFFFFF] text-[#686767] border border-[#E2E4E9] px-3 py-1 rounded-md"
            >
              &gt;
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={selectedPage}
              onChange={handlePageSelectChange}
              className="border border-[#E2E4E9] h-[32px] rounded-md p-2"
            >
              {[...Array(totalPages)].map((_, index) => (
                <option key={index} value={index + 1}>
                  Page {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      
    </div>
  );
}
