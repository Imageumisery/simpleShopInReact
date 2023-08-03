import { createContext,Dispatch,SetStateAction } from "react";
import { ProductType } from "../../types/ProductType";

export const ProductsContext = createContext<ProductsContext>({
    shoppingCart: [],
    setShoppingCart: () => {},
});

interface ProductsContext {
    shoppingCart: ProductType[];
    setShoppingCart: Dispatch<SetStateAction<ProductType[]>>;
}
