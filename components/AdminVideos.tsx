// @ts-nocheck
"use client";

import React, { useState } from "react";
import AdminVideoCard from "./AdminVideoCard";
import VideoModal from "./VideoModal";

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

const AdminVideos = () => {
  const [videos] = useState(hardcodedVideos);
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    title: string;
  } | null>(null);

  const handleVideoClick = (videoUrl: string, title: string) => {
    setSelectedVideo({ videoUrl, title });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div className="videos-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <AdminVideoCard
            key={video.id}
            title={video.title}
            views={video.views}
            date={video.date}
            thumbnail={video.thumbnail}
            description={video.description}
            videoUrl={video.videoUrl}
            onClick={() => handleVideoClick(video.videoUrl, video.title)}
          />
        ))}
      </div>

      {/* Only render VideoModal if a video is selected */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminVideos;