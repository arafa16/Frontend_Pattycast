import React, { useEffect, useState } from 'react'
import Button from '../../../base-components/Button'
import { FormLabel, FormInput } from '../../../base-components/Form'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingIcon from '../../../base-components/LoadingIcon'
import { useDispatch, useSelector } from 'react-redux';
import { SubmitPtjb, resetPtjb } from '../../../stores/features/ptjbSlice';

const FormPtjb = () => {
    const {id} = useParams();
    const [nominal, setNominal] = useState('');
    const [keterangan, setKeterangan] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {dataPtjb, isDataPtjbError, isDataPtjbSuccess, isDataPtjbLoading, messageDataPtjb} = useSelector((state) => state.ptjbReducer);

    useEffect(()=>{
        if(isDataPtjbSuccess && messageDataPtjb){
            navigate(`/formView/${id}`);
            dispatch(resetPtjb());
        }
    },[isDataPtjbSuccess, messageDataPtjb]);

    const submitPengajuan = (e) => {
        e.preventDefault();
        dispatch(SubmitPtjb({
            nominal,
            keterangan,
            id
        }));
    }

    return (
        <>
            {/* BEGIN: Wizard Layout */}
            <div className="py-10 intro-y sm:py-10">
                <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <form onSubmit={submitPengajuan}>
                        <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                            <div className="col-span-12 intro-y sm:col-span-6">
                                <FormLabel htmlFor="input-wizard-6">Nominal</FormLabel>
                                <FormInput
                                    id="nominal"
                                    type="number"
                                    value={nominal}
                                    onChange={(e)=>setNominal(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                            <div className="col-span-12 intro-y sm:col-span-6">
                                <FormLabel htmlFor="input-wizard-6">Keterangan</FormLabel>
                                <FormInput
                                    id="keterangan"
                                    type="text"
                                    value={keterangan}
                                    onChange={(e)=>setKeterangan(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                            <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                                <Button type='reset' onClick={()=>{navigate(`/formView/${id}`)}} variant="secondary" className="w-48 ml-2">
                                    Cancel or Back
                                </Button>
                                <Button type='submit' variant="primary" className="w-48 ml-2">
                                {isDataPtjbLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Submit Pengajuan'}
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

export default FormPtjb;