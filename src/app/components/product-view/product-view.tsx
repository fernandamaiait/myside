import React from "react";
import styles from "./product-view.module.css";
import { ProductViewProps } from "./product-view.types";

const ProductView: React.FC<ProductViewProps> = ({ product, dataCy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card} data-cy={dataCy}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h2 className={styles.title} data-cy={`${dataCy}_TITLE`}>
            {product.title}
          </h2>
          <p className={styles.price} data-cy={`${dataCy}_PRICE`}>
            ${product.price}
          </p>
          <p className={styles.description} data-cy={`${dataCy}_DESCRIPTION`}>
            {product.description}
          </p>
          <p className={styles.info} data-cy={`${dataCy}_BRAND`}>
            <strong>Marca:</strong> {product.brand}
          </p>
          <p className={styles.info} data-cy={`${dataCy}_MODEL`}>
            <strong>Modelo:</strong> {product.model}
          </p>
          <p className={styles.info} data-cy={`${dataCy}_COLOR`}>
            <strong>Cor:</strong> {product.color}
          </p>
          <p className={styles.info} data-cy={`${dataCy}_CATEGORY`}>
            <strong>Categoria:</strong>
            {product.category}
          </p>
          <p className={styles.discount} data-cy={`${dataCy}_DISCOUNT`}>
            Discount: {product.discount}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
