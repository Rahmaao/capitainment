// @ts-nocheck
import React, { useState } from "react";

interface VideoCardProps {
  title: string;
  views: string;
  date: string;
  thumbnail: string;
  description: string;
  videoUrl: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  views,
  date,
  thumbnail,
  description,
  videoUrl,
  onClick,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents the video click event from being triggered
    setLiked(!liked);
  };

  const handleShareClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents the video click event from being triggered

    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: videoUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert("Sharing is not supported on this browser. Please copy the link manually.");
    }
  };

  return (
    <div className="video-card p-2 cursor-pointer" onClick={onClick}>
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] text-[#0A0A0A] font-medium">{title}</h2>
          <div className="flex space-x-2">
            <img
              src={liked ? "heart-red.svg" : "heart.svg"}
              alt="Like"
              onClick={handleLikeClick}
              className="cursor-pointer"
            />
            <img
              src="export.svg"
              alt="Share"
              onClick={handleShareClick}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex space-x-1">
          <p className="text-[10px] text-[#6C6C6C]">{views} views • </p>
          <p className="text-[10px] text-[#6C6C6C]"> {date}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
