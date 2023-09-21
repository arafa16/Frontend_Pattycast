import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormView from './attribute/FormView';
import Judul from './attribute/Judul';
import axios from 'axios';
import ButtonAction from './attribute/ButtonAction';
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {
    const {id} = useParams();
    const [dataUser, setDataUser] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getDataUser();
    },[id]);

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

    return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={`Data User`}
                />
                <ButtonAction 
                    clickBack={clickBack}
                />
                <FormView 
                    dataUser={dataUser}
                />
            </div>
        </div>
    </div>
    )
}

export default ViewUser