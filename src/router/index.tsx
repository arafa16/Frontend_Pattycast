import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import FormAdminView from "../pages/Dashboard/FormAdminView";
import FormPengajuan from "../pages/Dashboard/FormPengajuan";
import PtjbFormAdmin from "../pages/Dashboard/PtjbFormAdmin";
import FormUser from "../pages/Pengajuan/FormUser";
import FormUserUpdate from "../pages/Pengajuan/FormUserUpdate";
import FormUserView from "../pages/Pengajuan/FormUserView";
import FormUpdate from "../pages/Dashboard/FormUpdate";
import Pengajuan from "../pages/Pengajuan";
import DataUser from "../pages/Users/DataUser";
import FormUserByAdmin from "../pages/Users/FormUser";
import ViewUser from "../pages/Users/ViewUser";
import UpdateUser from "../pages/Users/UpdateUser";
import PtjbFormUser from "../pages/Pengajuan/PtjbFormUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewPtjbUser from "../pages/Pengajuan/ViewPtjbUser";
import UpdatePtjbUser from "../pages/Pengajuan/UpdatePtjbUser";
import ViewPtjbAdmin from "../pages/Dashboard/ViewPtjbAdmin";
import UpdatePtjbAdmin from "../pages/Dashboard/UpdatePtjbAdmin";
import ExportData from "../pages/Export/ExportData";
import Coa from "../pages/Coa/Coa";
import FormCreate from "../pages/Coa/FormCreate";
import FormUpdateCoa from "../pages/Coa/FormUpdateCoa";
import ViewCoa from "../pages/Coa/viewCoa";
import TypePengajuan from "../pages/TypePengajuan/TypePengajuan";
import ViewTypePengajuan from "../pages/TypePengajuan/ViewTypePengajuan";
import UpdateTypePengajuan from "../pages/TypePengajuan/UpdateTypePengajuan";
import FormTypePengajuan from "../pages/TypePengajuan/FormTypePengajuan";
import CostCenter from "../pages/CostCenter/CostCenter";
import ViewCostCenter from "../pages/CostCenter/ViewCostCenter";
import FormCostCenter from "../pages/CostCenter/FormCostCenter";
import UpdateCostCenter from "../pages/CostCenter/UpdateCostCenter";
import AnnaliticAccount from "../pages/AnnaliticAccount/AnnaliticAccount";
import FormAnnaliticAccount from "../pages/AnnaliticAccount/FormAnnaliticAccount";
import ViewAnnaliticAccount from "../pages/AnnaliticAccount/ViewAnnaliticAccount";
import UpdateAnnaliticAccount from "../pages/AnnaliticAccount/UpdateAnnaliticAccount";
import StatusPengajuan from "../pages/StatusPengajuan/StatusPengajuan";
import FormStatusPengajuan from "../pages/StatusPengajuan/FormStatusPengajuan";
import ViewStatusPengajaun from "../pages/StatusPengajuan/ViewStatusPengajaun";
import UpdateStatusPengajaun from "../pages/StatusPengajuan/UpdateStatusPengajaun";

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
          path: "/createPtjbAdmin/:id",
          element: <PtjbFormAdmin />
        },
        {
          path: "/viewPtjbAdmin/:id",
          element: <ViewPtjbAdmin />
        },
        {
          path: "/updatePtjbAdmin/:id",
          element: <UpdatePtjbAdmin />
        }, 
        //batasan admin dan user
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
        },
        {
          path: "/updateUser/:id",
          element: <UpdateUser />,
        },
        {
          path: "/createPtjb/:id",
          element: <PtjbFormUser />,
        },
        {
          path: "/viewPtjb/:id",
          element: <ViewPtjbUser />
        },
        {
          path: "/updatePtjb/:id",
          element: <UpdatePtjbUser />
        },
        {
          path: "/exportData",
          element: <ExportData />
        },
        //coa
        {
          path: "/coa",
          element: <Coa />
        },
        {
          path: "/coaForm",
          element: <FormCreate />
        },
        {
          path: "/formUpdateCoa/:id",
          element: <FormUpdateCoa />
        },
        {
          path: "/viewCoa/:id",
          element: <ViewCoa />
        },
        //Type Pengajuan
        {
          path: "/typePengajuan",
          element: <TypePengajuan />
        },
        {
          path: "/viewTypePengajuan/:id",
          element: <ViewTypePengajuan />
        },
        {
          path: "/updateTypePengajuan/:id",
          element: <UpdateTypePengajuan />
        },
        {
          path: "/createTypePengajuan",
          element: <FormTypePengajuan />
        },
        //cost center
        {
          path: "/costCenter",
          element: <CostCenter />
        },
        {
          path: "/viewCostCenter/:id",
          element: <ViewCostCenter />
        },
        {
          path: "/formCostCenter",
          element: <FormCostCenter />
        },
        {
          path: "/updateCostCenter/:id",
          element: <UpdateCostCenter />
        }
        //annalitic account
        ,
        {
          path: "/annaliticAccount",
          element: <AnnaliticAccount />
        },
        {
          path: "/FormAnnaliticAccount",
          element: <FormAnnaliticAccount />
        },
        {
          path: "/viewAnnaliticAccount/:id",
          element: <ViewAnnaliticAccount />
        },
        {
          path: "/updateAnnaliticAccount/:id",
          element: <UpdateAnnaliticAccount />
        }
        //status
        ,
        {
          path: "/statusPengajuan",
          element: <StatusPengajuan />
        },
        {
          path: "/formStatusPengajuan",
          element: <FormStatusPengajuan />
        },
        {
          path: "/viewStatusPengajuan/:id",
          element: <ViewStatusPengajaun />
        },
        {
          path: "/updateStatusPengajaun/:id",
          element: <UpdateStatusPengajaun />
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
