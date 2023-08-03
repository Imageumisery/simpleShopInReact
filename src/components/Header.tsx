import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./contexts/ProductsContext";

type Props = {};

const Header = (props: Props) => {
    const { shoppingCart } = useContext(ProductsContext);
    const navigate = useNavigate();
    const routerChange = () => {
        const path = "/cart";
        navigate(path);
    };
    const returnHome = () => {
        const path = "/products";
        navigate(path);
    };
    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a onClick={returnHome} className="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="nav-link">
                            products
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link">
                            about
                        </a>
                    </li>
                </ul>
                <img onClick={returnHome} src="/logo-black.svg" alt="" className="nav-logo" />
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="shopping-cart-icon"
                    onClick={routerChange}
                />
                <b>{shoppingCart.length || null}</b>
            </nav>
        </div>
    );
};

export default Header;
