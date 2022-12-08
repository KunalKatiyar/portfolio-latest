import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Worked on the onboarding and authentication of users on platform which serves to host interviews for jobs.",
      keywords: ["onboarding", "authentication"],
    },
    {
      text: "Developed an onboarding tour (rated 4.2 stars) for new users using on-screen steps and sample interviews.",
      keywords: ["onboarding tour", "(rated 4.2 stars)"],
    },
    {
      text: "Curated a system to send automated interactive Google AMP mails to guide new users to the platform.",
      keywords: ["automated interactive Google AMP mails"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer <span className="text-AAsecondary">@ Vue.js + Node.js</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">August 2021 - October 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
    </>
  );
}
