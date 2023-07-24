import { useEffect, useState } from "react";
import Product from "../Product";
// import { ProductType } from "src/types/ProductType.ts";

type Props = {
    // product: ProductType;
};

// https://fakestoreapi.com/products/
const ProductsPage = (props: Props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch("https://course-api.com/react-store-products")
                .then((res) => res.json())
                .then((response) => {
                    setProducts(response);
                })
                .catch(Error);
        }
        fetchData().catch(Error);
    }, []);

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsPage;
