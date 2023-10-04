import React, {useEffect, useState} from "react";
import _ from "lodash";

import Form from "./attribute/Form";
import axios from "axios";

function Main() {
    const [users, setUsers] = useState([]);
    const [typePengajuan, setTypePengajuan] = useState([]);
    const [ statuses, setStatuses] = useState([])
    const [coa, setCoa] = useState([]);
    const [costCenter, setCostCenter] = useState([]);
    const [annaliticAccount, setAnnaliticAccount] = useState([]);

    useEffect(()=>{
        getUser()
        getTypePengajuan();
        getStatus();
        getCoa();
        getCostCenter();
        getAnnaliticAccount();
    },[])

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
      <div className="col-span-12 2xl:col-span-12">
        <Form 
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