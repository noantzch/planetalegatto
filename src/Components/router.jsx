import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioContainer from "../Containers/InicioContainer";

import Root from "./rout";
import QuienesSomos from "../Containers/QuienesSomos";
import Galeria from "../Containers/GaleriaContainer";
import ServiciosContainer from "../Containers/ServiciosContainer";
import ContactoContainer from "../Containers/ContactoContainer";

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
                path: "/Galeria",
                element: <Galeria />
            },
            {
                path: "/Servicios",
                element: <ServiciosContainer />
            },
            {
                path: "/Contacto",
                element: <ContactoContainer />
            }
        ]
    }
]);
const Router = () => {
    return <RouterProvider router = {router} />;
};

export default Router;