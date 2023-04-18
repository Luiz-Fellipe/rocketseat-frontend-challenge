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
import Head from "next/head";

export default function Cart() {
  const {
    productsInTheCart,
    totalProducts,
    subTotalPrice,
    removeProductToCart,
    updateProductAmount,
    productsCheckout,
  } = useCart();

  return (
    <CartWrapper>
      <Head>
        <title>Capputeeno - Carrinho ({productsInTheCart.length})</title>
      </Head>
      <ButtonBackToHome />

      <CartContainer>
        <CartContent>
          <CartContentHeader>
            <h1>Seu Carrinho</h1>
            <span data-testid="cart-total-products">
              Total ({totalProducts} produtos){" "}
              <strong>{formatMoney(subTotalPrice)}</strong>
            </span>
          </CartContentHeader>

          <CartItemsList>
            {productsInTheCart.map((product) => (
              <CartItem data-testid="cart-item" key={product.id}>
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
                      data-testid="button-remove-product"
                      onClick={() => removeProductToCart(product.id)}
                      aria-label="deletar o item do carrinho"
                    >
                      <Image src={IconDelete} alt="imagem de uma lixeira" />
                    </button>
                  </ItemInfoHeader>

                  <p>{product.description}</p>
                  <ItemInfoFooter>
                    <Select
                      data-testid="select-product-quantity"
                      defaultValue={product.amount.toString()}
                      onValueChange={(value) =>
                        updateProductAmount(product.id, Number(value))
                      }
                    />

                    <strong data-testid="cart-item-price">
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
              <strong data-testid="cart-total-price">
                {formatMoney(subTotalPrice)}
              </strong>
            </OrderPrice>

            <button
              onClick={productsCheckout}
              disabled={productsInTheCart.length === 0}
            >
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
