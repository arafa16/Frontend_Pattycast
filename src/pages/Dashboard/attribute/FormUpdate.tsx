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

const FormUpdate = (props) => {
    const {users, dataPengajuan, typePengajuan, statuses, coa, costCenter, annaliticAccount} = props;
    const {id} = useParams();

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
    const [msgUpdate, setMsgUpdate] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {pengajuans, isPengajuanError, isPengajuanSuccess, isPengajuanLoading, messagePengajuan } = useSelector(
        (state) => state.pengajuanReducer
    );

      // Basic non sticky notification
    const notifUpdate = useRef<NotificationElement>();

    useEffect(()=>{
        setValue();
    },[dataPengajuan]);

    useEffect(()=>{
        console.log(messagePengajuan.msg, 'message');

        if(isPengajuanSuccess && messagePengajuan){
            notifUpdate.current?.showToast();
            setMsgUpdate(messagePengajuan.msg);
            resetValue();
            dispatch(reset());
            navigate(`/formAdminView/${id}`);
        }
    },[isPengajuanSuccess, messagePengajuan])

    const setValue = () => {
        setUserId(dataPengajuan.userId);
        setTanggal(dayjs(dataPengajuan.tanggal).format("YYYY-MM-DD"));
        setExpense(dataPengajuan.expense);
        setAdvance(dataPengajuan.advance);
        setCoaId(dataPengajuan.coaId);
        setCostCenterId(dataPengajuan.costCenterId);
        setAnnaliticAccountId(dataPengajuan.annaliticAccountId);
        setTypePengajuanId(dataPengajuan.typePengajuanId);
        setDebit(dataPengajuan.debit);
        setCredit(dataPengajuan.credit);
        setReference(dataPengajuan.reference);
        setKeterangan(dataPengajuan.keterangan);
        setStatusId(dataPengajuan.status && dataPengajuan.status.code);
    }

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
        dispatch(UpdatePengajuan({
            id,
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
                Petty Cash | {dataPengajuan.id}
            </div>
        </div>
        {/* BEGIN: Basic Non Sticky Notification Content */}
            <Notification
              getRef={(el) => {
                notifUpdate.current = el;
              }}
              options={{
                duration: 3000,
              }}
              className="flex flex-col sm:flex-row"
            >
              <div className="font-medium capitalize">
                {msgUpdate}
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
                        defaultValue={expense}
                        onChange={(e)=>setExpense(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">Advance</FormLabel>
                    <FormInput
                        id="advance"
                        type="text"
                        defaultValue={advance}
                        onChange={(e)=>setAdvance(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">CoA {coaId}</FormLabel>
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
                            <option key={index} value={status.code}>{status.name}</option>
                        ))}
                    </FormSelect>
                </div>
                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button type='reset' onClick={()=>{navigate(`/formAdminView/${id}`)}} variant="secondary" className="w-48 ml-2">
                        Cancel
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

export default FormUpdate