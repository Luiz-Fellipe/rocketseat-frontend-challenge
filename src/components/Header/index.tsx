import Image from "next/image";

//Assets
import logoSvg from "../../assets/logo.svg";
import iconSearch from "../../assets/iconSearch.svg";
import iconCart from "../../assets/iconCart.svg";

//Styles
import { HeaderWrapper, HeaderContent, SearchInput } from "./styles";
import Link from "next/link";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Image src={logoSvg} alt="logo da capputeeno" />
        <div>
          <SearchInput>
            <input type="text" placeholder="Procurando por algo específico?" />
            <Image src={iconSearch} alt="icone de pesquisa" />
          </SearchInput>
          <Link href="/cart">
            <button aria-label=" ir para o carrinho">
              <Image src={iconCart} alt="icone de carrinho" />
            </button>
          </Link>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
}
