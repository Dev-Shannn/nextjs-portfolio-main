import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const isPlaceholder = gitUrl === "#" && previewUrl === "#";

  return (
    <div className={`rounded-xl bg-[#181818] ${isPlaceholder ? "p-6 text-center" : ""}`}>
      {!isPlaceholder && (
        <div
          className="h-40 md:h-60 rounded-t-xl relative group overflow-hidden"
          style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
        >
          <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      )}
      <div className={`text-white rounded-b-xl ${isPlaceholder ? "" : "mt-3"} py-4 px-4`}>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
