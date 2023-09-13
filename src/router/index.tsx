import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import FormPengajuan from "../pages/Dashboard/FormPengajuan";
import FormUpdate from "../pages/Dashboard/FormUpdate";
import Pengajuan from "../pages/Pengajuan";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/formPengajuan",
          element: <FormPengajuan />,
        },{
          path: "/formUpdate/:id",
          element: <FormUpdate />,
        },{
          path: "/pengajuan",
          element: <Pengajuan />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ];

  return useRoutes(routes);
}

export default Router;
