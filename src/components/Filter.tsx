type Props = {
    handleFilterClick: any;
    handlePriceFilter: any;
    currentCompanyFilter: string;
    handleSearch:any;
};

const companyNames = ["All", "Ikea", "Marcos", "Caressa", "Liddy"];
const clicked = "clicked";

const Filter = ({ handleSearch, currentCompanyFilter, handleFilterClick, handlePriceFilter }: Props) => {
    return (
        <div className="filter">
            <input type="text" placeholder="Search" className="search" onChange={handleSearch}/>
            <p>Company</p>
            <ol className="filter-params">
                {companyNames.map((name) => (
                    <li key={name} onClick={handleFilterClick} className={name === currentCompanyFilter ? clicked : ""}>
                        {name}
                    </li>
                ))}
            </ol>
            <div className="filter-price-container">
                <p>Price</p>
                <input type="number" className="filter-price" onChange={handlePriceFilter} />
            </div>
        </div>
    );
};

export default Filter;
