import React, { useState, useRef } from "react";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  views: string;
  date: string;
  thumbnail: string;
  description: string;
  videoUrl: string;
  onClick: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const AdminVideoCard: React.FC<VideoCardProps> = ({
  title,
  views,
  date,
  thumbnail,
  description,
  videoUrl,
  onClick,
  onDelete,
  onEdit,
}) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const actionButtonRef = useRef<HTMLDivElement>(null);
  const deleteConfirmationRef = useRef<HTMLDivElement>(null);

  const handleActionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsActionMenuOpen(!isActionMenuOpen);
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onEdit();
    setIsActionMenuOpen(false);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsDeleteConfirmationOpen(true);
    setIsActionMenuOpen(false);
  };

  const confirmDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onDelete();
    setIsDeleteConfirmationOpen(false);
  };

  const cancelDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsDeleteConfirmationOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (actionButtonRef.current && !actionButtonRef.current.contains(e.target as Node)) {
      setIsActionMenuOpen(false);
    }
    if (deleteConfirmationRef.current && !deleteConfirmationRef.current.contains(e.target as Node)) {
      setIsDeleteConfirmationOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="video-card p-2 cursor-pointer" onClick={onClick}>
      <div className="relative w-full h-48">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] text-[#0A0A0A] font-medium">{title}</h2>
          <div className="relative" ref={actionButtonRef}>
            <div
              onClick={handleActionClick}
              className="cursor-pointer p-1"
            >
              <Image
                src="/threedots.svg"
                alt="Actions"
                width={4}
                height={4}
              />
            </div>
            {isActionMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={handleEditClick}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-1">
          <p className="text-[10px] text-[#6C6C6C]">{views} views • </p>
          <p className="text-[10px] text-[#6C6C6C]"> {date}</p>
        </div>
      </div>
      
      {isDeleteConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div 
            ref={deleteConfirmationRef}
            className="bg-white rounded-lg p-6 m-4 max-w-sm w-full"
          >
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete this video?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVideoCard;