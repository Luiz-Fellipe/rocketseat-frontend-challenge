import Image from "next/image";
import { useRouter } from "next/router";

//Assets
import IconArrowLeft from "../../assets/iconArrowLeft.svg";
import IconArrowRight from "../../assets/iconArrowRight.svg";

//Styles
import { ButtonPage, PagesWrapper } from "./styles";

interface IPaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: IPaginationProps) {
  const router = useRouter();

  const pages = Array.from({ length: totalPages }, (v, k) => k + 1);

  const currentPage = Number(router.query.page) || 1;

  function handleChangePage(page: number) {
    router.push(
      {
        pathname: "/",
        query: page ? { ...router.query, page } : {},
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <PagesWrapper>
      {pages.map((page) => (
        <ButtonPage
          isActive={page === currentPage}
          key={page}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </ButtonPage>
      ))}

      <div>
        <ButtonPage
          disabled={currentPage === 1}
          onClick={() => handleChangePage(currentPage - 1)}
        >
          <Image src={IconArrowLeft} alt="Página anterior" />
        </ButtonPage>
        <ButtonPage
          disabled={currentPage === pages.length}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <Image src={IconArrowRight} alt="Próxima Página" />
        </ButtonPage>
      </div>
    </PagesWrapper>
  );
}
