import type { NextPage } from "next";
//components
import { ProductCategory } from "../components/ProductCategory";
import { OrderByDropdown } from "../components/OrderByDropdown";
import { ProductCard } from "../components/ProductCard";

//Styles
import {
  HomeWrapper,
  HomeHeader,
  ProductsContainer,
} from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <HomeHeader>
        <ProductCategory />
        <OrderByDropdown />
      </HomeHeader>

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
