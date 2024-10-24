"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import back from "@/public/Back.svg";
import profilePic from "@/public/prof.svg";

// Mock data for users and their transactions
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "08123456789",
    transactions: [
      {
        id: 1,
        date: "2024-08-07",
        description: "Monthly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-12345-67890",
        type: "Debit",
      },
      {
        id: 2,
        date: "2024-07-07",
        description: "Weekly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-23456-78901",
        type: "Debit",
      },
      // Add more transactions if needed
    ],
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "08123456789",
    transactions: [
      {
        id: 1,
        date: "2024-08-07",
        description: "Monthly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-12345-67890",
        type: "Debit",
      },
      {
        id: 2,
        date: "2024-07-07",
        description: "Weekly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-23456-78901",
        type: "Debit",
      },
      // Add more transactions if needed
    ],
  },
  {
    id: 3,
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "08123456789",
    transactions: [
      {
        id: 1,
        date: "2024-08-07",
        description: "Monthly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-12345-67890",
        type: "Debit",
      },
      {
        id: 2,
        date: "2024-07-07",
        description: "Weekly Subscription",
        amount: "₦3,000.00",
        status: "Successful",
        transactionId: "TRX-23456-78901",
        type: "Debit",
      },
      // Add more transactions if needed
    ],
  },
];

const itemsPerPage = 10;

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const userId = parseInt(params.id);
  const user = users.find((u) => u.id === userId);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  if (!user) {
    return <div className="container mx-auto p-4">User not found</div>;
  }

  const transactions = user.transactions;

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(transactions.map((transaction) => transaction.id));
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

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
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
    <div className="container bg-[#FAFAFA] pb-[84px] lg:pb-0 h-screen flex flex-col justify-evenly">
      <div className="w-full h-[18%] flex items-center">
        <div className="bg-[#FFFFFF] rounded-lg border border-[#E5E5E5] w-full h-[75px] flex items-center justify-between px-5">
          <div className="min-w-[185px] h-[50px] flex justify-between">
            <div className="w-[50px] h-[50px]">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
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
          <div className="bg-[#ffff]">
            <button
              onClick={() => handleActionClick(user.id)}
              className="border border-[#E2E4E9] text-[#777777] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
            >
              <Image
                src="/action.svg" // Replace with the path to your icon
                alt="Action Icon"
                width={16} // Adjust the width of the icon
                height={16} // Adjust the height of the icon
                className="mr-2" // Adds space between the icon and the text
              />
              Action
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[82%] p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[#080708] text-[16px]">All Subscriptions</p>
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
                placeholder="Search by description"
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
                    Description
                  </th>
                  <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                    Transaction ID
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
                {paginatedTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-100 text-[#777777] text-[14px] font-normal"
                  >
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(transaction.id)}
                        onChange={() => handleSelectOne(transaction.id)}
                        className="form-checkbox h-4 w-4"
                      />
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <Link
                        href={`/admin/transaction-history/${transaction.id}`}
                        className="block w-full h-full"
                      >
                        {transaction.date}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <Link
                        href={`/admin/transaction-history/${transaction.id}`}
                        className="block w-full h-full"
                      >
                        {transaction.description}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <Link
                        href={`/admin/transaction-history/${transaction.id}`}
                        className="block w-full h-full"
                      >
                        {transaction.transactionId}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <Link
                        href={`/admin/transaction-history/${transaction.id}`}
                        className="block w-full h-full"
                      >
                        {transaction.amount}
                      </Link>
                    </td>
                    <td
                      className={`py-2 px-4 border-b text-[10px] whitespace-nowrap ${
                        transaction.status === "Successful"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <Link
                        href={`/admin/transaction-history/${transaction.id}`}
                        className={`flex justify-center items-center ${
                          transaction.status === "Successful"
                            ? "bg-[#E0F9F0]"
                            : "bg-[#FFDBDB]"
                        } w-[72px] h-[26px] rounded-full`}
                      >
                        {transaction.status}
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

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowModal(false)} // Close modal on click outside
        >
          <div
            className="bg-[#FFFFFF] text-[#080708] flex flex-col justify-between p-3 rounded-lg w-[350px] h-[170px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="">
              <h2 className="text-lg mb-2">Deactivate User</h2>
              <p className=" text-sm">
                Are you sure you want to deactivate this user?
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border text-sm text-[#686767] border-[#E2E4E9] h-[40px] rounded-xl mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeactivate}
                className="px-4 py-2 bg-[#BC1823] h-[40px] text-sm text-white rounded-xl"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
