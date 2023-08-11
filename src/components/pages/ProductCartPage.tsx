import { faMinus, faPlus, faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount, removeFromCartAction } from "../../store/products.actions";
import { useAppSelector } from "../../store/useAppSelector";
import { ShoppingCartItem } from "../../types/ShoppingCartItem";

const ProductCartPage = () => {
    const dispatch = useDispatch();
    const cookie = "/cookie.json";
    const shoppingCart = loadCartState() || useAppSelector((state) => state.products.shoppingCart);
    const total: number = sumUp();

    function handleRemove(item: ShoppingCartItem): void {
        dispatch(removeFromCartAction(item));
    }
    function handleIcreaseAmount(item: ShoppingCartItem): void {
        dispatch(increaseAmount(item));
    }
    function handleDecreaseAmount(item: ShoppingCartItem): void {
        dispatch(decreaseAmount(item));
    }

    function loadCartState(): ShoppingCartItem[] | null {
        let cartValue;
        fetchData().catch(Error);
        return cartValue || null;
        async function fetchData() {
            await fetch(cookie)
                .then((res) => res.json())
                .then((response) => {
                    cartValue = response;
                });
        }
    }

    function sumUp(): number {
        let sum: number = 0;
        const prices: number[] = shoppingCart.length ? shoppingCart.map((item) => item.product.price) : [];
        prices.forEach((price) => (sum += price));
        return sum;
    }

    return (
        <div className="product-cart section-center">
            {shoppingCart.length ? (
                <div className="product-cart-header">
                    <p className="product-cart-header-itemName">Product</p>
                    <p className="product-cart-header-price">Price</p>
                    <p className="product-cart-header-amount">Amount</p>
                    <p className="product-cart-header-subtotal">Subtotal</p>
                </div>
            ) : (
                ""
            )}
            {shoppingCart.map((item) => (
                <div className="product-cart-item" key={item.product.id}>
                    <div className="cart-item-content">
                        <img className="cart-item-img" src={item.product.image} alt={item.product.name} />
                        <p className="cart-item-name">{item.product.name}</p>
                        <p className="cart-item-price">{item.product.price} ₽</p>
                        <div className="cart-item-buttons">
                            <div className="cart-item-amount-content">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="cart-item-amount-minus"
                                    onClick={() => handleDecreaseAmount(item)}
                                />
                                <span className="cart-item-amount">{item.amount}</span>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="cart-item-amount-plus"
                                    onClick={() => handleIcreaseAmount(item)}
                                />
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
            <div className="total-container">
                <div className="total-content">
                    <p className="total">Cart total: {total} ₽</p>
                    <button className="cart-buy-btn">
                        Buy <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCartPage;
