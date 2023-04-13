import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

//assets
import IconCartWhite from "../../assets/iconCartWhite.svg";
import { ButtonBackToHome } from "../../components/ButtonBackToHome";

//services
import client from "../../../apollo-client";
import { gql } from "@apollo/client";

//Types
import { IProduct } from "../../@types/products";

//utils
import { formatMoney } from "../../utils/formatMoney";

//Context
import { useCart } from "../../context/CartProvider";

//Styles
import {
  ProductContent,
  ProductInfo,
  ProductWrapper,
} from "../../styles/pages/product";

export default function Product({ product }: { product: IProduct }) {
  const { addProductToCart } = useCart();

  return (
    <ProductWrapper>
      <Head>
        <title>Capputeeno - {product.name}</title>
      </Head>

      <ButtonBackToHome />

      <ProductContent>
        <Image
          src={product.image_url}
          alt={product.name}
          width={640}
          height={580}
        />

        <ProductInfo>
          <strong>{product.category}</strong>
          <h1>{product.name}</h1>
          <h2>{formatMoney(product.price_in_cents / 100)}</h2>
          <span>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </span>

          <h3>Descrição</h3>

          <p>{product.description}</p>

          <button onClick={() => addProductToCart(product)}>
            <Image src={IconCartWhite} alt="adicionar carrinho" />
            Adicionar ao carrinho
          </button>
        </ProductInfo>
      </ProductContent>
    </ProductWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const GET_PRODUCT_BY_ID = gql`
    query Product($id: ID!) {
      Product(id: $id) {
        id
        name
        category
        price_in_cents
        sales
        description
        image_url
      }
    }
  `;

  const { data } = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables: {
      id: productId,
    },
  });

  return {
    props: {
      product: data.Product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
