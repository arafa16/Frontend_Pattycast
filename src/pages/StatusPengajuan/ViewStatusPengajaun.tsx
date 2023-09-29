import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonCoa from './attribute/ButtonCoa';

const ViewStatusPengajaun = () => {
    const {id} = useParams();
    const [dataStatusPengajuans, setDataStatusPengajuans] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getStatusPengajuan();
    },[]);

    const getStatusPengajuan = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/"+id);
        setDataStatusPengajuans(response.data);
    }

    const deleteStatusPengajuan = async() => {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+"/status/"+id);
        navigate('/statusPengajuan');
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Coa'}
                />
                <ButtonCoa 
                    linkBack={`/statusPengajuan`} 
                    linkUpdate={`/updateStatusPengajaun/${id}`}
                    deleteStatusPengajuan={deleteStatusPengajuan}
                />
                <FormView 
                    dataStatusPengajuans={dataStatusPengajuans}
                />
            </div>
        </div>
    </div>
  )
}

export default ViewStatusPengajaun