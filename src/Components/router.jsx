import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioContainer from "../Containers/InicioContainer";

import Root from "./rout";
import QuienesSomos from "../Containers/QuienesSomos";
import ServiciosContainer from "../Containers/ServiciosContainer";
import ContactoContainer from "../Containers/ContactoContainer";
import Pagina from "../Containers/Pagina";
import PayForm from "./Servicios/PayForm";

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
                element: <Pagina />
            },
            {
                path: "/PayForm/:id",
                element: <PayForm />
            },
        ]
    }
]);
const Router = () => {
    return <RouterProvider router = {router} />;
};

export default Router;