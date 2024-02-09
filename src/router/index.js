import {useRoutes} from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import BlankLayout from "../layouts/BlankLayout";
import FormPage from "../pages/login/FormPage";

const MainPage = {
    path: '/main',
    element: <MainLayout/>,
    children: []
}

const BlankPage = {
    path: '/login',
    element: <BlankLayout/>,
    children: [
        {
            path: 'page/:id',
            element: <FormPage/>,
        },
    ]
}

export default function Routes() {
    return useRoutes([MainPage, BlankPage])
}
