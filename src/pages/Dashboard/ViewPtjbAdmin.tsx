import React, { useEffect, useState } from 'react'
import ViewPtjb from './attribute/ViewPtjb'
import Judul from './attribute/Judul'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ButtonPtjb from './attribute/ButtonPtjb'
import { useDispatch, useSelector } from 'react-redux';
import { DeletePtjbRedux, resetPtjb } from '../../stores/features/ptjbSlice';

const ViewPtjbAdmin = () => {
  const {id} = useParams();

  interface Data {
      id?:any;
      pengajuan?:any;
  }
  const [ptjb, setPtjb] = useState<Data>({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {dataPtjb, isDataPtjbError, isDataPtjbSuccess, isDataPtjbLoading, messageDataPtjb} = useSelector((state : any) => state.ptjbReducer);

  useEffect(()=>{
    getPtjb();
  },[])

  useEffect(()=>{
    if(isDataPtjbSuccess){
      dispatch(resetPtjb());
      navigate(`/formAdminView/${ptjb.pengajuan && ptjb.pengajuan.uuid}`);
    }
  },[isDataPtjbSuccess])

  const getPtjb = async() => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/ptjb/${id}`);
    setPtjb(response.data);
  }
  
  const clickDelete = async() => {
    dispatch(DeletePtjbRedux({id}));
  }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
              <Judul 
                textJudul={`PTJB | ${ptjb && ptjb.id}`}
              />
              <ButtonPtjb 
                linkBack={`/formAdminView/${ptjb.pengajuan && ptjb.pengajuan.uuid}`}
                linkUpdate={`/updatePtjbAdmin/${id}`}
                deletePtjb={clickDelete}
              />
              <ViewPtjb
                dataPtjb={ptjb}
              />
            </div>
        </div>
    </div>
  )
}

export default ViewPtjbAdmin