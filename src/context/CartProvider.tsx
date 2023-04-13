import { createContext, useContext, useEffect, useMemo, useState } from "react";

//TYPES
import { ICartContextParams, Product } from "./types/cart";

const CartContext = createContext({} as ICartContextParams);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInTheCart, setProductsInTheCart] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cappucino-cart");

    if (stored) {
      setProductsInTheCart(JSON.parse(stored));
    }
  }, []);

  const totalProducts = useMemo(
    () => productsInTheCart.length,
    [productsInTheCart]
  );

  function addProductToCart(productId: Product["id"]) {
    const productExistsInCart = productsInTheCart.find(
      (p) => p.id === productId
    );

    if (productExistsInCart) {
      setProductsInTheCart((oldValue) => {
        const updatedProducts = oldValue.map((prod) => {
          if (prod.id === productId) {
            return {
              ...prod,
              amount: prod.amount + 1,
            };
          }

          return prod;
        });

        localStorage.setItem("cappucino-cart", JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    } else {
      setProductsInTheCart((oldValue) => {
        const updatedProducts = [
          ...oldValue,
          {
            id: productId,
            amount: 1,
          },
        ];
        localStorage.setItem("cappucino-cart", JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    }
  }

  return (
    <CartContext.Provider
      value={{ productsInTheCart, totalProducts, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}

export { useCart };
