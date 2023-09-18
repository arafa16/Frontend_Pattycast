import React, {useEffect, useState} from "react";
import _ from "lodash";
import FormView from "./attribute/FormView";
import axios from "axios";
import { useParams } from "react-router-dom";
import Status from "./attribute/Status";
import Judul from "./attribute/Judul";
import ButtonAction from "./attribute/ButtonAction";

function Main() {
    const {id} = useParams();
    const [dataPengajuan, setDataPengajuan] = useState<Array>([]);
    const [status, setStatus] = useState<Array>([]);
    const [statuses, setStatuses] = useState<Array>([]);

    useEffect(()=>{
        getDataPengajuan();
    },[]);

    useEffect(()=>{
      getStatuses();
    },[]);

    const getDataPengajuan = async() => {
      const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/pengajuan/"+id,{
        withCredentials: true, // Now this is was the missing piece in the client side 
      });
      setDataPengajuan(response.data);
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
          <Status
            status={dataPengajuan.status && dataPengajuan.status.code}
            statuses={statuses}
          />
          <ButtonAction 
            status={dataPengajuan.status && dataPengajuan.status.code}
            linkEdit={`/formUserUpdate/${id}`}
            linkBack={`/pengajuan`}
          />
          <FormView 
            dataPengajuan={dataPengajuan}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;