import Image from "next/image";

//Assets
import iconAll from "../../assets/iconAll.svg";

//Styles
import { ProductCategoryWrapper, CategoryItem } from "./styles";

export function ProductCategory() {
  const categories = [
    {
      id: 1,
      label: "Todos os Produtos",
      value: null,
    },
    {
      id: 3,
      label: "Camisetas",
      value: "t-shirts",
    },
    {
      id: 2,
      label: "Canecas",
      value: "mugs",
    },
  ];

  return (
    <ProductCategoryWrapper>
      {categories.map((category) => (
        <CategoryItem isActive={category.value === "mugs"} key={category.id}>
          {category.label}
        </CategoryItem>
      ))}
    </ProductCategoryWrapper>
  );
}
