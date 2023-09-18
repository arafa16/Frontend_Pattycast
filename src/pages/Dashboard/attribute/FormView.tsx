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
    const {dataPengajuan} = props;

    const [tanggal, setTanggal] = useState<string>("");
    const [coa, setCoa] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [costCenter, setCostCenter] = useState<string>("");
    const [expense, setExpense] = useState<string>("");
    const [advance, setAdvance] = useState<string>("");
    const [analiticAccount, setAnaliticAccount] = useState<string>("");
    const [typePengajuan, setTypePengajuan] = useState<string>("");
    const [debit, setDebit] = useState<string>("");
    const [credit, setCredit] = useState<string>("");
    const [reference, setReference] = useState<string>("");
    const [keterangan, setKeterangan] = useState<string>("");
    const [msg, setMsg] = useState("");

      // Basic non sticky notification
    const basicNonStickyNotification = useRef<NotificationElement>();

    useEffect(()=>{
        setValue();
    },[dataPengajuan]);

    const setValue = () => {
        setName(dataPengajuan.user && dataPengajuan.user.name);
        setTanggal(dayjs(dataPengajuan.tanggal).format("YYYY-MM-DD"));
        setExpense(dataPengajuan.expense);
        setAdvance(dataPengajuan.advance);
        setCoa(dataPengajuan.coa);
        setCostCenter(dataPengajuan.costCenter);
        setAnaliticAccount(dataPengajuan.analiticAccount);
        setTypePengajuan(dataPengajuan.type_pengajuan && dataPengajuan.type_pengajuan.name);
        setDebit(dataPengajuan.debit);
        setCredit(dataPengajuan.credit);
        setReference(dataPengajuan.reference);
        setKeterangan(dataPengajuan.keterangan);
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
        <div className="px-5 pt-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Nama</FormLabel>
                    <div className='w-2/3'>: {name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Type Pengajuan</FormLabel>
                    <div className='w-2/3'>: {typePengajuan}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-2" className=' w-1/3'>Tanggal</FormLabel>
                    <div className='w-2/3'>: {tanggal}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">Expense</FormLabel>
                    <div className='w-2/3'>: {expense}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">Advance</FormLabel>
                    <div className='w-2/3'>: {advance}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">CoA</FormLabel>
                    <div className='w-2/3'>: {coa}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Cost Center</FormLabel>
                    <div className='w-2/3'>: {costCenter}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Analitic Account</FormLabel>
                    <div className='w-2/3'>: {analiticAccount}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Debit</FormLabel>
                    <div className='w-2/3'>: {debit}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Credit</FormLabel>
                    <div className='w-2/3'>: {credit}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Reference</FormLabel>
                    <div className='w-2/3'>: {reference}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Keterangan</FormLabel>
                    <div className='w-2/3'>: {keterangan}</div>
                </div>
            </div>
        </div>
    </>
        
  )
}

export default FormUpdate