import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductType } from "../types/ProductType";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type ProductProps = {
    product: ProductType;
};

const Product = (props: ProductProps) => {
    const productLink = `/products/${props.product.id}`
    return (
        <div className="product">
            <div className="product-container">
                <img src={props.product.image} className="product-img img" alt="high-back bench"/>
                <div className="product-icons">
                    <a href={productLink} className="search-btn">
                        <FontAwesomeIcon icon={faSearch}/>
                    </a>
                    <button className="product-cart-btn" data-id="">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </button>
                </div>
            </div>
            <footer>
                <p className="product-name">{props.product.name}</p>
                <h4 className="product-price">{props.product.price} ₽</h4>
            </footer>
        </div>
    );
};

export default Product;
