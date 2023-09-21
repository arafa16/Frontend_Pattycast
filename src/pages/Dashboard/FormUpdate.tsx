import React, {useEffect, useState} from "react";
import _ from "lodash";
import FormUpdate from "./attribute/FormUpdate";
import axios from "axios";
import { useParams } from "react-router-dom";
import Status from "./attribute/Status";

function Main() {
    const {id} = useParams();
    const [users, setUsers] = useState<array>([]);
    const [typePengajuan, setTypePengajuan] = useState<Array>([]);
    const [dataPengajuan, setDataPengajuan] = useState<Array>([]);
    const [statuses, setStatuses] = useState<Array>([]);
    const [coa, setCoa] = useState<Array>([]);
    const [costCenter, setCostCenter] = useState<Array>([]);
    const [annaliticAccount, setAnnaliticAccount] = useState<Array>([]);

    useEffect(()=>{
        getUser();
        getTypePengajuan();
        getStatus();
        getDataPengajuan();
        getCoa();
        getCostCenter();
        getAnnaliticAccount();
    },[]);

    const getDataPengajuan = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/pengajuan/"+id,{
        withCredentials: true, // Now this is was the missing piece in the client side 
      });
      setDataPengajuan(response.data);
    }

    const getUser = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/users",{
          withCredentials: true, // Now this is was the missing piece in the client side 
        });
        setUsers(response.data);
    }

    const getTypePengajuan = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/typePengajuans");
        setTypePengajuan(response.data);
    }

    const getStatus = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status");
        setStatuses(response.data);
    }

    const getCoa = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/coa");
      setCoa(response.data);
    }
  
    const getCostCenter = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/costCenter");
      setCostCenter(response.data);
    }
  
    const getAnnaliticAccount = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/annaliticAccount");
      setAnnaliticAccount(response.data);
    }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <FormUpdate 
          dataPengajuan={dataPengajuan} 
          users={users} 
          typePengajuan={typePengajuan} 
          statuses={statuses}
          coa={coa}
          costCenter={costCenter}
          annaliticAccount={annaliticAccount}
        />
      </div>
    </div>
  );
}

export default Main;