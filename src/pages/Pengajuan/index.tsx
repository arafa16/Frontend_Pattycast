import React, { useState, useEffect } from 'react'
import Data from './attribute/Data'

import { useDispatch, useSelector } from 'react-redux';
import { GetPengajuanByUser, reset } from '../../stores/features/pengajuanSlice';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [dataPengajuans, setDataPengajuans] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [allData, setAllData] = useState(0);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //pengajuan reducer
  const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
    (state : any) => state.pengajuanReducer
  );

  useEffect(()=>{
    dispatch(reset());
  },[]);

  useEffect(()=>{
    getPengajuan();
  },[limit, page, search]);

  useEffect(()=>{
    setDataPengajuans(pengajuans && pengajuans.rows);
    countPage(pengajuans && pengajuans.count);
    setAllData(pengajuans && pengajuans.count);
  },[isPengajuanSuccess, isPengajuanLoading, isPengajuanError]);

  const getPengajuan = () => {
    dispatch(GetPengajuanByUser({
      limit, 
      page, 
      search,
      type: 0,
      status: 0
    }));
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

  const changeSearch = (code :any) => {
    setSearch(code);
    setPage(1);
    // setType(0);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <Data 
          dataPengajuans={dataPengajuans}
          page={page}
          limit={limit}
          allPage={allPage}
          allData={allData}
          nextPage={nextPage}
          prevPage={prevPage}
          changeSearch={changeSearch}
          search={search} 
        />
      </div>
    </div>
  )
}

export default Main