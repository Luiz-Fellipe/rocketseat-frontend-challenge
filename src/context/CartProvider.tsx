import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

//TYPES
import { ICartContextParams, Product } from "./types/cart";
import { IProduct } from "../@types/products";

const CartContext = createContext({} as ICartContextParams);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInTheCart, setProductsInTheCart] = useState<Product[]>([]);

  useLayoutEffect(() => {
    const stored = localStorage.getItem("cappucino-cart");

    if (stored) {
      setProductsInTheCart(JSON.parse(stored));
    }
  }, []);

  const totalProducts = useMemo(
    () =>
      productsInTheCart.reduce((acc, product) => {
        return acc + product.amount;
      }, 0),
    [productsInTheCart]
  );

  const subTotalPrice = useMemo(() => {
    return productsInTheCart.reduce((acc, item) => {
      return acc + (item.price_in_cents / 100) * item.amount;
    }, 0);
  }, [productsInTheCart]);

  function addProductToCart(product: IProduct) {
    const productExistsInCart = productsInTheCart.find(
      (p) => p.id === product.id
    );

    if (productExistsInCart) {
      setProductsInTheCart((oldValue) => {
        const updatedProducts = oldValue.map((prod) => {
          if (prod.id === product.id) {
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
            ...product,
            amount: 1,
          },
        ];
        localStorage.setItem("cappucino-cart", JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    }
  }

  function updateProductAmount(productId: IProduct["id"], amount: number) {
    setProductsInTheCart((oldValue) => {
      const updatedProducts = oldValue.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            amount,
          };
        }
        return p;
      });

      localStorage.setItem("cappucino-cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  }

  function removeProductToCart(productId: IProduct["id"]) {
    setProductsInTheCart((oldValue) => {
      const updatedProducts = oldValue.filter((p) => p.id !== productId);

      localStorage.setItem("cappucino-cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  }

  return (
    <CartContext.Provider
      value={{
        productsInTheCart,
        totalProducts,
        subTotalPrice,
        addProductToCart,
        removeProductToCart,
        updateProductAmount,
      }}
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
