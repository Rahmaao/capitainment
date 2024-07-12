// @ts-nocheck
"use client";

import React, { useState } from "react";
import Categories from "./Categories";

const CategoriesContainer = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Today", "Yesterday", "This month", "Continue watching"];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex justify-between lg:space-x-2 lg:flex-nowrap flex-wrap gap-3">
      {categories.map((category, index) => (
        <Categories
          key={index}
          text={category}
          isActive={activeCategory === category}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoriesContainer;
