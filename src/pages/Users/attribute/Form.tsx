import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SubmitPengajuan, reset } from '../../../stores/features/pengajuanSlice';

import LoadingIcon from "../../../base-components/LoadingIcon";
import Notification from "../../../base-components/Notification";
import { NotificationElement } from "../../../base-components/Notification";
import { PendaftaranUser, resetDataUser } from '../../../stores/features/daftarSlice';

import Button from "../../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Litepicker from "../../../base-components/Litepicker";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(0);
    const [isActive, setIsActive] = useState(0);
    const [msg, setMsg] = useState('');

    const {dataUser, isDataUserSuccess, isDataUserError, isDataUserLoading, messageDataUser} = useSelector(
        (state : any) => state.daftar
    )

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Basic non sticky notification
    const notifCreateUser = useRef<NotificationElement>();

    useEffect(()=>{
        console.log(messageDataUser, 'msg data user');
        if(isDataUserSuccess && messageDataUser){
            notifCreateUser.current?.showToast();
            setMsg(messageDataUser.msg);
            navigate('/dataUser');
            dispatch(resetDataUser());
        }
    },[isDataUserSuccess, messageDataUser]);

    const submitPendaftaran = (e : any) => {
        e.preventDefault();
        dispatch(PendaftaranUser({
            name,
            email,
            password,
            isAdmin,
            isActive,
            id: undefined
        }));
    };

  return (
    <>
        {/* BEGIN: Basic Non Sticky Notification Content */}
            <Notification
              getRef={(el) => {
                notifCreateUser.current = el;
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
        {/* BEGIN: Wizard Layout */}
        <div className="py-10 intro-y sm:py-10">
            <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                <form onSubmit={submitPendaftaran}>
                    <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-6">Nama</FormLabel>
                            <FormInput
                                id="name"
                                type="text"
                                value={name}
                                required
                                onChange={(e : any)=>setName(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-6">Email</FormLabel>
                            <FormInput
                                id="email"
                                type="text"
                                value={email}
                                required
                                onChange={(e : any)=>setEmail(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-6">Password</FormLabel>
                            <FormInput
                                id="password"
                                type="password"
                                value={password}
                                required
                                onChange={(e : any)=>setPassword(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-5">is Admin ?</FormLabel>
                            <FormSelect 
                                value={isAdmin}
                                required 
                                onChange={(e : any)=>setIsAdmin(e.target.value)} 
                                id="isAdmin"
                                >
                                <option></option>
                                <option value='0'>no</option>
                                <option value='1'>yes</option>
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-5">is Active ?</FormLabel>
                            <FormSelect 
                                value={isActive}
                                required 
                                onChange={(e : any)=>setIsActive(e.target.value)} 
                                id="isActive"
                                >
                                <option></option>
                                <option value='0'>no</option>
                                <option value='1'>yes</option>
                            </FormSelect>
                        </div>
                        <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                            <Button type='reset' onClick={()=>{navigate('/pengajuan')}} variant="secondary" className="w-48 ml-2">
                                Cancel or Back
                            </Button>
                            <Button type='submit' variant="primary" className="w-48 ml-2">
                                {isDataUserLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Create User'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Form