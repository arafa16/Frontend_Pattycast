import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
  admin?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "FileText",
      pathname: "/pengajuan",
      title: "Pengajuan",
      admin: false,
    },{
      icon: "Airplay",
      title: "Dashboard Admin",
      admin: true,
      subMenu: [
        {
          icon: "Layers",
          pathname: "/dashboard",
          title: "Data Pengajuan",
        },
        {
          icon: "Download",
          pathname: "/exportData",
          title: "Export Data",
        },
        {
          icon: "Users",
          pathname: "/dataUser",
          title: "Data User",
        }
      ],
    },{
      icon: "Settings",
      title: "Setting",
      admin: true,
      subMenu: [
        {
          icon: "Edit3",
          pathname: "/coa",
          title: "Coa"
        },
        {
          icon: "Edit3",
          pathname: "/typePengajuan",
          title: "Type Pengajuan",
        },
        {
          icon: "Edit3",
          pathname: "/costCenter",
          title: "Cost Center",
        },
        {
          icon: "Edit3",
          pathname: "/annaliticAccount",
          title: "Annalitic Account",
        },
        {
          icon: "Edit3",
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
