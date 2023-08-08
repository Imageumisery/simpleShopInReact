import { ShoppingCartItem } from "../types/ShoppingCartItem";
import { ProductActionTypes } from "./action-types";
import { ProductActions } from "./products.actions";

interface ProductState {
    shoppingCart: ShoppingCartItem[];
}

const initialState: ProductState = {
    shoppingCart: [],
};

export const productsReducer = (state = initialState, action: ProductActions): ProductState => {
    switch (action.type) {
        case ProductActionTypes.Add:
            const productIndex = state.shoppingCart.findIndex(
                (item) => item.product.id === action.payload.product.id
            );
            if (productIndex < 0) {
                const newCart = [...state.shoppingCart, action.payload];
                return { ...state, shoppingCart: newCart };
            }
            const originalProduct = state.shoppingCart[productIndex];
            const modifiedProduct: ShoppingCartItem = {
                ...originalProduct,
                amount: ++originalProduct.amount,
            };
            state.shoppingCart[productIndex] = modifiedProduct;
            return { ...state, shoppingCart: [...state.shoppingCart] };
        case ProductActionTypes.Remove:
            const newCart2 = state.shoppingCart.filter(({ product }) => product.id !== action.payload.id);
            return { ...state, shoppingCart: newCart2 };
        default:
            return state;
    }
};