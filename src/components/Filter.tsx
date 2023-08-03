type Props = {
    filters: FiltersType;
};

const companyNames = ["All", "Ikea", "Marcos", "Caressa", "Liddy"];
const clicked = "clicked";

const Filter = ({ filters }: Props) => {
    return (
        <div className="filter">
            <input type="text" placeholder="Search" className="search" onChange={filters.handleSearch} value={filters.searchValue}/>
            <p>Company</p>
            <ol className="filter-params">
                {companyNames.map((name) => (
                    <li
                        key={name}
                        onClick={filters.handleFilterClick}
                        className={name === filters.currentCompanyFilter ? clicked : ""}
                    >
                        {name}
                    </li>
                ))}
            </ol>
            <div className="filter-price-container">
                <p>Price</p>
                <input type="number" className="filter-price" onChange={filters.handlePriceFilter} value={filters.priceValue}/>
            </div>
            <button className="clear-filter-btn" onClick={filters.clearFilter}>
                Clear Filter
            </button>
        </div>
    );
};

export default Filter;
