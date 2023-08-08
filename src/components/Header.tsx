import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/useAppSelector";

type Props = {};

const Header = (props: Props) => {
    const shoppingCart = useAppSelector((state) => state.products.shoppingCart);
    const navigate = useNavigate();
    const productsPageLink = "/products";
    const homePageLink = "/home";
    const aboutPageLink = "/about";
    const cartPageLink = "/cart";

    const goTo = (link: string) => {
        navigate(link);
    };

    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to={homePageLink} className="nav-link">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={productsPageLink} className="nav-link">
                            products
                        </Link>
                    </li>
                    <li>
                        <Link to={aboutPageLink} className="nav-link">
                            about
                        </Link>
                    </li>
                </ul>
                <img
                    onClick={() => goTo(productsPageLink)}
                    src="/logo-black.svg"
                    alt=""
                    className="nav-logo"
                />
                <div className="shopping-cart">
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="shopping-cart-icon"
                        onClick={() => goTo(cartPageLink)}
                    />
                    <b className="shopping-cart-indicator">{shoppingCart.length || null}</b>
                </div>
            </nav>
        </div>
    );
};

export default Header;
