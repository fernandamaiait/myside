import { Product } from "@/app/general-types/Product";

export interface ProductsGridProps {
  products: Product[];
  categories: string[];
  dataCy?: string;
}
