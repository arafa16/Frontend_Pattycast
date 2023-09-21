import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import FormAdminView from "../pages/Dashboard/FormAdminView";
import FormPengajuan from "../pages/Dashboard/FormPengajuan";
import FormUser from "../pages/Pengajuan/FormUser";
import FormUserUpdate from "../pages/Pengajuan/FormUserUpdate";
import FormUserView from "../pages/Pengajuan/FormUserView";
import FormUpdate from "../pages/Dashboard/FormUpdate";
import Pengajuan from "../pages/Pengajuan";
import DataUser from "../pages/Users/DataUser";
import FormUserByAdmin from "../pages/Users/FormUser";
import ViewUser from "../pages/Users/ViewUser";
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
          path: "/formAdminView/:id",
          element: <FormAdminView />,
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
        },
        {
          path: "/formUser",
          element: <FormUser />,
        },
        {
          path: "/formUserUpdate/:id",
          element: <FormUserUpdate />,
        },
        {
          path: "/formView/:id",
          element: <FormUserView />,
        },
        {
          path: "/dataUser",
          element: <DataUser />,
        },
        {
          path: "/createUser",
          element: <FormUserByAdmin />,
        },
        {
          path: "/viewUser/:id",
          element: <ViewUser />,
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
