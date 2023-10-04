import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePengajuan, reset } from '../../../stores/features/pengajuanSlice';
import dayjs from 'dayjs';

import LoadingIcon from "../../../base-components/LoadingIcon";
import Notification from "../../../base-components/Notification";
import { NotificationElement } from "../../../base-components/Notification";

import Button from "../../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Litepicker from "../../../base-components/Litepicker";
import { useNavigate, useParams } from 'react-router-dom';

const FormUpdate = (props : any) => {
    const {users, dataPengajuan, typePengajuan, coaSelect, costCenterSelect, annaliticAccountSelect} = props;
    const {id} = useParams();

    const [tanggal, setTanggal] = useState("");
    const [coaId, setCoaId] = useState("");
    const [costCenterId, setCostCenterId] = useState("");
    const [annaliticAccountId, setAnnaliticAccountId] = useState("");
    const [typePengajuanId, setTypePengajuanId] = useState("");
    const [debit, setDebit] = useState("");
    const [credit, setCredit] = useState("");
    const [reference, setReference] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [msg, setMsg] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
        (state : any) => state.pengajuanReducer
    );

      // Basic non sticky notification
    const basicNonStickyNotification = useRef<NotificationElement>();

    useEffect(()=>{
        setValue();
    },[dataPengajuan]);

    useEffect(()=>{
        if(isPengajuanSuccess && messagePengajuan){
            basicNonStickyNotification.current?.showToast();
            setMsg(messagePengajuan.msg);
            resetValue();
            dispatch(reset());
            navigate('/pengajuan');
        }
        if(isPengajuanError && messagePengajuan){
            basicNonStickyNotification.current?.showToast();
            setMsg(messagePengajuan.msg);
            resetValue();
            dispatch(reset());
        }
    },[isPengajuanSuccess, messagePengajuan])

    const setValue = () => {
        setTanggal(dayjs(dataPengajuan.tanggal).format("YYYY-MM-DD"));
        setCoaId(dataPengajuan.coaId);
        setCostCenterId(dataPengajuan.costCenterId);
        setAnnaliticAccountId(dataPengajuan.annaliticAccountId);
        setTypePengajuanId(dataPengajuan.typePengajuanId);
        setDebit(dataPengajuan.debit);
        setCredit(dataPengajuan.credit);
        setReference(dataPengajuan.reference);
        setKeterangan(dataPengajuan.keterangan);
    }

    const resetValue = () => {
        setTanggal("");
        setCoaId("");
        setCostCenterId("");
        setAnnaliticAccountId("");
        setTypePengajuanId("");
        setDebit("");
        setCredit("");
        setReference("");
        setKeterangan("");
    }

    const submitPengajuan = (e : any) => {
        e.preventDefault();
        dispatch(UpdatePengajuan({
            id,
            tanggal,
            coaId,
            costCenterId,
            annaliticAccountId,
            debit,
            credit,
            reference,
            keterangan,
            typePengajuanId,
            expense: undefined,
            advance: undefined,
            userId: undefined,
            statusId: undefined
        }));
    }

  return (
    <>
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
                    <FormLabel htmlFor="input-wizard-4">CoA</FormLabel>
                    <FormSelect 
                        value={coaId}
                        required 
                        onChange={(e)=>setCoaId(e.target.value)} 
                        id="coaId"
                        >
                        <option></option>
                        {coaSelect.map((data : any, index: any)=>(
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
                        {costCenterSelect.map((data : any, index : any)=>(
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
                        {annaliticAccountSelect.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
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
                        {typePengajuan.map((type : any, index : any)=>(
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Debit</FormLabel>
                    <FormInput
                        id="debit"
                        type="text"
                        defaultValue={debit}
                        onChange={(e)=>setDebit(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Credit</FormLabel>
                    <FormInput
                        id="credit"
                        type="text"
                        defaultValue={credit}
                        onChange={(e)=>setCredit(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Reference</FormLabel>
                    <FormInput
                        id="reference"
                        type="text"
                        defaultValue={reference}
                        onChange={(e)=>setReference(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Keterangan</FormLabel>
                    <FormInput
                        id="keterangan"
                        type="text"
                        defaultValue={keterangan}
                        onChange={(e)=>setKeterangan(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button type='reset' onClick={()=>{navigate(`/formView/${id}`)}} variant="secondary" className="w-48 ml-2">
                        Cancel
                    </Button>
                    <Button type='submit' variant="primary" className="w-48 ml-2">
                    {isPengajuanLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Submit'}
                    </Button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default FormUpdate