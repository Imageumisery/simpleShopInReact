import { MouseEvent, createContext, useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import { ProductType } from "../../types/ProductType";
import Product from "../Product";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    // const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [priceFilter, setPriceFilter] = useState<null | number>(null);
    const [companyFilter, setCompanyFilter] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");
    
    const { setShoppingCart } = useContext(ProductsContext)
    
    useEffect(() => {
        fetchData().catch(Error);
    }, [products]);

    async function fetchData() {
        await fetch("/mock.json")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response);
            });
    }

    function handleFilterClick(event: MouseEvent<HTMLDivElement>) {
        const value = (event.target as HTMLLIElement).textContent!;
        setCompanyFilter(value === "All" ? "" : value);
    }

    function handlePriceFilter({ target }: { target: HTMLInputElement }) {
        setPriceFilter(+target.value || null);
        return target.value;
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

    function handleAddToCart(product: ProductType): void {
        setShoppingCart((prev) => { 
            const newProducts =  [...prev]
            newProducts.push(product)
            return newProducts;
         })
    }

    function clearFilters() {
        setCompanyFilter('');
        setPriceFilter(null);
        setSearchValue('');
    }

    function getFilters():FiltersType {
        const filter:FiltersType = {
            handleFilterClick: handleFilterClick,
            handlePriceFilter:handlePriceFilter,
            priceValue:priceFilter!,
            searchValue:searchValue,
            handleSearch:handleSearch,
            currentCompanyFilter:companyFilter,
            clearFilter:clearFilters,
        }
        return filter;
    }

    return (
        <div className="products-page">
            <Filter
            filters={}
            />
            <div className="products-container">
                {applySearchFilter(applyCompanyFilter(applyPriceFilter(products))).map((product) => (
                    <Product handleAddToCart={handleAddToCart} product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
