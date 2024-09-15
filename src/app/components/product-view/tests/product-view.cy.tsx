import React from "react";
import ProductView from "../product-view";
import { productDataCy, productExample } from "./product-view.data";

describe("<ProductView />", () => {
  beforeEach(() => {
    cy.mount(<ProductView product={productExample} dataCy={productDataCy} />);
  });

  it("renders", () => {
    cy.get(`[data-cy=${productDataCy}]`).should("exist");
  });

  it("shows product title", () => {
    cy.get(`[data-cy=${productDataCy}_TITLE]`).should(
      "contain",
      productExample.title,
    );
  });
});
