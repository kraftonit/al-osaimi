"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="min-h-[80vh] relative">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/video-thumbnail.jpg"
        alt="Video Thumbnail"
        width={1920}
        height={1000}
        onClick={handleOpen}
      />
      <button
        onClick={handleOpen}
        className="video-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-primary text-black p-10 rounded-full"
      >
        <PlayIcon className="size-8" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <span
              className="close cursor-pointer text-white"
              onClick={handleClose}
            >
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MPBMb3gaNyk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
