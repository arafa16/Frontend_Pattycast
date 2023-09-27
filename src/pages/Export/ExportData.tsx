import React, { useEffect, useState } from 'react'
import FromExport from './attributes/FromExport'
import Judul from './attributes/Judul'
import axios from 'axios'

const ExportData = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(()=>{
    getStatuses();
  },[])

  const getStatuses = async() => {
    const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/status/select");
    setStatuses(response.data);
  }

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                  textJudul="Export Data"
                />
                <FromExport 
                  statuses={statuses}
                />
            </div>
        </div>
    </div>
  )
}

export default ExportData