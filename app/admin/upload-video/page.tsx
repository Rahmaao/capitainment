"use client";

import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import back from "@/public/Back.svg";
import { useRouter } from "next/navigation";


const VideoUpload: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [video, setVideo] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const router = useRouter();
  const [category, setCategory] = useState<string>(''); // New state for category
  
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', { title, video, thumbnail, category });
  };

  

  return (
    <div className="w-full p-4">
      <button
          className="w-full h-[100px] lg:h-[70px] flex items-center"
          onClick={() => router.back()}
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center">
            <Image
              src={back}
              alt="Back"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="min-w-[125px] h-[50px] flex items-center pl-2">
            <h2 className="text-[20px] text-[#0A0A0A] font-bold text-left">
            Add New Video
            </h2>
          </div>
        </button>
      <div className="w-full p-4 flex flex-wrap justify-between -mx-2 border-0">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 px-2 py-4 mb-4 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Video Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Category Selection */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select a category</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Sports">Sports</option>
                {/* Add more categories as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Video File
              </label>

              {/* File upload box with icon */}
              <div
                onClick={() => videoInputRef.current?.click()}
                className="flex flex-col justify-between items-center mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
              >
                <Image
                  src="/upload-icon.svg" // Placeholder for an actual upload icon
                  alt="Upload Icon"
                  width={30}
                  height={30}
                />
                <p className="text-gray-500 mt-2">Choose a file or drag & drop it here</p>
                <p className="text-gray-400 text-sm">JPEG, PNG, MP4, up to 50 MB</p>

                <button
                type="button"
                onClick={() => videoInputRef.current?.click()}
                className="mt-4 text-[#525866] text-sm min-w-[110px] border border-[#E2E4E9] rounded-lg p-2 text-center"
              >
                {video ? 'Change File' : 'Browse File'}
              </button>
              </div>

              {/* Hidden input for file */}
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*,image/jpeg,image/png"
                onChange={handleVideoChange}
                className="hidden"
              />

              {/* Upload file button */}
              
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail File
              </label>

              {/* File upload box with icon */}
              <div
                onClick={() => thumbnailInputRef.current?.click()}
                className="flex flex-col justify-between items-center mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
              >
                <Image
                  src="/upload-icon.svg" // Placeholder for an actual upload icon
                  alt="Upload Icon"
                  width={30}
                  height={30}
                />
                <p className="text-gray-500 mt-2">Choose a file or drag & drop it here</p>
                <p className="text-gray-400 text-sm">JPEG or PNG up to 5 MB</p>

                <button
                type="button"
                onClick={() => thumbnailInputRef.current?.click()}
                className="mt-4 text-[#525866] text-sm min-w-[110px] border border-[#E2E4E9] rounded-lg p-2 text-center"
              >
                {video ? 'Change File' : 'Browse File'}
              </button>
              </div>

              {/* Hidden input for file */}
              <input
                ref={thumbnailInputRef}
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="hidden"
              />

              
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#BC1823] text-white rounded-md"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Preview */}
        <div className="w-full md:w-[48%] px-2 py-4 rounded-lg border border-[#E5E5E5] bg-[#FFFFFF]">
          <h3 className="text-sm text-[#2F2B43] font-medium mb-2">Preview</h3>
          <div className="border border-gray-300 rounded-md p-4">
            <h4 className="font-medium mb-2">{title || 'Video Title'}</h4>
            {videoPreview ? (
              <video src={videoPreview} controls className="w-full mb-2" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-500">Video Preview</span>
              </div>
            )}
            {thumbnailPreview ? (
              <Image
                src={thumbnailPreview}
                alt="Thumbnail preview"
                width={100}
                height={70}
                layout="responsive"
                objectFit="contain"
              />
            ) : (
              <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Thumbnail Preview</span>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
