import Image from "next/image";
import { useRouter } from "next/router";

//Types
import { IProduct } from "../../@types/products";

//Utils
import { formatMoney } from "../../utils/formatMoney";

//styles
import { ProductCardWrapper } from "./styles";

interface IProductCardProps extends React.ComponentPropsWithRef<"button"> {
  product: Pick<IProduct, "id" | "name" | "price_in_cents" | "image_url">;
}

export function ProductCard({ product, ...rest }: IProductCardProps) {
  const router = useRouter();

  function handleNavigateToProductDetail() {
    router.push(`/product/${product.id}`);
  }

  return (
    <ProductCardWrapper
      onClick={handleNavigateToProductDetail}
      role="button"
      data-testid="product-card"
      {...rest}
    >
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
      <span data-testid="product-card-name">{product.name}</span>

      <strong data-testid="product-card-price">
        {formatMoney(product.price_in_cents / 100)}
      </strong>
    </ProductCardWrapper>
  );
}
