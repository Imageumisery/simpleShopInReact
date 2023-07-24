import { useEffect, useState } from "react";
import Product from "../Product";

type Props = {};

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
                <Product product={product} />
            ))}
        </div>
    );
};

export default ProductsPage;
