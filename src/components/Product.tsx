import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductType } from "../types/ProductType";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type ProductProps = {
    product: ProductType;
    handleAddToCart: (id: ProductType) => void;
};

const Product = ({ handleAddToCart, product }: ProductProps) => {
    const productLink = `/products/${product.id}`;
    return (
        <div className="product">
            <div className="product-container">
                <img src={product.image} className="product-img img" alt="high-back bench" />
                <div className="product-icons">
                    <a href={productLink} className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <button onClick={() => handleAddToCart(product)} className="product-cart-btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
            <footer>
                <p className="product-name">{product.name}</p>
                <h4 className="product-price">{product.price} ₽</h4>
            </footer>
        </div>
    );
};

export default Product;
