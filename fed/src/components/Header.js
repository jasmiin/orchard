import React from "react";

export const Header = () => {
  return (
    <div className="bg-black py-6 sm:py-8 lg:py-12 relative">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 lg:block">
              This is a section of some simple filler text,
              also known as placeholder text. It shares some characteristics of a real written text.
            </p>
          </div>
          <a href="#"
            class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 lg:px-8 lg:py-3 lg:text-base">
            More
          </a>
        </div>
      </div>
    </div>
    );
  };
