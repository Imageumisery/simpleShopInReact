import { ProductType } from "./ProductType";

export type ContextType = {
    products: ProductType[];
    setProducts: any;
    productId: number;
};
