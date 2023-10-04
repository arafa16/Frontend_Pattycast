import React, { useState } from 'react'
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const DataPtjb = (props : any) => {
    const {dataPtjb} = props;
    const jmlData = dataPtjb && dataPtjb.length;
    const navigate = useNavigate();

    const clickView = (id : any) => {
        navigate(`/viewPtjbAdmin/${id}`);
    }

    return (
        <div className={`${jmlData > 0  ? '' : 'hidden'}`}>
            <div className={`px-5 pt-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400`}>
                <div className="text-lg font-medium text-center mb-10">
                    Data PTJB
                </div>
                <div className="overflow-x-auto sm:overflow-x-visible">
                    {dataPtjb && dataPtjb.map((data : any, index : any) => (
                    <div 
                        key={index} 
                        className="intro-y"
                        onClick={()=>clickView(data.uuid)}
                    >
                        <div
                        className={clsx([
                            "transition duration-200 ease-in-out transform cursor-pointer sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                            "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                        ])}
                        >
                            <div className="flex justify-start px-5 py-3">
                                <div className="w-[20%] sm:w-[10%]">
                                    {index+1}
                                </div>
                                <div className="w-[20%] sm:w-[10%]">
                                    {data.id}
                                </div>
                                <div className="truncate w-[50%] sm:w-[30%]">
                                    {data.nominal}
                                </div>
                                <div className="truncate w-[30%] sm:w-[50%]">
                                    {data.keterangan}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default DataPtjb;