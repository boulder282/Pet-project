import type { ProductsCategory } from "../../types/types";

const Category = (props: ProductsCategory) => {
  const { name, products } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{name}</div>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Category;
