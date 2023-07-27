import { useEffect, useState } from "react";
import Filter from "../Filter";
import Product from "../Product";

type Props = {
};

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch("https://course-api.com/react-store-products")
                .then((res) => res.json())
                .then((response) => {
                    setProducts(response);
                    setFilteredProducts(response);
                })
                .catch(Error);
        }
        fetchData().catch(Error);
    }, []);

    function handleFilterClick(event: HTMLInputElement) {
        const value = event.target.textContent;
        if (value === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter((product) => product.company.toLowerCase().includes(value.toLowerCase()))
            );
        }
    }

    function handlePriceFilter(event: HTMLInputElement) {
        if (!event.target.value) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.price <= event.target.value));
        }
    }

    return (
        <div className="products-page">
            <Filter handleFilterClick={handleFilterClick} handlePriceFilter={handlePriceFilter} />
            <div className="products-container">
                {filteredProducts.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
