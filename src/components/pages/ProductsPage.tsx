import { MouseEvent, createContext, useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import { ProductType } from "../../types/ProductType";
import Product from "../Product";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<FiltersType>({
        clearFilter: clearFilters,
        searchValue: "",
        priceValue: 0,
        currentCompanyFilter: "All",
    });
    const { setShoppingCart } = useContext(ProductsContext);

    useEffect(() => {
        if (products.length === 0) {
            fetchData().catch(Error);
        }
    }, [products]);

    async function fetchData() {
        await fetch("/mock.json")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response);
                console.log(response);
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
        console.log(target.value);

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
        let newFilter: FiltersType = Object.assign({}, filters);
        newFilter.priceValue = 0;
        newFilter.currentCompanyFilter = "";
        newFilter.searchValue = "";
        setFilters(newFilter);
    }

    function filter(products: ProductType[]) {
        const companyFilter = filters.currentCompanyFilter.toLowerCase();
        const All = 'all';
        let filteredProducts: ProductType[] = products;
        if (filters.priceValue)
            filteredProducts = filteredProducts.filter(({ price }) => price <= filters.priceValue);
        if (companyFilter && companyFilter !== All) {
            filteredProducts = filteredProducts.filter(({ company }) =>
            company.toLowerCase().includes(companyFilter)
            );
        }
        if (filters.searchValue)
            filteredProducts = filteredProducts.filter(({ name }) =>
                name.toLowerCase().includes(filters.searchValue.toLowerCase())
            );
        console.log(filteredProducts);

        return filteredProducts;
    }

    return (
        <div className="products-page">
            <Filter
                filters={filters!}
                handlePriceFilter={handlePriceFilter}
                handleSearch={handleSearch}
                clearFilters={clearFilters}
                handleFilterClick={handleFilterClick}
            />
            <div className="products-container">
                {filter(products).map((product) => (
                    <Product handleAddToCart={handleAddToCart} product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
