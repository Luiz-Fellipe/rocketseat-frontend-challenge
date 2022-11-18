import { Root } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

//assets
import IconArrowSvg from "../../assets/iconArrowDown.svg";

//Styles
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./styles";

export function OrderByDropdown() {
  return (
    <Root>
      <DropdownMenuTrigger>
        Organizar por
        <Image src={IconArrowSvg} alt="icone de seta" />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align="end">
        <DropdownMenuItem>Novidades</DropdownMenuItem>
        <DropdownMenuItem>Preço Maior - menor</DropdownMenuItem>
        <DropdownMenuItem>Preço Menor - maior</DropdownMenuItem>
        <DropdownMenuItem>Mais vendidos</DropdownMenuItem>
      </DropdownMenuContent>
    </Root>
  );
}
