import styles from "./page.module.css";
import ProductGrid from "./components/product-grid/product-grid";
import Loading from "./loading";
import { baseUrl } from "./general-consts";

const fetchData = async () => {
  try {
    const [productsResponse, categoriesResponse] = await Promise.all([
      fetch(`${baseUrl}/products`),
      fetch(`${baseUrl}/products/category`),
    ]);

    if (!productsResponse.ok || !categoriesResponse.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const products = await productsResponse.json();
    const categories = await categoriesResponse.json();

    return { products: products.products, categories: categories.categories };
  } catch (error) {
    throw new Error("Erro ao buscar dados: " + error);
  }
};

const Home = async () => {
  const { products, categories } = await fetchData();

  if (!products.length) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductGrid
          products={products}
          categories={categories}
          dataCy="PRODUCT_GRID"
        />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
