import { Outlet } from "react-router-dom";
import Header from "../Header";
type Props = {};

const MainLayout = (props: Props) => {
    return (
        <div>
            <Header />  
            <h1 className="title">Comfy shop products</h1>
            <Outlet />
        </div>
    );
};

export default MainLayout;
