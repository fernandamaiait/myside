"use client";
import styles from "./categories-container.module.css";
import { CategoriesContainerProps } from "./categories-container.types";

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  categories,
  selectedCategories,
  toggleCategory,
  dataCy,
}) => {
  return (
    <div className={styles["chip-container"]} data-cy={dataCy}>
      {categories.map((category) => (
        <div
          key={category}
          className={`${styles["chip-base"]} ${
            selectedCategories?.includes(category)
              ? styles["selected-chip"]
              : styles.chip
          }`}
          onClick={() => (toggleCategory ? toggleCategory(category) : null)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
