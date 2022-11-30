import Image from "next/image";

//Types
import { IProduct } from "../../@types/products";

//styles
import { ProductCardWrapper } from "./styles";

interface IProductCardProps {
  product: Pick<IProduct, "id" | "name" | "price_in_cents" | "image_url">;
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <ProductCardWrapper role="button">
      <Image
        src={product.image_url}
        width={640}
        height={580}
        objectFit="cover"
        style={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        alt={product.name}
      />
      <span>{product.name}</span>

      <strong>R$ 70,00</strong>
    </ProductCardWrapper>
  );
}
