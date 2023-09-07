import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SubmitPengajuan } from '../../../stores/features/pengajuanSlice';

import Button from "../../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Litepicker from "../../../base-components/Litepicker";
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const {users, typePengajuan, statuses} = props;

    const [userId, setUserId] = useState<string>("");
    const [tanggal, setTanggal] = useState<string>("");
    const [expense, setExpense] = useState<string>("");
    const [advance, setAdvance] = useState<string>("");
    const [coa, setCoa] = useState<string>("");
    const [costCenter, setCostCenter] = useState<string>("");
    const [analiticAccount, setAnaliticAccount] = useState<string>("");
    const [typePengajuanId, setTypePengajuanId] = useState<string>("");
    const [debit, setDebit] = useState<string>("");
    const [credit, setCredit] = useState<string>("");
    const [statusId, setStatusId] = useState<string>("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
        (state) => state.pengajuanReducer
    );

    useEffect(()=>{
        if(isPengajuanSuccess){
            resetValue();
        }
        console.log(messagePengajuan, "message")
    },[isPengajuanSuccess, messagePengajuan])

    const resetValue = () => {
        setUserId("");
        setTanggal("");
        setExpense("");
        setAdvance("");
        setCoa("");
        setCostCenter("");
        setAnaliticAccount("");
        setTypePengajuanId("");
        setDebit("");
        setCredit("");
        setStatusId("");
    }

    const submitPengajuan = (e) => {
        e.preventDefault();
        dispatch(SubmitPengajuan({
            userId, 
            tanggal, 
            expense, 
            advance, 
            coa, 
            costCenter,
            analiticAccount,
            debit,
            credit,
            typePengajuanId,
            statusId
        }));
    }

  return (
    <div className="py-10 mt-5 intro-y box sm:py-20">
        <div className="px-5">
            <div className="text-lg font-medium text-center">
                Form Petty Cash
            </div>
        </div>
        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <form onSubmit={submitPengajuan}>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-1">User</FormLabel>
                    <FormSelect value={userId} onChange={(e)=>setUserId(e.target.value)} id="input-wizard-6">
                        <option></option>
                        {users.map((user, index)=>(
                            <option key={index} value={user.id}>{user.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">Tanggal</FormLabel>
                    <Litepicker 
                        value={tanggal}
                        onChange={setTanggal}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 2022,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                          format:"YYYY-MM-DD"
                        }}
                        className="pl-4"
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">Expense</FormLabel>
                    <FormInput
                        id="expense"
                        type="text"
                        value={expense}
                        onChange={(e)=>setExpense(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">Advance</FormLabel>
                    <FormInput
                        id="advance"
                        type="text"
                        value={advance}
                        onChange={(e)=>setAdvance(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-4">CoA</FormLabel>
                    <FormInput
                        id="coa"
                        type="text"
                        value={coa}
                        onChange={(e)=>setCoa(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Cost Center</FormLabel>
                    <FormInput
                        id="costCenter"
                        type="text"
                        value={costCenter}
                        onChange={(e)=>setCostCenter(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Analitic Account</FormLabel>
                    <FormInput
                        id="analiticAccount"
                        type="text"
                        value={analiticAccount}
                        onChange={(e)=>setAnaliticAccount(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Type Pengajuan</FormLabel>
                    <FormSelect 
                        value={typePengajuanId} 
                        onChange={(e)=>setTypePengajuanId(e.target.value)} 
                        id="typePengajuanId"
                        >
                        <option></option>
                        {typePengajuan.map((type, index)=>(
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Debit</FormLabel>
                    <FormInput
                        id="debit"
                        type="text"
                        value={debit}
                        onChange={(e)=>setDebit(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Credit</FormLabel>
                    <FormInput
                        id="credit"
                        type="text"
                        value={credit}
                        onChange={(e)=>setCredit(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Status</FormLabel>
                    <FormSelect 
                        value={statusId} 
                        onChange={(e)=>setStatusId(e.target.value)} 
                        id="statusId"
                        >
                        <option></option>
                        {statuses.map((status, index)=>(
                            <option key={index} value={status.id}>{status.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button type='reset' onClick={()=>{navigate('/dashboard')}} variant="secondary" className="w-48 ml-2">
                        Cancel
                    </Button>
                    <Button type='submit' variant="primary" className="w-48 ml-2">
                        Submit
                    </Button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form