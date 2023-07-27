type Props = {};

const Filter = ({handleFilterClick, handlePriceFilter}) => {
    return (
        <div className="filter">
            <input type="text" placeholder="Search" className="search" />
            <p>Company</p>
            <ol className="filter-params">
                <li onClick={handleFilterClick}>All</li>
                <li onClick={handleFilterClick}>Ikea</li>
                <li onClick={handleFilterClick}>Marcos</li>
                <li onClick={handleFilterClick}>Caressa</li>
                <li onClick={handleFilterClick}>Liddy</li>
            </ol>
            <div className="filter-price-container">
                <p>Price</p>
                <input type="text" className="filter-price" onChange={handlePriceFilter}/>
            </div>
        </div>
    );
};

export default Filter;
