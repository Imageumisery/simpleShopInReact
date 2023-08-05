type Props = {
    filters: FiltersType;
    handlePriceFilter: ({ target }: { target: HTMLInputElement }) => void;
    handleSearch: ({ target }: { target: HTMLInputElement }) => void;
    clearFilters:VoidFunction;
    handleFilterClick:(event:any) => void;
};

const companyNames = ["All", "Ikea", "Marcos", "Caressa", "Liddy"];
const clicked = "clicked";

const Filter = ({ filters, handlePriceFilter, handleSearch, clearFilters, handleFilterClick}: Props) => {

    return (
        <div className="filter">
            <input type="text" placeholder="Search" className="search" onChange={handleSearch} value={filters?.searchValue}/>
            <p>Company</p>
            <ol className="filter-params">
                {companyNames.map((name) => (
                    <li
                        key={name}
                        onClick={handleFilterClick}
                        className={name === filters.currentCompanyFilter ? clicked : ""}
                    >
                        {name}
                    </li>
                ))}
            </ol>
            <div className="filter-price-container">
                <p>Price</p>
                <input type="number" className="filter-price" onChange={handlePriceFilter} value={filters.priceValue || ''}/>
            </div>
            <button className="clear-filter-btn" onClick={clearFilters}>
                Clear Filter
            </button>
        </div>
    );
};

export default Filter;
// className={name === filters.currentCompanyFilter ? clicked : ""}