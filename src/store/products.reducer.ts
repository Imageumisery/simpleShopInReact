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
            
            const newCart2 = state.shoppingCart.filter(({ product }) => product.id !== action.payload.product.id);
            return { ...state, shoppingCart: newCart2 };



        case ProductActionTypes.Increase:
            const increasedAmountCartIndex = state.shoppingCart.findIndex((cart) => cart.product.id === action.payload.product.id);
            const cartItem = state.shoppingCart[increasedAmountCartIndex];
            const modifiedCartItem:ShoppingCartItem = {
                ...cartItem,
                amount: ++cartItem.amount,
            };
            state.shoppingCart[increasedAmountCartIndex] = modifiedCartItem;
            return {...state, shoppingCart: [...state.shoppingCart]};
        case ProductActionTypes.Decrease:
            const decreasedAmountCartIndex = state.shoppingCart.findIndex((cart) => cart.product.id === action.payload.product.id);
            const cartItem1 = state.shoppingCart[decreasedAmountCartIndex];
            const modifiedCartItem1:ShoppingCartItem = {
                ...cartItem1,
                amount: --cartItem1.amount,
            };
            state.shoppingCart[decreasedAmountCartIndex] = modifiedCartItem1;
            return {...state, shoppingCart: [...state.shoppingCart]};
        default:
            return state;
    }
};