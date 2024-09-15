export type CategoriesContainerProps = {
  categories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
};
