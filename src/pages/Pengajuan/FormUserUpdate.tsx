import React, {useEffect, useState} from "react";
import _ from "lodash";
import FormUpdate from "./attribute/FormUpdate";
import axios from "axios";
import { useParams } from "react-router-dom";
import Status from "./attribute/Status";
import Judul from "./attribute/Judul";

function Main() {
    const {id} = useParams();
    const [users, setUsers] = useState([]);
    const [typePengajuan, setTypePengajuan] = useState([]);
    const [dataPengajuan, setDataPengajuan] = useState<any>([]);
    const [status, setStatus] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [coaSelect, setCoaSelect] = useState([]);
    const [costCenterSelect, setCostCenterSelect] = useState([]);
    const [annaliticAccountSelect, setAnnaliticAccountSelect] = useState([]);

    useEffect(()=>{
        getUser();
        getTypePengajuan();
        getStatus();
        getStatuses();
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
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/1/code");
      setStatus(response.data);
    }

    const getStatuses = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/select");
      setStatuses(response.data);
    }

    const getCoa = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/coa");
      setCoaSelect(response.data);
    }
  
    const getCostCenter = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/costCenter");
      setCostCenterSelect(response.data);
    }
  
    const getAnnaliticAccount = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/annaliticAccount");
      setAnnaliticAccountSelect(response.data);
    }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <div className="py-10 mt-5 intro-y box sm:py-20">
          <Judul 
            textJudul={`Form Petty Cash | ${dataPengajuan.id} `}
          />
          <Status
            status={dataPengajuan.status && dataPengajuan.status.code}
            statuses={statuses}
          />
          <FormUpdate 
            dataPengajuan={dataPengajuan} 
            users={users} 
            typePengajuan={typePengajuan} 
            coaSelect={coaSelect}
            costCenterSelect={costCenterSelect}
            annaliticAccountSelect={annaliticAccountSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;