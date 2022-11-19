import { GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";

//assets
import IconBack from "../../assets/iconBack.svg";
import IconCartWhite from "../../assets/iconCartWhite.svg";
import { ButtonBackToHome } from "../../components/ButtonBackToHome";

//Styles
import {
  ProductContent,
  ProductInfo,
  ProductWrapper,
} from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductWrapper>
      <ButtonBackToHome />

      <ProductContent>
        <Image
          src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg"
          alt="camiseta nova"
          width={640}
          height={580}
        />

        <ProductInfo>
          <strong>Caneca</strong>
          <h1>Caneca de cerâmica rústica</h1>
          <h2>R$ 40,00</h2>
          <span>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </span>

          <h3>Descrição</h3>

          <p>
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>

          <button>
            <Image src={IconCartWhite} alt="adicionar carrinho" />
            Adicionar ao carrinho
          </button>
        </ProductInfo>
      </ProductContent>
    </ProductWrapper>
  );
}
