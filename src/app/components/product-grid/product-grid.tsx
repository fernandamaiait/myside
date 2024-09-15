"use client";

import { Product } from "@/app/general-types/Product";
import styles from "./product-grid.module.css";
import { CategoriesContainer } from "../categories-container";
import { useEffect, useState } from "react";

interface ProductsGridProps {
  products: Product[];
  categories: string[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  categories,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const filterProducts = () => {
      let result = products;

      if (selectedCategories.length > 0) {
        result = result.filter((product) =>
          selectedCategories.includes(product.category),
        );
      }

      if (searchQuery) {
        result = result.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }

      setFilteredProducts(result);
    };

    filterProducts();
  }, [selectedCategories, searchQuery, products]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category],
    );
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <CategoriesContainer
        categories={categories}
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />

      {filteredProducts.length === 0 ? (
        <div className={styles["no-product-container"]}>
          <p>Nenhum produto encontrado</p>
        </div>
      ) : (
        <div className={styles["grid-container"]}>
          {filteredProducts.map(({ id, title, description, image, price }) => (
            <a key={id} href={`/${id}`} className={styles["grid-item"]}>
              <img
                src={image}
                alt={title}
                className={styles["product-image"]}
              />
              <h3 className={styles["product-title"]}>{title}</h3>
              <p className={styles["product-description"]}>{description}</p>
              <p className={styles["product-price"]}>R$ {price}</p>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
