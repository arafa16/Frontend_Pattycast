import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonCoa from './attribute/ButtonCoa';

const ViewCoa = () => {
    const {id} = useParams();
    const [dataCoa, setDataCoa] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getCoa();
    },[]);

    const getCoa = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/coa/"+id);
        setDataCoa(response.data);
    }

    const deleteCoa = async() => {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+"/coa/"+id);
        navigate('/coa');
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Coa'}
                />
                <ButtonCoa 
                    linkBack={`/coa`} 
                    linkUpdate={`/formUpdateCoa/${id}`}
                    deleteCoa={deleteCoa}
                />
                <FormView 
                    dataCoa={dataCoa}
                />
            </div>
        </div>
    </div>
  )
}

export default ViewCoa