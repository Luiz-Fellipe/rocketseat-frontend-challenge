import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

//Assets
import iconAll from "../../assets/iconAll.svg";

//Styles
import { ProductCategoryWrapper, CategoryItem } from "./styles";

enum ICategoryTypes {
  "all" = "Todos os Produtos",
  "t-shirts" = "Camisetas",
  "mugs" = "Canecas",
}

type ICategoryTypesKeys = keyof typeof ICategoryTypes;

export function ProductCategory() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<ICategoryTypesKeys>(
    () => {
      if (router?.query?.category) {
        return router?.query?.category as ICategoryTypesKeys;
      }
      return "all";
    }
  );

  function handleSetCategory(value: ICategoryTypesKeys) {
    router.push(
      {
        pathname: `/`,
        query: { ...router.query, category: value, page: 1 },
      },
      undefined
    );
    setActiveCategory(value);
  }

  return (
    <ProductCategoryWrapper>
      {Object.entries(ICategoryTypes)?.map(([key, value]) => (
        <CategoryItem
          isActive={key === activeCategory}
          data-testid={key}
          key={key}
          onClick={() => handleSetCategory(key as ICategoryTypesKeys)}
        >
          {value}
        </CategoryItem>
      ))}
    </ProductCategoryWrapper>
  );
}
