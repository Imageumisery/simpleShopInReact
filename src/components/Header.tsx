type Props = {};

const Header = (props: Props) => {
    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="nav-link">
                            products
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            about
                        </a>
                    </li>
                </ul>
                <img src="/logo-black.svg" alt="" className="nav-logo" />
                <div className="shopping-cart">
                    shopping cart
                </div>
            </nav>
            <h1>My wonderful shop</h1>
        </div>
    );
};

export default Header;
