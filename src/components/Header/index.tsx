import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//Assets
import logoSvg from "../../assets/logo.svg";
import iconSearch from "../../assets/iconSearch.svg";
import iconCart from "../../assets/iconCart.svg";

//Context
import { useCart } from "../../context/CartProvider";

//Styles
import {
  HeaderWrapper,
  HeaderContent,
  SearchInput,
  ButtonCart,
} from "./styles";

export function Header() {
  const router = useRouter();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const search = e.currentTarget.value;

      router.push(
        {
          pathname: `/`,
          query: search ? { ...router.query, search, page: 1 } : {},
        },
        undefined
      );
    }
  };

  const { productsInTheCart } = useCart();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Image src={logoSvg} alt="logo da capputeeno" />
        <div>
          <SearchInput>
            <input
              onKeyUp={handleKeyUp}
              defaultValue={router.query?.search}
              type="text"
              placeholder="Procurando por algo específico?"
              data-testid="search-input"
            />
            <Image src={iconSearch} alt="icone de pesquisa" />
          </SearchInput>
          <Link href="/cart">
            <ButtonCart
              aria-label=" ir para o carrinho"
              data-total-products={productsInTheCart.length}
            >
              <Image src={iconCart} alt="icone de carrinho" />
            </ButtonCart>
          </Link>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
}
