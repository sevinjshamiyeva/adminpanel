import AddUser from "../pages/admin/addUser";
import AdminRout from "../pages/admin/adminRouters";
import Dashboard from "../pages/admin/dashboard";
import Home from "../pages/admin/home";
import Product from "../pages/admin/products";
import Statistic from "../pages/admin/statistic";

export const routes=[{

    path: "/",
    element: <AdminRout/>,
    
    children: [
      {
        path: "/",
        element: <Home/>,

      },
      {
        path: "/addUser",
        element: <AddUser/>,

      },
      {
        path: "/dashboard",
        element:<Dashboard/>,

      },
      {
        path: "/product",
        element:<Product/>,

      },
      {
        path: "/statistic",
        element:<Statistic/>,

      },
    ]
  
}]