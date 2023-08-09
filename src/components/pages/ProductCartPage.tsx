import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/useAppSelector";
import { decreaseAmount, increaseAmount, removeFromCartAction } from "../../store/products.actions";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartItem } from "../../types/ShoppingCartItem";

const ProductCartPage = () => {
    const shoppingCart = useAppSelector((state) => state.products.shoppingCart);
    const dispatch = useDispatch();

    function handleRemove(item: ShoppingCartItem): void {
        dispatch(removeFromCartAction(item));
    }
    function handleIcreaseAmount(item: ShoppingCartItem): void {
        dispatch(increaseAmount(item));
    }
    function handleDecreaseAmount(item: ShoppingCartItem): void {
        dispatch(decreaseAmount(item));
    }

    return (
        <div className="product-cart section-center">
            <div className="product-cart-header">
                <p className="product-cart-header-itemName">Product</p>
                <p className="product-cart-header-price">Price</p>
                <p className="product-cart-header-amount">Amount</p>
                <p className="product-cart-header-subtotal">Subtotal</p>
            </div>
            {shoppingCart.map((item) => (
                <div className="product-cart-item" key={item.product.id}>
                    <div className="cart-item-content">
                        <img className="cart-item-img" src={item.product.image} alt={item.product.name} />
                        <p className="cart-item-name">{item.product.name}</p>
                        <p className="cart-item-price">{item.product.price} ₽</p>
                        <div className="cart-item-buttons">
                            <div className="cart-item-amount-content">
                                <FontAwesomeIcon icon={faMinus} className="cart-item-amount-minus" onClick={() => handleDecreaseAmount(item)}/>
                                <span className="cart-item-amount">{item.amount}</span>
                                <FontAwesomeIcon icon={faPlus} className="cart-item-amount-plus"  onClick={() => handleIcreaseAmount(item)}/>
                            </div>
                            <p className="cart-item-price">{item.product.price * item.amount} ₽</p>
                            <FontAwesomeIcon
                                className="cart-item-remove-btn"
                                onClick={() => handleRemove(item)}
                                icon={faTrashCan}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCartPage;
