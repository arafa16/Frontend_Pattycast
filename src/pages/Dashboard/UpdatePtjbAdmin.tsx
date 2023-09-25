import React, { useEffect, useState } from 'react'
import ViewPtjb from './attribute/ViewPtjb'
import Judul from './attribute/Judul'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ButtonPtjb from './attribute/ButtonPtjb'
import UpdatePtjb from './attribute/UpdatePtjb'

const UpdatePtjbAdmin = () => {
  const {id} = useParams();
  const [ptjb, setPtjb] = useState([])

  useEffect(()=>{
    getPtjb();
  },[])

  const getPtjb = async() => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/ptjb/${id}`);
    setPtjb(response.data);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
              <Judul 
                textJudul={`PTJB | ${ptjb.id}`}
              />
              <UpdatePtjb 
                ptjb={ptjb}
              />
            </div>
        </div>
    </div>
  )
}

export default UpdatePtjbAdmin