import type { NextPage } from "next";
//components
import { ProductCategory } from "../components/ProductCategory";
import { OrderByDropdown } from "../components/OrderByDropdown";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";

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
      <Pagination totalPages={5} />

      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>

      <Pagination totalPages={5} />
    </HomeWrapper>
  );
};

export default Home;
