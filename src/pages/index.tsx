import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";

//components
import { ProductCategory } from "../components/ProductCategory";
import {
  IOrderTypesKeys,
  OrderByDropdown,
} from "../components/OrderByDropdown";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";
import { ResultsNotFound } from "../components/ResultsNotFound";

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
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const hasProducts = products.length > 0;

  return (
    <HomeWrapper>
      <Head>
        <title>Capputeeno</title>
      </Head>
      <HomeHeader>
        <ProductCategory />
        <OrderByDropdown />
      </HomeHeader>

      {hasProducts && <Pagination totalPages={totalPages} />}

      <ProductsContainer>
        {hasProducts ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ResultsNotFound />
        )}
      </ProductsContainer>

      {hasProducts && <Pagination totalPages={totalPages} />}
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
      $filter: ProductFilter
    ) {
      allProducts(
        perPage: $perPage
        page: $page
        sortOrder: $sortOrder
        sortField: $sortField
        filter: $filter
      ) {
        id
        name
        price_in_cents
        image_url
      }
      _allProductsMeta(perPage: $perPage, page: $page, filter: $filter) {
        count
      }
    }
  `;

  const page = Number(query.page) - 1 || 0;

  const orderBy = query?.orderBy as IOrderTypesKeys;
  const orderFilter: Record<IOrderTypesKeys, { order: string; field: string }> =
    {
      "best-sellers": {
        field: "sales",
        order: "asc",
      },
      "new-products": {
        field: "created_at",
        order: "asc",
      },
      "price-max-min": {
        field: "price_in_cents",
        order: "desc",
      },
      "price-min-max": {
        field: "price_in_cents",
        order: "asc",
      },
    };

  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      perPage: PRODUCTS_PER_PAGE,
      page: page,
      sortField: orderFilter[orderBy]?.field || "created_at",
      sortOrder: orderFilter[orderBy]?.order || "asc",
      filter: {
        q: query.search,
        category: query.category === "all" ? undefined : query.category,
      },
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
