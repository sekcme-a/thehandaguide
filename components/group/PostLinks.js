"use client";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React from "react";

export default function PostLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="space-y-1 flex flex-col">
      {links.map((item, index) => {
        const isFullUrl =
          item.url.startsWith("http://") || item.url.startsWith("https://");
        const href = isFullUrl ? item.url : `https://${item.url}`;

        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <AttachFileIcon
              className="mr-1 text-gray-500 rotate-45"
              fontSize="small"
            />
            <span className="text-sm text-gray-600 border-b-[1px] border-b-gray-600">
              {item.title}
            </span>
          </a>
        );
      })}
    </div>
  );
}
