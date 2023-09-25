import React, {useEffect, useState} from "react";
import _ from "lodash";
import FormView from "./attribute/FormView";
import axios from "axios";
import { useParams } from "react-router-dom";
import Status from "./attribute/Status";
import Judul from "./attribute/Judul";
import ButtonAction from "./attribute/ButtonAction";

import { useDispatch, useSelector } from 'react-redux';
import { UpdatePengajuan, reset } from '../../stores/features/pengajuanSlice';
import { useNavigate } from "react-router-dom";
import DataPtjb from "./attribute/DataPtjb";

function Main() {
    const {id} = useParams();
    const [dataPengajuan, setDataPengajuan] = useState<Array>([]);
    const [statuses, setStatuses] = useState<Array>([]);
    // const [statusId, setStatusId] = useState(2);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
        (state) => state.pengajuanReducer
    );

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

    const clickChangeStatus = (code) => {
      const statusId = code;
      dispatch(UpdatePengajuan({
          id,
          statusId
      }));
      getDataPengajuan();
    }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <div className="py-10 mt-5 intro-y box sm:py-20">
          <Judul 
            textJudul={`Form Petty Cash | ${dataPengajuan.id}`}
          />
          <Status
            status={dataPengajuan.status && dataPengajuan.status.code}
            statuses={statuses}
          />
          <ButtonAction 
            status={dataPengajuan.status && dataPengajuan.status.code}
            linkEdit={`/formUserUpdate/${id}`}
            linkBack={`/pengajuan`}
            linkCreatePtjb={`/createPtjb/${id}`}
            clickChangeStatus={clickChangeStatus}
            isPengajuanLoading={isPengajuanLoading}
          />
          <FormView 
            dataPengajuan={dataPengajuan}
          />
          <DataPtjb 
            dataPengajuan={dataPengajuan}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;