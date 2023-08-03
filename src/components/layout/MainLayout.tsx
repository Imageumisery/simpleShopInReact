import { Outlet } from "react-router-dom";
import Header from "../Header";
import { ProductsContext } from "../contexts/ProductsContext";
import { useState } from "react";
import { ProductType } from "../../types/ProductType";

const MainLayout = () => {
    const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
    return (
        <div>
            <ProductsContext.Provider value={{ setShoppingCart, shoppingCart }}>
                <Header />
                <h1 className="title">Comfy shop products</h1>
                <Outlet />
            </ProductsContext.Provider>
        </div>
    );
};

export default MainLayout;
