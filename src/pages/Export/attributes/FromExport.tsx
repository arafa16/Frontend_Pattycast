import React, { useState } from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import Litepicker from '../../../base-components/Litepicker'
import axios from 'axios'

const FromExport = (props) => {
    const {statuses} = props;
    const [statusId, setStatusId] = useState();

    const getFile = async() => {
        axios.get(`http://localhost:5000/export`,{
            responseType: 'arraybuffer',
            headers: {'Content-Type': 'blob'},
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${'paijo'}.xlsx`);
            document.body.appendChild(link);
            link.click();
        });
    }

    const downloadFile = async () => {
        const resp = await getFile();
    
        const link = document.createElement('a');
        const fileName = 'file.xlsx';
        link.setAttribute('download', fileName);
        link.href = URL.createObjectURL(new Blob([resp]));
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    

  return (
    <div className="py-10 intro-y sm:py-10">
        <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-5">Status {statusId}</FormLabel>
                        <FormSelect 
                            value={statusId} 
                            onChange={(e)=>setStatusId(e.target.value)} 
                            required
                            id="statusId"
                            >
                            <option></option>
                            {statuses.map((status, index)=>(
                                <option key={index} value={status.id}>{status.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="flex items-center justify-center col-span-6 mt-5 intro-y sm:justify-end">
                        <Button 
                            // type='submit' 
                            onClick={()=>getFile()}
                            variant="primary" 
                            className="w-48 ml-2">
                            {/* {isDataUserLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Create User'} */}
                            Export Now
                        </Button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FromExport