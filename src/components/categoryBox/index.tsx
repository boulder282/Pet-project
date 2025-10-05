import { useGetCategoriesQuery } from "../../store/features/api/cardApi";
import Category from "../category/category";

const CategoryBox = () => {
  const { data: categories } = useGetCategoriesQuery("", {});

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {categories?.map((category) => (
        <Category
          key={category.id}
          name={category.name}
          products={category.products}
        />
      ))}
    </div>
  );
};
export default CategoryBox;
