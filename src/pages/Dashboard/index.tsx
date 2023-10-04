import React, {useEffect, useState} from "react";
import _ from "lodash";
import Data from "./attribute/data";
import Informasi from "./attribute/informasi";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { GetPengajuan } from '../../stores/features/pengajuanSlice';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [dataPengajuans, setDataPengajuan] = useState([]);
  const [dataPengajuanAll, setDataPengajuanAll] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(0);
  const [status, setStatus] = useState(0);
  const [search, setSearch] = useState("");
  const [allPage, setAllPage] = useState(0);
  const [allData, setAllData] = useState(0);

  //status pengajuan
  const [dataStatus, setDataStatus] = useState([]);

  //type pengajuans
  const [typePengajuans, setTypePengajuans] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
      (state : any) => state.pengajuanReducer
  );

  useEffect(()=>{
    getPengajuan();
  },[limit, page, type, status, search]);

  useEffect(()=>{
    getPengajuanAll();
  },[]);

  useEffect(()=>{
    setDataPengajuan(pengajuans && pengajuans.rows);
    countPage(pengajuans && pengajuans.count);
    setAllData(pengajuans && pengajuans.count);
  },[isPengajuanSuccess, isPengajuanError, isPengajuanLoading]);

  useEffect(()=>{
    getTypePengajuan();
    getStatus();
  },[]);

  
  //ngambil data pengajuan
  const getPengajuan = async() => {
    dispatch(GetPengajuan({limit, page, type, status, search}));
  }

  const getPengajuanAll = async() => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/pengajuans`,{
        withCredentials: true, // Now this is was the missing piece in the client side 
      });
      setDataPengajuanAll(response.data);
  }

  const getStatus = async() => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/status`,{
      withCredentials: true, // Now this is was the missing piece in the client side 
    });
    setDataStatus(response.data);
  }

  const getTypePengajuan = async() => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/typePengajuans`,{
      withCredentials: true, // Now this is was the missing piece in the client side 
    });
    setTypePengajuans(response.data);
  }

  //hitung total page
  const countPage = (jmlData : any) => {
    const total = jmlData/limit;
    setAllPage(Math.ceil(total));
  }

  const nextPage = () => {
    const count = page + 1;
    if(count <= allPage){
      setPage(count);
    }
  }

  const prevPage = () => {
    const count = page - 1;
    if(count > 0){
      setPage(count);
    }
  }

  const changeType = (id : any) => {
    setType(id)
    setPage(1);
    setStatus(0)
  }

  const changeStatus = (id : any) => {
    setStatus(id);
    setPage(1);
  }

  const changeSearch = (code  : any) => {
    setSearch(code);
    setPage(1);
    setType(0);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <Informasi 
        typePengajuans={typePengajuans}
        dataPengajuanAll={dataPengajuanAll}
        changeType={changeType}
        type={type}
        />
        <Data 
          dataPengajuans={dataPengajuans} 
          limit={limit} 
          page={page}
          status={status}
          loading={isPengajuanLoading} 
          allPage={allPage}
          nextPage={nextPage}
          prevPage={prevPage} 
          allData={allData}
          dataStatus={dataStatus}
          changeStatus={changeStatus}
          changeSearch={changeSearch}
          search={search}
          />
      </div>
    </div>
  );
}

export default Main;
