import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//Assets
import logoSvg from "../../assets/logo.svg";
import iconSearch from "../../assets/iconSearch.svg";
import iconCart from "../../assets/iconCart.svg";

//Styles
import { HeaderWrapper, HeaderContent, SearchInput } from "./styles";

export function Header() {
  const router = useRouter();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const search = e.currentTarget.value;

      router.push(
        {
          pathname: `/`,
          query: search ? { search, page: 1 } : {},
        },
        undefined
      );
    }
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Image src={logoSvg} alt="logo da capputeeno" />
        <div>
          <SearchInput>
            <input
              onKeyUp={handleKeyUp}
              type="text"
              placeholder="Procurando por algo específico?"
            />
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
