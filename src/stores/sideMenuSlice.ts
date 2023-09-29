import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "Activity",
      pathname: "/pengajuan",
      title: "Pengajuan",
    },{
      icon: "Home",
      title: "Dashboard Admin",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/dashboard",
          title: "Data Pengajuan",
        },
        {
          icon: "Activity",
          pathname: "/exportData",
          title: "Export Data",
        },
        {
          icon: "Activity",
          pathname: "/dataUser",
          title: "Data User",
        }
      ],
    },{
      icon: "Home",
      title: "Setting",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/coa",
          title: "Coa",
        },
        {
          icon: "Activity",
          pathname: "/typePengajuan",
          title: "Type Pengajuan",
        },
        {
          icon: "Activity",
          pathname: "/costCenter",
          title: "Cost Center",
        },
        {
          icon: "Activity",
          pathname: "/annaliticAccount",
          title: "Annalitic Account",
        },
        {
          icon: "Activity",
          pathname: "/statusPengajuan",
          title: "Status Pengajuan",
        }


        
      ],
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
