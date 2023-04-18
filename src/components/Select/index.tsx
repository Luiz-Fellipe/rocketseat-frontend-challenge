import {
  Root,
  Portal,
  Value,
  Group,
  SelectProps,
} from "@radix-ui/react-select";
import Image from "next/image";

//Assets
import IconArrowSelect from "../../assets/iconArrowSelect.svg";

//Styles
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectScrollUpButton,
  SelectTrigger,
  SelectViewport,
  SelectIcon,
  SelectItemText,
  SelectScrollDownButton,
} from "./styles";

export function Select({
  defaultValue,
  onValueChange,
}: Pick<SelectProps, "defaultValue" | "onValueChange">) {
  return (
    <Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger
        data-testid="select-radix"
        aria-label="selecione uma opção"
      >
        <Value />
        <SelectIcon>
          <Image
            src={IconArrowSelect}
            alt="selecione uma opção"
            layout="fill"
          />
        </SelectIcon>
      </SelectTrigger>

      <Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <Image src={IconArrowSelect} alt="selecione uma opção" />
          </SelectScrollUpButton>

          <SelectViewport>
            {Array.from({ length: 120 }, (v, k) => k).map((item) => (
              <SelectItem
                data-testid={`select-option-${item + 1}`}
                key={item}
                value={(item + 1).toString()}
              >
                <SelectItemText>{item + 1} </SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>

          <SelectScrollDownButton>
            <Image src={IconArrowSelect} alt="selecione uma opção" />
          </SelectScrollDownButton>
        </SelectContent>
      </Portal>
    </Root>
  );
}
