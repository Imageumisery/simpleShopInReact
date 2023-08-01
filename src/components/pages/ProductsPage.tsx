import { MouseEvent, createContext, useEffect, useState } from "react";
import Filter from "../Filter";
import { ProductType } from "../../types/ProductType";
import Product from "../Product";
import { useOutletContext } from "react-router-dom";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [priceFilter, setPriceFilter] = useState<null | number>(null);
    const [companyFilter, setCompanyFilter] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    const [contextProducts, setContextProducts] = useOutletContext();
    
    useEffect(() => {
        fetchData().catch(Error);
    }, [products, setContextProducts]);

    async function fetchData() {
        await fetch("https://course-api.com/react-store-products")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response);
                setContextProducts(products);
            });
    }

    function handleFilterClick(event: MouseEvent<HTMLDivElement>) {
        const value = (event.target as HTMLLIElement).textContent!;
        setCompanyFilter(value === "All" ? "" : value);
    }

    function handlePriceFilter({ target }: { target: HTMLInputElement }) {
        setPriceFilter(+target.value || null);
    }

    function handleSearch({ target }: { target: HTMLInputElement }) {
        setSearchValue(target.value);
    }

    function applyPriceFilter(products: ProductType[]): ProductType[] {
        if (!priceFilter) return products;
        return products.filter(({ price }) => price <= priceFilter);
    }

    function applyCompanyFilter(products: ProductType[]): ProductType[] {
        if (!companyFilter) return products;
        return products.filter(({ company }) => company.toLowerCase().includes(companyFilter.toLowerCase()));
    }

    function applySearchFilter(products: ProductType[]): ProductType[] {
        if (!searchValue) return products;
        return products.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    return (
        <div className="products-page">
            <Filter
                currentCompanyFilter={companyFilter}
                handleFilterClick={handleFilterClick}
                handlePriceFilter={handlePriceFilter}
                handleSearch={handleSearch}
            />
            <div className="products-container">
                {applySearchFilter(applyCompanyFilter(applyPriceFilter(products))).map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
