import React, {useEffect, useState} from "react";
import _ from "lodash";

import Form from "./attribute/Form";
import axios from "axios";

function Main() {
    const [users, setUsers] = useState<array>([]);
    const [typePengajuan, setTypePengajuan] = useState<Array>([]);
    const [ statuses, setStatuses] = useState<Array>([])

    useEffect(()=>{
        getUser()
        getTypePengajuan();
        getStatus();
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

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <Form users={users} typePengajuan={typePengajuan} statuses={statuses} />
      </div>
    </div>
  );
}

export default Main;