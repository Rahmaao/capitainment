// @ts-nocheck
import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-4xl bg-black p-4">
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-auto mb-4"
        />
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
};

export default VideoModal;