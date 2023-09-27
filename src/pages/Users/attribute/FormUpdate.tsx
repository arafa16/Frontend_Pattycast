import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import LoadingIcon from "../../../base-components/LoadingIcon";
import Notification from "../../../base-components/Notification";
import { NotificationElement } from "../../../base-components/Notification";
import { PendaftaranUser, resetDataUser } from '../../../stores/features/daftarSlice';
import { getUserById, resetDataUsers, UpdateUser } from '../../../stores/features/userSlice';

import Button from "../../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import { useNavigate, useParams } from 'react-router-dom';

const FormUpdate = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(0);
    const [isActive, setIsActive] = useState(0);
    const [msg, setMsg] = useState('');

    const {dataUsers, isDataUsersSuccess, isDataUsersError, isDataUsersLoading, messageDataUsers} = useSelector(
        (state) => state.usersReducer
    )

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Basic non sticky notification
    const notifCreateUser = useRef<NotificationElement>();

    useEffect(()=>{
        getDataUser();
    },[id])

    useEffect(()=>{
        setValue();
    },[dataUsers]);

    const getDataUser = () => {
        dispatch(getUserById({id}));
    }

    console.log(dataUsers, 'data users')

    const setValue = () => {
        setName(dataUsers && dataUsers.name);
        setEmail(dataUsers && dataUsers.email);
        setIsAdmin(dataUsers && dataUsers.isAdmin ? 1 : 0)
        setIsActive(dataUsers && dataUsers.isActive ? 1 : 0)
    }

    useEffect(()=>{
        if(isDataUsersSuccess && messageDataUsers){
            notifCreateUser.current?.showToast();
            setMsg(messageDataUsers.msg);
            dispatch(resetDataUsers());
            navigate(`/viewUser/${id}`);
        }

    },[isDataUsersSuccess, messageDataUsers]);

    const submitUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateUser({
            id,
            name,
            email,
            isAdmin,
            isActive
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
                <form onSubmit={submitUpdate}>
                    <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-6">Nama</FormLabel>
                            <FormInput
                                id="name"
                                type="text"
                                defaultValue={name}
                                required
                                onChange={(e)=>setName(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-6">Email</FormLabel>
                            <FormInput
                                id="email"
                                type="text"
                                defaultValue={email}
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-6">
                            <FormLabel htmlFor="input-wizard-5">is Admin ?</FormLabel>
                            <FormSelect 
                                value={isAdmin}
                                required 
                                onChange={(e)=>setIsAdmin(e.target.value)} 
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
                                onChange={(e)=>setIsActive(e.target.value)} 
                                id="isActive"
                                >
                                <option></option>
                                <option value='0'>no</option>
                                <option value='1'>yes</option>
                            </FormSelect>
                        </div>
                        <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                            <Button type='reset' variant="danger" onClick={()=>navigate(`/viewUser/${id}`)} className="w-48 ml-2">
                                Cancel
                            </Button>
                            <Button type='submit' variant="primary" className="w-48 ml-2">
                                {isDataUsersLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Update User'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormUpdate