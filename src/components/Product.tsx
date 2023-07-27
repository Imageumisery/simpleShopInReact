import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductType } from "../types/ProductType";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type ProductProps = {
    product: ProductType;
};

const Product = (props: ProductProps) => {
    return (
        <div className="product">
            <div className="product-container">
                <img src={props.product.image} className="product-img img" alt="high-back bench"/>
                <div className="product-icons">
                    <button className="search-btn" data-id="">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <button className="product-cart-btn" data-id="">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </button>
                </div>
            </div>
            <footer>
                <p className="product-name">{props.product.name}</p>
                <h4 className="product-price">{props.product.price}</h4>
            </footer>
        </div>
    );
};

export default Product;
//<a href={} className="product-icon">
//<i className="fas fa-search"></i>
//</a>

