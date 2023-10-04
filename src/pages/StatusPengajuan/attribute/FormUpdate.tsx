import React, { useEffect, useState } from 'react'
import Button from '../../../base-components/Button'
import { FormLabel, FormInput, FormSelect  } from '../../../base-components/Form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const FormUpdate = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        getStatusPengajuan();
    },[]);

    const getStatusPengajuan = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/"+id);
        console.log(response.data, 'response');
        setName(response.data && response.data.name);
        setCode(response.data && response.data.code);
        setIsActive(response.data && response.data.isActive ? '1' : '0');
    }

    const updateStatusPengajaun = async(e : any) => {
        e.preventDefault();
        await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+"/status/"+id,{
            name:name,
            code:code,
            isActive:isActive
        });
        navigate(`/viewStatusPengajuan/${id}`);
    }

    return (
        <>
            {/* BEGIN: Wizard Layout */}
            <div className="py-10 intro-y sm:py-10">
                <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <form onSubmit={updateStatusPengajaun}>
                        <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                            <div className="col-span-12 intro-y sm:col-span-4">
                                <FormLabel htmlFor="input-wizard-6">Nama</FormLabel>
                                <FormInput
                                    id="nominal"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                            <div className="col-span-12 intro-y sm:col-span-4">
                                <FormLabel htmlFor="input-wizard-6">Code</FormLabel>
                                <FormInput
                                    id="keterangan"
                                    type="number"
                                    required
                                    value={code}
                                    onChange={(e)=>setCode(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                            <div className="col-span-12 intro-y sm:col-span-4">
                                <FormLabel htmlFor="input-wizard-6">Status</FormLabel>
                                <FormSelect 
                                    value={isActive}
                                    required 
                                    onChange={(e)=>setIsActive(e.target.value)} 
                                    id="typePengajuanId"
                                    >
                                    <option></option>
                                    <option value={`1`}>active</option>
                                    <option value={`0`}>non active</option>
                                </FormSelect>
                            </div>
                            <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                                <Button 
                                    type='reset' 
                                    onClick={()=>{navigate(`/viewStatusPengajuan/${id}`)}} 
                                    variant="secondary" 
                                    className="w-48 ml-2">
                                    Cancel or Back
                                </Button>
                                <Button type='submit' variant="primary" className="w-48 ml-2">
                                    Update
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* END: Wizard Layout */}
        </>
    )
}

export default FormUpdate;