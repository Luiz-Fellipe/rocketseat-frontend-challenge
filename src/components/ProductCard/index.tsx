//styles
import Image from "next/image";
import { ProductCardWrapper } from "./styles";

export function ProductCard() {
  return (
    <ProductCardWrapper role="button">
      <Image
        src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg"
        width={640}
        height={580}
        objectFit="cover"
        style={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        alt="imagem do produto"
      />
      <span>Caneca de cerâmica rústica</span>

      <strong>R$ 70,00</strong>
    </ProductCardWrapper>
  );
}
