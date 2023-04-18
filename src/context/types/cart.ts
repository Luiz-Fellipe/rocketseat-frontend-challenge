import { IProduct } from "../../@types/products";

export type Product = IProduct & {
  amount: number;
};

export interface ICartContextParams {
  productsInTheCart: Product[];
  totalProducts: number;
  subTotalPrice: number;
  addProductToCart: (product: IProduct) => void;
  updateProductAmount: (productId: IProduct["id"], amount: number) => void;
  removeProductToCart: (productId: IProduct["id"]) => void;
  productsCheckout: () => void;
}
