import Image from "next/image";

//Components
import { ButtonBackToHome } from "../../components/ButtonBackToHome";
import { Select } from "../../components/Select";

//Assets
import IconDelete from "../../assets/iconDelete.svg";

//Hooks
import { useCart } from "../../context/CartProvider";

//Utils
import { formatMoney } from "../../utils/formatMoney";

//Styles
import {
  CartContainer,
  CartContent,
  CartContentHeader,
  CartItem,
  CartItemsList,
  CartWrapper,
  ItemInfo,
  ItemInfoFooter,
  ItemInfoHeader,
  OrderPrice,
  OrderResume,
  OrderSumaryLinks,
  OrderSummary,
} from "../../styles/pages/cart";

export default function Cart() {
  const {
    productsInTheCart,
    totalProducts,
    subTotalPrice,
    removeProductToCart,
    updateProductAmount,
  } = useCart();

  return (
    <CartWrapper>
      <ButtonBackToHome />

      <CartContainer>
        <CartContent>
          <CartContentHeader>
            <h1>Seu Carrinho</h1>
            <span>
              Total ({totalProducts} produtos){" "}
              <strong>{formatMoney(subTotalPrice)}</strong>
            </span>
          </CartContentHeader>

          <CartItemsList>
            {productsInTheCart.map((product) => (
              <CartItem key={product.id}>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  className="img-next-radius-8"
                  width={640}
                  height={580}
                />
                <ItemInfo>
                  <ItemInfoHeader>
                    <h2>{product.name}</h2>
                    <button
                      onClick={() => removeProductToCart(product.id)}
                      aria-label="deletar o item do carrinho"
                    >
                      <Image src={IconDelete} alt="imagem de uma lixeira" />
                    </button>
                  </ItemInfoHeader>

                  <p>{product.description}</p>
                  <ItemInfoFooter>
                    <Select
                      defaultValue={product.amount.toString()}
                      onValueChange={(value) =>
                        updateProductAmount(product.id, Number(value))
                      }
                    />

                    <strong>
                      {formatMoney(
                        (product.price_in_cents / 100) * product.amount
                      )}
                    </strong>
                  </ItemInfoFooter>
                </ItemInfo>
              </CartItem>
            ))}
          </CartItemsList>
        </CartContent>
        <OrderSummary>
          <OrderResume>
            <h2>Resumo do Pedido</h2>
            <OrderPrice>
              <span>Subtotal de produtos</span>
              <span>{formatMoney(subTotalPrice)}</span>
            </OrderPrice>
            <OrderPrice>
              <span>Entrega</span>
              <span>R$ 0,00</span>
            </OrderPrice>
            <hr />

            <OrderPrice>
              <strong>Total</strong>
              <strong>{formatMoney(subTotalPrice)}</strong>
            </OrderPrice>

            <button disabled={productsInTheCart.length === 0}>
              Finalizar Compra
            </button>
          </OrderResume>

          <OrderSumaryLinks>
            <button>Ajuda</button>
            <button>reembolsos</button>
            <button>entregas e frete</button>
            <button>trocas e devoluções</button>
          </OrderSumaryLinks>
        </OrderSummary>
      </CartContainer>
    </CartWrapper>
  );
}
