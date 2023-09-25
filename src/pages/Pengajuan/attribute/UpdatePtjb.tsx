import React, { useEffect, useState } from 'react'
import Button from '../../../base-components/Button'
import { FormLabel, FormInput } from '../../../base-components/Form'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingIcon from '../../../base-components/LoadingIcon'
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePtjbRedux, resetPtjb } from '../../../stores/features/ptjbSlice';

const UpdatePtjb = (props) => {
    const {ptjb} = props;
    const {id} = useParams();

    const [nominal, setNominal] = useState('');
    const [keterangan, setKeterangan] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {dataPtjb, isDataPtjbError, isDataPtjbSuccess, isDataPtjbLoading, messageDataPtjb} = useSelector((state) => state.ptjbReducer);

    useEffect(()=>{
        if(isDataPtjbSuccess && messageDataPtjb){
            navigate(`/viewPtjb/${id}`);
            dispatch(resetPtjb());
        }
    },[isDataPtjbSuccess, messageDataPtjb]);

    useEffect(()=>{
        setInput();
    },[ptjb]);

    const setInput = () => {
        setNominal(ptjb.nominal);
        setKeterangan(ptjb.keterangan);
    }

    const updatePtjb = (e) => {
        e.preventDefault();
        dispatch(UpdatePtjbRedux({
            nominal,
            keterangan,
            id
        }));
    }

  return (
    <>
        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <form onSubmit={updatePtjb}>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-4">Nominal</FormLabel>
                    <FormInput
                        id="nominal"
                        type="number"
                        defaultValue={nominal}
                        onChange={(e)=>setNominal(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Keterangan</FormLabel>
                    <FormInput
                        id="keterangan"
                        type="text"
                        defaultValue={keterangan}
                        onChange={(e)=>setKeterangan(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button type='reset' onClick={()=>{navigate(`/viewPtjb/${id}`)}} variant="secondary" className="w-48 ml-2">
                        Cancel
                    </Button>
                    <Button type='submit' variant="primary" className="w-48 ml-2">
                    {isDataPtjbLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Update'}
                    </Button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default UpdatePtjb;