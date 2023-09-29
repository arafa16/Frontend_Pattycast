import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonCoa from './attribute/ButtonCoa';

const ViewTypePengajuan = () => {
    const {id} = useParams();
    const [dataTypePengajuans, setTypePengajuans] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getTypePengajuan();
    },[]);

    const getTypePengajuan = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/typePengajuans/"+id);
        setTypePengajuans(response.data);
    }

    const deleteTypePengajuan = async() => {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+"/typePengajuans/"+id);
        navigate('/typePengajuan');
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Coa'}
                />
                <ButtonCoa 
                    linkBack={`/typePengajuan`} 
                    linkUpdate={`/updateTypePengajuan/${id}`}
                    deleteTypePengajuan={deleteTypePengajuan}
                />
                <FormView 
                    dataTypePengajuans={dataTypePengajuans}
                />
            </div>
        </div>
    </div>
  )
}

export default ViewTypePengajuan