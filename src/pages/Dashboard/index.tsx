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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(0);
  const [status, setStatus] = useState(0);
  const [search, setSearch] = useState("");
  const [allPage, setAllPage] = useState(0);
  const [allData, setAllData] = useState(0);

  //status pengajuan
  const [dataStatus, setDataStatus] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
      (state) => state.pengajuanReducer
  );

  //type pengajuans
  const [typePengajuans, setTypePengajuans] = useState([]);

  useEffect(()=>{
    getPengajuan();
  },[limit, page, type, status, search]);

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
  const countPage = (jmlData) => {
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

  const changeType = (id) => {
    setType(id)
    setPage(1);
  }

  const changeStatus = (id) => {
    setStatus(id);
    setPage(1);
    setType(0);
  }

  const changeSearch = (code) => {
    setSearch(code);
    setPage(1);
    setType(0);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <Informasi 
        dataStatus={dataStatus}
        changeStatus={changeStatus}
        status={status}
        />
        <Data 
          dataPengajuans={dataPengajuans} 
          limit={limit} 
          page={page}
          type={type}
          loading={isPengajuanLoading} 
          allPage={allPage}
          nextPage={nextPage}
          prevPage={prevPage} 
          allData={allData}
          typePengajuans={typePengajuans}
          changeType={changeType}
          changeSearch={changeSearch}
          search={search}
          />
      </div>
    </div>
  );
}

export default Main;
