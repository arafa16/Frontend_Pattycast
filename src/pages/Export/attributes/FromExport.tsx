import React, { useState } from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import Litepicker from '../../../base-components/Litepicker'
import axios from 'axios'
import dayjs from 'dayjs'

const FromExport = (props : any) => {
    const {statuses} = props;
    const [statusId, setStatusId] = useState("");

    const getFile = async() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/export/`+statusId,{
            responseType: 'arraybuffer',
            headers: {'Content-Type': 'blob'},
        }).then((response : any) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            const fileName = dayjs(Date.now()).format("YYYY-MM-DD")+'_pattycash';
            link.setAttribute('download', `${fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            setStatusId("");
        });
    }

  return (
    <div className="py-10 intro-y sm:py-10">
        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-5">Status</FormLabel>
                        <FormSelect 
                            value={statusId} 
                            onChange={(e)=>setStatusId(e.target.value)} 
                            required
                            id="statusId"
                            >
                            <option></option>
                            {statuses.map((status  : any, index  : any)=>(
                                <option key={index} value={status.id}>{status.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="flex items-center justify-center col-span-6 mt-5 intro-y sm:justify-end">
                        <Button 
                            onClick={()=>getFile()}
                            variant="primary" 
                            className="w-48 ml-2">
                            Export Now
                        </Button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FromExport