import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
  const tasks = [
    {
      text: "Worked on the project of 'Dynamic Ads' to help adapt the Ads on the main website for millions of users.",
      keywords: ["'Dynamic Ads'"],
    },
    {
      text: "Designed and Developed APIs and CRUD Dashboard to create and edit ads for the admins of different teams.",
      keywords: ["APIs", "CRUD Dashboard"],
    },
    {
      text: "Researched and Implemented algorithms to personalize ads based on previous user activites on the website.",
      keywords: ["Implemented algorithms"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Developer <span className="text-AAsecondary">@ React.js + Node.js</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">May 2022 - July 2022</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
