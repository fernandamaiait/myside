import React from "react";
import styles from "./product-view.module.css";
import { ProductViewProps } from "./product-view.types";

const ProductView: React.FC<ProductViewProps> = ({ product, dataCy }) => {
  return (
    <div className={styles.card} data-cy={dataCy}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title} data-cy={`${dataCy}_TITLE`}>
          {product.title}
        </h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.info}>
          <strong>Marca:</strong> {product.brand}
        </p>
        <p className={styles.info}>
          <strong>Modelo:</strong> {product.model}
        </p>
        <p className={styles.info}>
          <strong>Cor:</strong> {product.color}
        </p>
        <p className={styles.info}>
          <strong>Categoria:</strong> {product.category}
        </p>
        <p className={styles.discount}>Discount: {product.discount}%</p>
      </div>
    </div>
  );
};

export default ProductView;
