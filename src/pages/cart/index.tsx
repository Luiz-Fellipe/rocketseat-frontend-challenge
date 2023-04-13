import Image from "next/image";

//Components
import { ButtonBackToHome } from "../../components/ButtonBackToHome";
import { Select } from "../../components/Select";

//Assets
import IconDelete from "../../assets/iconDelete.svg";

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
  return (
    <CartWrapper>
      <ButtonBackToHome />

      <CartContainer>
        <CartContent>
          <CartContentHeader>
            <h1>Seu Carrinho</h1>
            <span>
              Total (3 produtos) <strong>R$161,00</strong>
            </span>
          </CartContentHeader>

          <CartItemsList>
            {Array.from({ length: 10 }, (v, k) => k).map((item) => (
              <CartItem key={item}>
                <Image
                  src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg"
                  alt="camiseta nova"
                  className="img-next-radius-8"
                  width={640}
                  height={580}
                />
                <ItemInfo>
                  <ItemInfoHeader>
                    <h2>Caneca de cerâmica rústica</h2>
                    <button aria-label="deltar o item do carrinho">
                      <Image src={IconDelete} alt="imagem de uma lixeira" />
                    </button>
                  </ItemInfoHeader>

                  <p>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo para que simule algum texto que
                    venha a ser inserido nesse campo, descrevendo tal produto.
                  </p>
                  <ItemInfoFooter>
                    <Select />

                    <strong>R$ 40,00</strong>
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
              <span>R$ 161,00</span>
            </OrderPrice>
            <OrderPrice>
              <span>Entrega</span>
              <span>R$ 40,00</span>
            </OrderPrice>
            <hr />

            <OrderPrice>
              <strong>Total</strong>
              <strong>R$ 201,00</strong>
            </OrderPrice>

            <button>Finalizar Compra</button>
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
