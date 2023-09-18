import React, {useEffect, useState} from "react";
import _ from "lodash";

import {useDispatch, useSelector} from "react-redux";
import {getMe, LogOut, reset} from "../../stores/features/authSlice";
import {useNavigate} from 'react-router-dom';


import Form from "./attribute/Form";
import axios from "axios";
import Status from "./attribute/Status";
import Judul from "./attribute/Judul";

function Main() {
  // const [users, setUsers] = useState<array>([]);
  const [typePengajuan, setTypePengajuan] = useState<Array>([]);
  const [status, setStatus] = useState<Array>([]);
  const [statuses, setStatuses] = useState<Array>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {users, isError} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
    dispatch(reset());
  }, [dispatch]);

  useEffect(()=>{
      getTypePengajuan();
      getStatus();
      getStatuses()
  },[])

  const getTypePengajuan = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/typePengajuans");
      setTypePengajuan(response.data);
  }

  const getStatus = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/2/code");
      setStatus(response.data);
  }

  const getStatuses = async() => {
    const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/select");
    setStatuses(response.data);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="py-10 mt-5 intro-y box sm:py-20">
          <Judul 
            textJudul="Form Petty Cash"
          />
          <Form 
            users={users} 
            typePengajuan={typePengajuan} 
            status={status} 
          />
        </div>
      </div>
    </div>
  );
}

export default Main;