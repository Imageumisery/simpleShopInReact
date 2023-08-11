import {
    faArrowDownZA,
    faArrowUpAZ,
    faList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/products.actions";
import { ProductType } from "../../types/ProductType";
import Filter from "../Filter";
import Product from "../Product";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<FiltersType>({
        clearFilter: clearFilters,
        searchValue: "",
        priceValue: 0,
        currentCompanyFilter: "All",
    });

    useEffect(() => {
        if (products.length === 0) {
            fetchData().catch(Error);
        }
    }, [products]);

    async function fetchData() {
        await fetch("https://course-api.com/react-store-products/")
            .then((res) => res.json())
            .then((response) => {
                setProducts(response);
            });
    }

    function handleFilterClick(event: MouseEvent<HTMLDivElement>) {
        const value = (event.target as HTMLLIElement).textContent!;
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.currentCompanyFilter = value;
        setFilters(newFilter);
    }

    function handlePriceFilter({ target }: { target: HTMLInputElement }) {
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.priceValue = +target?.value;
        setFilters(newFilter);
    }

    function handleSearch({ target }: { target: HTMLInputElement }) {
        const newFilter: FiltersType = Object.assign({}, filters);
        newFilter.searchValue = target.value;
        setFilters(newFilter);
    }

    function handleAddToCart(product: ProductType): void {
        dispatch(addToCartAction({ amount: 1, product }));
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
        const All = "all";
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
        return filteredProducts;
    }

    return (
        <div className="products-page">
            <Filter
                filters={filters}
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

<div className="sorting">
<div className="sort-btn-container">
    <FontAwesomeIcon icon={faList} />
    <FontAwesomeIcon icon={faList} />
    {/* <FontAwesomeIcon icon={faListAlt} /> */}
</div>
<hr />
<FontAwesomeIcon icon={faArrowUpAZ} />
<FontAwesomeIcon icon={faArrowDownZA} />
</div>

export default ProductsPage;
