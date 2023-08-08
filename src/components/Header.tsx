import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/useAppSelector";


const Header = () => {
    const shoppingCart = useAppSelector((state) => state.products.shoppingCart);
    const navigate = useNavigate();
    const links = {
        productsPageLink: "/products",
        homePageLink:"/home",
        aboutPageLink: "/about",
        cartPageLink: "/cart",
    }
    

    const goTo = (link: string) => {
        navigate(link);
    };

    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to={links.homePageLink} className="nav-link">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={links.productsPageLink} className="nav-link">
                            products
                        </Link>
                    </li>
                    <li>
                        <Link to={links.aboutPageLink} className="nav-link">
                            about
                        </Link>
                    </li>
                </ul>
                <img
                    onClick={() => goTo(links.productsPageLink)}
                    src="/logo-black.svg"
                    alt=""
                    className="nav-logo"
                />
                <div className="shopping-cart">
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="shopping-cart-icon"
                        onClick={() => goTo(links.cartPageLink)}
                    />
                    <b className={shoppingCart.length ? "shopping-cart-indicator" : ''}>{shoppingCart.length || null}</b>
                </div>
            </nav>
        </div>
    );
};

export default Header;
