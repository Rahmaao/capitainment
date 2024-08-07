// @ts-nocheck
"use client";

import React, { useState } from "react";
import Categories from "./Categories";
import { Menu, Transition } from "@headlessui/react";

const CategoriesContainer = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Today", "Yesterday", "This month", "Continue watching"];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="block lg:hidden">
        <Menu as="div" className="relative inline-block text-left w-full">
          <div>
            <Menu.Button className="inline-flex justify-between min-w-[30%] px-4 py-2 text-sm font-medium bg-[#3B3B3B] text-white border border-[#6C6C6C] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {activeCategory}
              <svg
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {categories.map((category, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {category}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="hidden lg:flex justify-between lg:space-x-2 lg:flex-nowrap flex-wrap gap-3">
        {categories.map((category, index) => (
          <Categories
            key={index}
            text={category}
            isActive={activeCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
