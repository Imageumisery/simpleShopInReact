import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProductsPage from "../components/pages/ProductsPage";
import ProductDetailsPage from "../components/pages/ProductDetailsPage";
type Props = {};

const RootRouter = (props: Props) => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "products",
                    element: <ProductsPage />,
                },
                {
                    path: "products/:id",
                    element: <ProductDetailsPage />,
                },
            {
            path:"*",
            element:<Navigate to={"/products"} replace/>
            }
            ],
        },
    ];
    return useRoutes(routes);
};

export default RootRouter;
