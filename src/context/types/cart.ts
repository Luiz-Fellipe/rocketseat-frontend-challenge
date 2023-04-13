import { IProduct } from "../../@types/products";

export type Product = {
  id: IProduct["id"];
  amount: number;
};

export interface ICartContextParams {
  productsInTheCart: Product[];
  totalProducts: number;
  addProductToCart: (productId: Product["id"]) => void;
}
