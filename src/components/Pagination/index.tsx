import Image from "next/image";

//Assets
import IconArrowLeft from "../../assets/iconArrowLeft.svg";
import IconArrowRight from "../../assets/iconArrowRight.svg";

//Styles
import { ButtonPage, PagesWrapper } from "./styles";

interface IPaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: IPaginationProps) {
  const pages = Array.from({ length: totalPages }, (v, k) => k + 1);
  return (
    <PagesWrapper>
      {pages.map((page) => (
        <ButtonPage isActive={page === 1} key={page}>
          {page}
        </ButtonPage>
      ))}

      <div>
        <ButtonPage>
          <Image src={IconArrowLeft} alt="Página anterior" />
        </ButtonPage>
        <ButtonPage>
          <Image src={IconArrowRight} alt="Próxima Página" />
        </ButtonPage>
      </div>
    </PagesWrapper>
  );
}
