// @ts-nocheck

"use client";


import React, { useState } from "react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import LoginModal from "./LoginModal";

// Hardcoded video data
const hardcodedVideos = [
  {
    id: 1,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg",
    description: "Description for video 1",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 2,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/207582/pexels-photo-207582.jpeg",
    description: "Description for video 2",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 3,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg",
    description: "Description for video 3",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 4,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg",
    description: "Description for video 1",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 5,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/207582/pexels-photo-207582.jpeg",
    description: "Description for video 2",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 6,
    title: "How to Create Magic",
    views: "19,210,251",
    date: "July 1, 2016",
    thumbnail:
      "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg",
    description: "Description for video 3",
    videoUrl:
      "https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4",
  },
  // Add more hardcoded videos as needed
];

const VideosContainer = () => {
  const [videos] = useState(hardcodedVideos);
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    description: string;
  } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleVideoClick = (videoUrl: string, description: string) => {
    if (isLoggedIn) {
      setSelectedVideo({ videoUrl, description });
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <div className="videos-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            views={video.views}
            date={video.date}
            thumbnail={video.thumbnail}
            description={video.description}
            videoUrl={video.videoUrl}
            onClick={() => handleVideoClick(video.videoUrl, video.description)}
          />
        ))}
      </div>
      <VideoModal
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo?.videoUrl || ""}
        description={selectedVideo?.description || ""}
        onClose={handleCloseModal}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default VideosContainer;
