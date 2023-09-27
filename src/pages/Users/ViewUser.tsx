import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonAction from './attribute/ButtonAction';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, resetDataUsers } from '../../stores/features/userSlice';
import ResetPassword from './attribute/ResetPassword';

const ViewUser = () => {
    const {id} = useParams();
    const [dataUser, setDataUser] = useState([]);
    const [viewModal, setViewModal] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {dataUsers, isDataUsersSuccess, isDataUsersError, isDataUsersLoading, messageDataUsers} = useSelector((state) => state.usersReducer);

    useEffect(()=>{
        getDataUser();
    },[id]);

    useEffect(()=>{
        if(isDataUsersSuccess && messageDataUsers){
            navigate('/dataUser');
            dispatch(resetDataUsers());
        }
    },[isDataUsersSuccess, messageDataUsers]);

    const getDataUser = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/users/"+id,{
          withCredentials: true, // Now this is was the missing piece in the client side 
        });
        setDataUser(response.data);
        console.log(response.data, 'data user')
    }

    const clickBack = () => {
        navigate('/dataUser');
    }

    const clickUpdate = () => {
        navigate(`/updateUser/${id}`);
    }


    const clickDelete = async() => {
        dispatch(deleteUser({id}));
    }

    return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={`Data User`}
                />
                <ButtonAction 
                    clickBack={clickBack}
                    clickDelete={clickDelete}
                    clickUpdate={clickUpdate}
                    setViewModal={setViewModal}
                />
                <FormView 
                    dataUser={dataUser}
                />
                <ResetPassword 
                    viewModal={viewModal} 
                    setViewModal={setViewModal}
                    id={id}
                />
            </div>
        </div>
    </div>
    )
}

export default ViewUser