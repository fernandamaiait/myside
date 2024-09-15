import React from "react";
import {
  categoriesContainerDataCy,
  categoriesExample,
} from "./categories-container.data";
import CategoriesContainer from "../categories-container";

describe("<CategoriesContainer />", () => {
  beforeEach(() => {
    cy.mount(
      <CategoriesContainer
        categories={categoriesExample}
        dataCy={categoriesContainerDataCy}
      />
    );
  });

  it("renders", () => {
    cy.get(`[data-cy=${categoriesContainerDataCy}]`).should("exist");
  });
});
