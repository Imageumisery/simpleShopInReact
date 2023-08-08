import { ShoppingCartItem } from "../types/ShoppingCartItem";
import { ProductActionTypes } from "./action-types";

export interface AddToCartAction {
    type: ProductActionTypes.Add;
    payload: ShoppingCartItem;
}

export interface RemoveToCartAction {
    type: ProductActionTypes.Remove;
    payload: { id: string };
}

export type ProductActions = AddToCartAction | RemoveToCartAction;

export const addToCartAction = (payload: ShoppingCartItem): AddToCartAction => {
    return {
        type: ProductActionTypes.Add,
        payload,
    };
};

export const removeFromCartAction = (payload: { id: string }): RemoveToCartAction => {
    return {
        type: ProductActionTypes.Remove,
        payload,
    };
};
