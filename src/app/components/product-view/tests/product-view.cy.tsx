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
      productExample.title
    );
  });
  it("shows product price", () => {
    cy.get(`[data-cy=${productDataCy}_PRICE]`).should(
      "contain",
      productExample.price
    );
  });

  it("shows product description", () => {
    cy.get(`[data-cy=${productDataCy}_DESCRIPTION]`).should(
      "contain",
      productExample.description
    );
  });

  it("shows product brand", () => {
    cy.get(`[data-cy=${productDataCy}_BRAND]`).should(
      "contain",
      productExample.brand
    );
  });

  it("shows product model", () => {
    cy.get(`[data-cy=${productDataCy}_MODEL]`).should(
      "contain",
      productExample.model
    );
  });

  it("shows product color", () => {
    cy.get(`[data-cy=${productDataCy}_COLOR]`).should(
      "contain",
      productExample.color
    );
  });

  it("shows product category", () => {
    cy.get(`[data-cy=${productDataCy}_CATEGORY]`).should(
      "contain",
      productExample.category
    );
  });

  it("shows product discount", () => {
    cy.get(`[data-cy=${productDataCy}_DISCOUNT]`).should(
      "contain",
      productExample.discount
    );
  });
});
