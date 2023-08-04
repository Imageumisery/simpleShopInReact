import { MouseEvent, createContext, useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import { ProductType } from "../../types/ProductType";
import Product from "../Product";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<FiltersType>();
    // const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    // const [priceFilter, setPriceFilter] = useState<null | number>(null);
    // const [companyFilter, setCompanyFilter] = useState<string>("");
    // const [searchValue, setSearchValue] = useState<string>("");

    const { setShoppingCart } = useContext(ProductsContext);

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
        // setCompanyFilter(value === "All" ? "" : value);
        const value = (event.target as HTMLLIElement).textContent!;
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.currentCompanyFilter = value;
        setFilters(newFilter);
    }

    function handlePriceFilter({ target }: { target: HTMLInputElement }) {
        // setPriceFilter(+target.value || null);
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.priceValue = +target?.value;
        setFilters(newFilter);
    }

    function handleSearch({ target }: { target: HTMLInputElement }) {
        // setSearchValue(target.value);
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.searchValue = target.value;
        setFilters(newFilter);
    }

    function handleAddToCart(product: ProductType): void {
        setShoppingCart((prev) => {
            const newProducts = [...prev];
            newProducts.push(product);
            return newProducts;
        });
    }

    function clearFilters() {
        let newFilter:FiltersType = Object.assign({}, filters);
        newFilter.priceValue = 0;
        newFilter.currentCompanyFilter = '';
        newFilter.searchValue = '';
        setFilters(newFilter);
    }

    function filterProducts(products: ProductType[]) {
        let filteredProducts = [];
        if (!filters?.priceValue) {
            return products;
        } else {
            filteredProducts = products.filter(({ price }) => price <= priceFilter);
        }
        if (!filters?.currentCompanyFilter) {
            return products;
        } else {
            filteredProducts = products.filter(({ company }) =>
                company.toLowerCase().includes(companyFilter.toLowerCase())
            );
        }
        if (!filters?.searchValue) {
            return products;
        } else {
            filteredProducts = products.filter(({ name }) =>
                name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        return filteredProducts || products;
    }

    function changeFilters() {
        
    }
    return (
        <div className="products-page">
            <Filter filters={filters!} setFilters={changeFilters}/>
            <div className="products-container">
                {filterProducts(products).map((product) => (
                    <Product handleAddToCart={handleAddToCart} product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
