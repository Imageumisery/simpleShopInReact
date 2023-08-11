import { ShoppingCartItem } from "../types/ShoppingCartItem";
import { ProductActionTypes } from "./action-types";

export type ProductActions = {
    type: ProductActionTypes;
    payload: ShoppingCartItem;
};

export const addToCartAction = (payload: ShoppingCartItem): ProductActions => {
    return {
        type: ProductActionTypes.Add,
        payload,
    };
};

export const removeFromCartAction = (payload: ShoppingCartItem): ProductActions => {
    return {
        type: ProductActionTypes.Remove,
        payload,
    };
};

export const increaseAmount = (payload: ShoppingCartItem): ProductActions => {
    return {
        type: ProductActionTypes.Increase,
        payload,
    };
};

export const decreaseAmount = (payload: ShoppingCartItem): ProductActions => {
    return {
        type: ProductActionTypes.Decrease,
        payload,
    };
};
