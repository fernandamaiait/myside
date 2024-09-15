"use client";

import { Product } from "@/app/general-types/Product";
import styles from "./product-grid.module.css";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div>
      <div className={styles["grid-container"]}>
        {products.map(({ id, title, description, image, price }) => (
          <a key={id} href={`/${id}`} className={styles["grid-item"]}>
            <img src={image} alt={title} className={styles["product-image"]} />
            <h3 className={styles["product-title"]}>{title}</h3>
            <p className={styles["product-description"]}>{description}</p>
            <p className={styles["product-price"]}>R$ {price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
