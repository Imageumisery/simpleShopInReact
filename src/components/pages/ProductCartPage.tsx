import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/useAppSelector";
import { removeFromCartAction } from "../../store/products.actions";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCartPage = () => {
    const shoppingCart = useAppSelector((state) => state.products.shoppingCart);
    const dispatch = useDispatch();

    function handleRemove(id: string): void {
        dispatch(removeFromCartAction({ id }));
    }
    // function increaseAmount(id: string): void {
    //     dispatch(removeFromCartAction({ id }));
    // }
    // function decreaseAmount(id: string): void {
    //     dispatch(removeFromCartAction({ id }));
    // }

    return (
        <div className="product-cart section-center">
            <div className="product-cart-header">header</div>
            {shoppingCart.map((item) => (
                <div className="product-cart-item">
                    <div className="cart-item-content">
                        <img className="cart-item-img" src={item.product.image} alt={item.product.name} />
                        <p className="cart-item-name">{item.product.name}</p>
                        <p className="cart-item-price">{item.product.price} ₽</p>
                        <div className="cart-item-buttons">
                            <div className="cart-item-amount-content">
                                <FontAwesomeIcon icon={faMinus} className="cart-item-amount-minus" />
                                <span className="cart-item-amount">{item.amount}</span>
                                <FontAwesomeIcon icon={faPlus} className="cart-item-amount-plus" />
                            </div>
                            <p className="cart-item-price">{item.product.price * item.amount} ₽</p>
                            <FontAwesomeIcon
                                className="cart-item-remove-btn"
                                onClick={() => handleRemove(item.product.id)}
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
