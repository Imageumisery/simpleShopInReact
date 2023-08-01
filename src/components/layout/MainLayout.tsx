import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { ContextType } from "../../types/ContextType";



const MainLayout = () => {
    const [context, setContext] = useState<ContextType | null>();
    return (
        <div>
            <Header />  
            <h1 className="title">Comfy shop products</h1>
            <Outlet context={[context, setContext]}/>
        </div>
    );
};

export default MainLayout;
