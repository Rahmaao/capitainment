"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Category {
  id: number;
  dateCreated: string;
  categoryName: string;
  numberOfVideos: number;
  status: "Active" | "Inactive";
}

const categories: Category[] = [
  {
    id: 1,
    dateCreated: "March 23, 2023",
    categoryName: "Education",
    numberOfVideos: 10,
    status: "Active",
  },
  {
    id: 2,
    dateCreated: "April 5, 2023",
    categoryName: "Entertainment",
    numberOfVideos: 5,
    status: "Inactive",
  },
  {
    id: 3,
    dateCreated: "May 15, 2023",
    categoryName: "Technology",
    numberOfVideos: 8,
    status: "Active",
  },
  {
    id: 4,
    dateCreated: "June 20, 2023",
    categoryName: "Lifestyle",
    numberOfVideos: 12,
    status: "Inactive",
  },
];

const itemsPerPage = 10;

export default function Categories() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditDeleteModal, setShowEditDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(categories.map((category) => category.id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
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

  const handleCreateModalOpen = () => {
    setCategoryName("");
    setShowCreateModal(true);
  };

  const handleCreate = () => {
    console.log(`Creating category with name: ${categoryName}`);
    setShowCreateModal(false);
  };

  const handleActionClick = (
    categoryId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setSelectedCategory(categoryId);
    setShowEditDeleteModal(true);
  };

  const handleDeleteClick = () => {
    setShowEditDeleteModal(false);
    setShowDeleteConfirmModal(true);
  };

  const handleEdit = () => {
    if (selectedCategory !== null) {
      console.log(`Editing category with ID: ${selectedCategory}`);
      setShowCreateModal(true);
      setShowEditDeleteModal(false);
    }
  };

  const handleDelete = () => {
    if (selectedCategory !== null) {
      console.log(`Deleting category with ID: ${selectedCategory}`);
      // Perform the actual deletion logic here
      setShowDeleteConfirmModal(false);
    }
  };

  // Handle closing the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowEditDeleteModal(false);
      }
    };
  
    if (showEditDeleteModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEditDeleteModal]);

  return (
    <div className="w-full h-[85%] p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#080708] text-[16px]">Categories</p>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="/search.svg"
                alt="Search Icon"
                width={16}
                height={16}
              />
            </div>
            <input
              type="text"
              placeholder="Search by category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-[#E2E4E9] rounded-[10px] p-2 pl-10 w-[375px] h-[40px] text-[14px]"
            />
          </div>
          <button
            onClick={() => console.log("Exporting data...")}
            className="border border-[#E2E4E9] text-[#777777] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
          >
            <Image
              src="/export.svg"
              alt="Export Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            Export
          </button>
          <button
            onClick={handleCreateModalOpen}
            className="bg-[#BC1823] text-[#FFFFFF] font-medium rounded-[10px] px-4 py-2 flex items-center h-[40px] text-[14px]"
          >
            Create Category
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
                  Date Created
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Category Name
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Number of Videos
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Status
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedCategories.map((category) => (
                <tr
                  key={category.id}
                  className="hover:bg-gray-100 text-[#777777] text-[14px] font-normal"
                >
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(category.id)}
                      onChange={() => handleSelectOne(category.id)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    {category.dateCreated}
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    {category.categoryName}
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    {category.numberOfVideos}
                  </td>
                  <td
                    className={`py-2 px-4 border-b text-[10px] whitespace-nowrap ${
                      category.status === "Active"
                        ? "text-green-500"
                        : "text-[#868C98]"
                    }`}
                  >
                    <span
                      className={`flex justify-center items-center ${
                        category.status === "Active"
                          ? "bg-[#E0F9F0]"
                          : "bg-[#E4E6E5]"
                      } w-[72px] h-[26px] rounded-full`}
                    >
                      {category.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b text-center whitespace-nowrap">
                    <button
                      onClick={(event) => handleActionClick(category.id, event)}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src="/action.svg"
                        alt="Action Icon"
                        width={16}
                        height={16}
                      />
                    </button>
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
                    ? "bg-[#E2E4E9] text-[#080708]"
                    : "text-[#686767]"
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
            <label htmlFor="page-select" className="text-[#686767] text-[14px]">
              Go to page:
            </label>
            <select
              id="page-select"
              value={selectedPage}
              onChange={handlePageSelectChange}
              className="border border-[#E2E4E9] rounded-md px-2 py-1 text-[14px]"
            >
              {[...Array(totalPages)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Create Category Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4 text-black">
              {selectedCategory ? "Edit Category" : "Create Category"}
            </h3>
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border border-[#E2E4E9] rounded-md p-2 mb-4 w-full"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="bg-[#E4E6E5] text-[#777777] px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="bg-[#BC1823] text-white px-4 py-2 rounded-md"
              >
                {selectedCategory ? "Save Changes" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit/Delete Category Modal */}
      {showEditDeleteModal && (
        <div
        ref={modalRef}
          className="absolute right-4 mt-2 w-30 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
        >
          <button
            onClick={handleEdit}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick} // Updated to show delete confirmation modal
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}

      {showDeleteConfirmModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-4">
              Are you sure you want to delete this category? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirmModal(false)}
                className="bg-[#E4E6E5] text-[#777777] px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-[#BC1823] text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
