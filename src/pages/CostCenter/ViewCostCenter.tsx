import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonCoa from './attribute/ButtonCoa';

const ViewCostCenter = () => {
    const {id} = useParams();
    const [dataCostCenters, setDataCostCenters] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getCostCenters();
    },[]);

    const getCostCenters = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/costCenter/"+id);
        setDataCostCenters(response.data);
    }

    const deleteCostCenter = async() => {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+"/costCenter/"+id);
        navigate('/costCenter');
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Cost Center'}
                />
                <ButtonCoa 
                    linkBack={`/costCenter`} 
                    linkUpdate={`/updateCostCenter/${id}`}
                    deleteCostCenter={deleteCostCenter}
                />
                <FormView 
                    dataCostCenters={dataCostCenters}
                />
            </div>
        </div>
    </div>
  )
}

export default ViewCostCenter