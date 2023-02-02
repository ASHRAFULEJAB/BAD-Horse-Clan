import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
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