import type { NextPage } from "next";
import { ProductCard } from "../components/ProductCard";

//components
import { ProductCategory } from "../components/ProductCategory";
import { HomeWrapper, ProductsContainer } from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <ProductCategory />
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </HomeWrapper>
  );
};

export default Home;
