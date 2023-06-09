import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioContainer from "../Containers/InicioContainer";

import Root from "./rout";
import QuienesSomos from "../Containers/QuienesSomos";
import ServiciosContainer from "../Containers/ServiciosContainer";
import ContactoContainer from "../Containers/ContactoContainer";
import PayForm from "./Servicios/PayForm";
import TiendaLegatto from "../Containers/TiendaLegatto";
import PayFormProducts from "./Servicios/PayFormProducts";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/",
                element: <InicioContainer />
            },
            {
                path: "/QuienesSomos",
                element: <QuienesSomos />
            },
            {
                path: "/Servicios",
                element: <ServiciosContainer />
            },
            {
                path: "/Contacto",
                element: <ContactoContainer />
            },
            {
                path: "/TiendaLegatto",
                element: <TiendaLegatto />
            },
            {
                path: "/PayForm/:id",
                element: <PayForm />
            },
            {
                path: "/PayFormProducts/:id",
                element: <PayFormProducts />
            },
        ]
    }
]);
const Router = () => {
    return <RouterProvider router = {router} />;
};

export default Router;