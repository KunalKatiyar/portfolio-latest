import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Concoted an App which is designed to be a digital assistant for teachers and learning companion for students.",
      keywords: ["digital assistant"],
    },
    {
      text: "Developed a flutter app which handled authentication, customized widgets like quizzes & real-time leaderboard.",
      keywords: ["flutter app", "authentication"],
    },
    {
      text: "Initialized firebase features & functions which allowed the project to handle 2,00,000 users at a time.",
      keywords: ["firebase features & functions", "2,00,000 users"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            App Developer <span className="text-AAsecondary">@ Flutter + Firebase</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">April 2021 - June 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
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
    </>
  );
}
