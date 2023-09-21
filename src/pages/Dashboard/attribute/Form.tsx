import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SubmitPengajuan, reset } from '../../../stores/features/pengajuanSlice';

import LoadingIcon from "../../../base-components/LoadingIcon";
import Notification from "../../../base-components/Notification";
import { NotificationElement } from "../../../base-components/Notification";

import Button from "../../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Litepicker from "../../../base-components/Litepicker";
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const {users, typePengajuan, statuses, coa, costCenter, annaliticAccount} = props;

    const [userId, setUserId] = useState<string>("");
    const [tanggal, setTanggal] = useState<string>("");
    const [expense, setExpense] = useState<string>("");
    const [advance, setAdvance] = useState<string>("");
    const [coaId, setCoaId] = useState<string>("");
    const [costCenterId, setCostCenterId] = useState<string>("");
    const [annaliticAccountId, setAnnaliticAccountId] = useState<string>("");
    const [typePengajuanId, setTypePengajuanId] = useState<string>("");
    const [debit, setDebit] = useState<string>("");
    const [credit, setCredit] = useState<string>("");
    const [reference, setReference] = useState<string>("");
    const [keterangan, setKeterangan] = useState<string>("");
    const [statusId, setStatusId] = useState<string>("");
    const [msg, setMsg] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
        (state) => state.pengajuanReducer
    );

      // Basic non sticky notification
    const basicNonStickyNotification = useRef<NotificationElement>();

    useEffect(()=>{
        if(isPengajuanSuccess && messagePengajuan){
            basicNonStickyNotification.current?.showToast();
            setMsg(messagePengajuan.msg);
            resetValue();
            dispatch(reset());
            navigate('/dashboard');
        }
    },[isPengajuanSuccess, messagePengajuan])

    const resetValue = () => {
        setUserId("");
        setTanggal("");
        setExpense("");
        setAdvance("");
        setCoaId("");
        setCostCenterId("");
        setAnnaliticAccountId("");
        setTypePengajuanId("");
        setDebit("");
        setCredit("");
        setReference("");
        setKeterangan("");
        setStatusId("");
    }

    const submitPengajuan = (e) => {
        e.preventDefault();
        dispatch(SubmitPengajuan({
            userId, 
            tanggal, 
            expense, 
            advance, 
            coaId, 
            costCenterId,
            annaliticAccountId,
            debit,
            credit,
            reference,
            keterangan,
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
        {/* BEGIN: Basic Non Sticky Notification Content */}
            <Notification
              getRef={(el) => {
                basicNonStickyNotification.current = el;
              }}
              options={{
                duration: 3000,
              }}
              className="flex flex-col sm:flex-row"
            >
              <div className="font-medium capitalize">
                {msg}
              </div>
            </Notification>
        {/* END: Basic Non Sticky Notification Content */}
        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <form onSubmit={submitPengajuan}>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-1">User</FormLabel>
                    <FormSelect 
                        value={userId} 
                        onChange={(e)=>setUserId(e.target.value)} 
                        id="input-wizard-6"
                        required
                        >
                        <option></option>
                        {users.map((user, index)=>(
                            <option key={index} value={user.id}>{user.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Type Pengajuan</FormLabel>
                    <FormSelect 
                        value={typePengajuanId}
                        required 
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
                    <FormLabel htmlFor="input-wizard-2">Tanggal</FormLabel>
                    <Litepicker 
                        value={tanggal}
                        onChange={setTanggal}
                        required
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
                    <FormLabel htmlFor="input-wizard-5">CoA</FormLabel>
                    <FormSelect 
                        value={coaId}
                        required 
                        onChange={(e)=>setCoaId(e.target.value)} 
                        id="coaId"
                        >
                        <option></option>
                        {coa.map((data, index)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Cost Center</FormLabel>
                    <FormSelect 
                        value={costCenterId}
                        required 
                        onChange={(e)=>setCostCenterId(e.target.value)} 
                        id="costCenter"
                        >
                        <option></option>
                        {costCenter.map((data, index)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Analitic Account</FormLabel>
                    <FormSelect 
                        value={annaliticAccountId}
                        required 
                        onChange={(e)=>setAnnaliticAccountId(e.target.value)} 
                        id="analiticAccountId"
                        >
                        <option></option>
                        {annaliticAccount.map((data, index)=>(
                            <option key={index} value={data.id}>{data.name}</option>
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
                    <FormLabel htmlFor="input-wizard-6">Reference</FormLabel>
                    <FormInput
                        id="reference"
                        type="text"
                        value={reference}
                        onChange={(e)=>setReference(e.target.value)}
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
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">Status</FormLabel>
                    <FormSelect 
                        value={statusId} 
                        onChange={(e)=>setStatusId(e.target.value)} 
                        required
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
                        Cancel or Back
                    </Button>
                    <Button type='submit' variant="primary" className="w-48 ml-2">
                    {isPengajuanLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Submit'}
                    </Button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form