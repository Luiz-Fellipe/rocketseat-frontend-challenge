import { Root } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

//assets
import IconArrowSvg from "../../assets/iconArrowDown.svg";

//Styles
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./styles";

interface IDropdownOrderByType {
  label: string;
  value: IOrderTypes;
}

enum IOrderTypes {
  "new-products" = "Novidades",
  "price-max-min" = "Preço Maior - menor",
  "price-min-max" = "Preço Menor - maior",
  "best-sellers" = "Mais vendidos",
}

export function OrderByDropdown() {
  const router = useRouter();

  const [value, setValue] = useState<keyof typeof IOrderTypes | null>(() => {
    if (router?.query?.orderBy) {
      return router?.query?.orderBy as keyof typeof IOrderTypes;
    }
    return null;
  });

  function handleSetOrderBy(option: keyof typeof IOrderTypes) {
    console.log("option", option, IOrderTypes[option]);
    router.push(
      {
        pathname: `/`,
        query: { ...router.query, orderBy: option, page: 1 },
      },
      undefined
    );
    setValue(option);
  }

  return (
    <Root>
      <DropdownMenuTrigger>
        Organizar por {value ? IOrderTypes[value] : null}
        <Image src={IconArrowSvg} alt="icone de seta" />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align="end">
        {Object.entries(IOrderTypes)?.map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            onSelect={() => handleSetOrderBy(key as keyof typeof IOrderTypes)}
          >
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Root>
  );
}
