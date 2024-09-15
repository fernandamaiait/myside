import React from "react";
import ProductGrid from "../product-grid";
import {
  categoriesExample,
  productGridDataCy,
  productsExample,
} from "./product-grid.data";

describe("<ProductGrid />", () => {
  beforeEach(() => {
    cy.mount(
      <ProductGrid
        products={productsExample}
        categories={categoriesExample}
        dataCy={productGridDataCy}
      />
    );
  });

  it("renders", () => {
    cy.get(`[data-cy=${productGridDataCy}]`).should("exist");
  });
});
