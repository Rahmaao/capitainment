"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const subscriptions = [
  {
    id: 1,
    date: "March 23, 1997",
    orderId: "#2788389",
    referenceNo: "REF123456",
    customerName: "John Doe",
    amount: "₦3,000.00",
    status: "Successful",
  },
  {
    id: 2,
    date: "April 5, 1997",
    orderId: "#269389",
    referenceNo: "REF654321",
    customerName: "Jane Doe",
    amount: "₦4,000.00",
    status: "Successful",
  },
  {
    id: 3,
    date: "May 15, 1997",
    orderId: "#0978389",
    referenceNo: "REF789012",
    customerName: "Jack Smith",
    amount: "₦2,500.00",
    status: "Failed",
  },
  {
    id: 4,
    date: "June 20, 1997",
    orderId: "#8678396",
    referenceNo: "REF345678",
    customerName: "Jill White",
    amount: "₦5,000.00",
    status: "Successful",
  },
  // Add more entries if needed
];

const itemsPerPage = 10; // Number of items per page

export default function SubscriptionHistory() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(subscriptions.map((sub) => sub.id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((subId) => subId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredSubscriptions = subscriptions.filter((sub) =>
    sub.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSubscriptions.length / itemsPerPage);
  const paginatedSubscriptions = filteredSubscriptions.slice(
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

  return (
    <div className="w-full h-[85%] p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#080708] text-[16px]">Overview</p>
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
              placeholder="Search by customer name or orderID"
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
        </div>
      </div>

      <div className="h-[80%] w-[98%] flex flex-col">
        <div className="overflow-x-auto flex-grow rounded-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#F0F0F0] text-[#080708] text-[14px] font-medium">
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedAll}
                    onChange={handleSelectAll}
                    className="form-checkbox h-4 w-4"
                  />
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Date
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Order ID
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Reference No.
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Customer Name
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Amount
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedSubscriptions.map((sub) => (
                <tr
                  key={sub.id}
                  className="hover:bg-gray-100 text-[#777777] text-[14px] font-normal"
                >
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(sub.id)}
                      onChange={() => handleSelectOne(sub.id)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.date}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.orderId}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.referenceNo}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.customerName}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.amount}
                    </Link>
                  </td>
                  <td
                    className={`py-2 px-4 border-b text-[10px] whitespace-nowrap ${
                      sub.status === "Successful"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <Link
                      href={`/admin/transaction-history/${sub.id}`}
                      className={`flex justify-center items-center ${
                        sub.status === "Successful"
                          ? "bg-[#E0F9F0]"
                          : "bg-[#FFDBDB]"
                      } w-[72px] h-[26px] rounded-full`}
                    >
                      {sub.status}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
