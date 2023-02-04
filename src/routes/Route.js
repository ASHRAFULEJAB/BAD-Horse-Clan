import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
               path:'/',
               element:<HomePage/>
            },
            {
              path:'/login',
              element:<Login/>
            },
            {
                path:'/register',
                element:<Registration/>
            }
        ]
    }
])
export default router