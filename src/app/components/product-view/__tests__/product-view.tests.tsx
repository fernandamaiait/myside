import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import ProductView from "../product-view";

test("renders ExampleComponent with correct text", () => {
  render(
    <ProductView
      product={{
        id: "1",
        title: "Example Title",
        price: 100,
        description: "Example Description",
        brand: "Example Brand",
        model: "Example Model",
        color: "Example Color",
        category: "Example Category",
        discount: 10,
        image: "example-image.jpg",
      }}
    />
  );
  expect(screen.getByText("Example Title")).toBeVisible();
});
