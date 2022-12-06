import Image from "next/image";

//Types
import { IProduct } from "../../@types/products";

//Utils
import { formatMoney } from "../../utils/formatMoney";

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

      <strong>{formatMoney(product.price_in_cents / 100)}</strong>
    </ProductCardWrapper>
  );
}
