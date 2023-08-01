import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProductsPage from "../components/pages/ProductsPage";
import ProductDetailsPage from "../components/pages/ProductDetailsPage";
import ProductCartPage from "../components/pages/ProductCartPage";
import AboutPage from "../components/pages/AboutPage";
type Props = {};

const RootRouter = (props: Props) => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "cart",
                    element: <ProductCartPage />,
                },
                {
                    path: "about",
                    element: <AboutPage />,
                },
                {
                    path: "products",
                    element: <ProductsPage />,
                },
                {
                    path: "products/:id",
                    element: <ProductDetailsPage />,
                },
                {
                    path: "*",
                    element: <Navigate to={"/products"} replace />,
                },
            ],
        },
    ];
    return useRoutes(routes);
};

export default RootRouter;
