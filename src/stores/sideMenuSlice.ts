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
