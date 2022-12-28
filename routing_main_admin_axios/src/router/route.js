import Home from "../pages/Main/HomePage";
import MainRoot from "../pages/Main/MainRoot";
import Contact from "../pages/Main/ContactPage";
import About from "../pages/Main/AboutPage";
import Info from "../pages/Main/InfoPage";
import NotFoundAdmin from "../pages/Admin/NotFoundAdmin";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";
import Suppliers from "../pages/Admin/Suppliers";
import NotFound from "../pages/Main/NotFound";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "info",
                element: <Info />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
    {
        path: "/admin/",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "suppliers",
                element: <Suppliers />,
            },
            {
                path: "*",
                element: <NotFoundAdmin />,
            }
        ],
    },
];