import { ProductView } from "../components/product-view";

const fetchData = async (id: any) => {
  try {
    const productResponse = await fetch(
      `https://fakestoreapi.in/api/products/${id}`
    );
    if (!productResponse.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const product = await productResponse.json();

    return { product: product.product };
  } catch (error) {
    alert("Erro ao buscar dados: " + error);
    return { product: [] };
  }
};

type Params = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: Params) => {
  const { id } = params;
  const { product } = await fetchData(id);

  console.log(product);
  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <ProductView product={product} />
    </div>
  );
};

export default ProductPage;
