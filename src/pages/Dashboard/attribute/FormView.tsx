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

const FormView = (props) => {
    const {dataPengajuan} = props;

  return (
    <>
        {/* END: Basic Non Sticky Notification Content */}
        <div className="px-5 pt-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Nama</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan.user && dataPengajuan.user.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Type Pengajuan</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan.type_pengajuan && dataPengajuan.type_pengajuan.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-2" className=' w-1/3'>Tanggal</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.tanggal}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">Expense</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.expense}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">Advance</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.advance}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">CoA</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan.coa && dataPengajuan.coa.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Cost Center</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan.cost_center && dataPengajuan.cost_center.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Analitic Account</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan.annalitic_account && dataPengajuan.annalitic_account.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Debit</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.debit}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Credit</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.credit}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Reference</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.reference}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-6">Keterangan</FormLabel>
                    <div className='w-2/3'>: {dataPengajuan && dataPengajuan.keterangan}</div>
                </div>
            </div>
        </div>
    </>
        
  )
}

export default FormView