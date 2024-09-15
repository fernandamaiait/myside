"use client";
import { useState } from "react";
import styles from "./categories-container.module.css";
import { CategoriesContainerProps } from "./categories-container.types";

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  categories,
  selectedCategories,
  toggleCategory,
}) => {
  return (
    <div className={styles["chip-container"]}>
      {categories.map((category) => (
        <div
          key={category}
          className={`${styles["chip-base"]} ${
            selectedCategories.includes(category)
              ? styles["selected-chip"]
              : styles.chip
          }`}
          onClick={() => toggleCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
