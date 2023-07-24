import { Outlet } from "react-router-dom";
import Header from "../Header";
type Props = {};

const MainLayout = (props: Props) => {
    return (
        <div>
            <Header />  
            <Outlet />
        </div>
    );
};

export default MainLayout;
