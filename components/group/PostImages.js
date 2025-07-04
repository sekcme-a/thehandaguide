"use client";
import { useRef, useState } from "react";

export default function PostImages({ images, isGroup }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {images.map((url, index) => (
          <div
            key={index}
            className={`flex-shrink-0 snap-center w-full ${isGroup ? "" : ""}`}
            style={{ borderRadius: 0, overflow: "hidden" }}
          >
            <img
              src={url}
              alt={`image-${index}`}
              className={`w-full h-auto ${
                isGroup ? "rounded-none" : "rounded-xl"
              } object-cover`}
            />
          </div>
        ))}
      </div>

      {/* Dot Indicator */}
      <div
        className={`flex justify-center ${
          isGroup ? "mt-[-10px]" : "mt-2"
        } space-x-2`}
      >
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 rounded-full ${
              index === activeIndex ? "bg-purple-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
