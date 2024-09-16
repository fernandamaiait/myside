import { ProductView } from "../components/product-view";
import { baseUrl } from "../general-consts";

const fetchData = async (id: string) => {
  try {
    const productResponse = await fetch(`${baseUrl}/products/${id}`);
    if (!productResponse.ok) {
      Error();
    }

    const product = await productResponse.json();

    return { product: product.product };
  } catch (error) {
    Error("Erro ao buscar dados: " + error);
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

  if (!product) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <p>Produto não encontrado</p>
      </div>
    );
  }

  return (
    <div>
      <ProductView product={product} dataCy="PRODUCT_VIEW" />
    </div>
  );
};

export default ProductPage;
