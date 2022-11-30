import type { GetServerSideProps, NextPage } from "next";

//components
import { ProductCategory } from "../components/ProductCategory";
import { OrderByDropdown } from "../components/OrderByDropdown";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";

//services
import client from "../../apollo-client";
import { gql } from "@apollo/client";

//Types
import { IProduct } from "../@types/products";

//Styles
import {
  HomeWrapper,
  HomeHeader,
  ProductsContainer,
} from "../styles/pages/home";

interface IHomeProps {
  products: Pick<IProduct, "id" | "name" | "price_in_cents" | "image_url">[];
  totalProducts: number;
}

const PRODUCTS_PER_PAGE = 12;

export default function Home({ products, totalProducts }: IHomeProps) {
  const totalPages = totalProducts / PRODUCTS_PER_PAGE;

  return (
    <HomeWrapper>
      <HomeHeader>
        <ProductCategory />
        <OrderByDropdown />
      </HomeHeader>

      <Pagination totalPages={totalPages} />

      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>

      <Pagination totalPages={totalPages} />
    </HomeWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const GET_ALL_PRODUCTS = gql`
    query AllProducts(
      $perPage: Int
      $page: Int
      $sortOrder: String
      $sortField: String
    ) {
      allProducts(
        perPage: $perPage
        page: $page
        sortOrder: $sortOrder
        sortField: $sortField
      ) {
        id
        name
        price_in_cents
        image_url
      }
      _allProductsMeta {
        count
      }
    }
  `;

  const page = Number(query.page) - 1 || 0;

  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      perPage: PRODUCTS_PER_PAGE,
      page: page,
      sortField: "created_at",
      sortOrder: "asc",
    },
  });

  return {
    props: {
      products: data.allProducts,
      filteredProducts: data.allProducts.length,
      totalProducts: data._allProductsMeta.count,
    },
  };
};
