import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonAA from './attribute/ButtonAA';

const ViewAnnaliticAccount = () => {
    const {id} = useParams();
    const [dataAnnaliticAccount, setDataAnnaliticAccount] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getAnnaliticAccount();
    },[]);

    const getAnnaliticAccount = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/annaliticAccount/"+id);
        setDataAnnaliticAccount(response.data);
    }

    const deleteAnnaliticAccount = async() => {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+"/annaliticAccount/"+id);
        navigate('/annaliticAccount');
    }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Cost Center'}
                />
                <ButtonAA
                    linkBack={`/annaliticAccount`} 
                    linkUpdate={`/updateAnnaliticAccount/${id}`}
                    deleteCostCenter={deleteAnnaliticAccount}
                />
                <FormView 
                    dataAnnaliticAccount={dataAnnaliticAccount}
                />
            </div>
        </div>
    </div>
  )
}

export default ViewAnnaliticAccount