import Image from "next/image";
import Link from "next/link";

//Assets
import IconBack from "../../assets/iconBack.svg";

//Styles
import { ButtonBack } from "./styles";

export function ButtonBackToHome() {
  return (
    <Link href="/">
      <ButtonBack>
        <Image src={IconBack} alt="voltar a página anterior"></Image>
        Voltar
      </ButtonBack>
    </Link>
  );
}
