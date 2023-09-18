import React from 'react'
import Button from "../../../base-components/Button";
import { useNavigate } from "react-router-dom";
import { FormCheck, FormInput } from "../../../base-components/Form";
import Lucide from "../../../base-components/Lucide";
import clsx from "clsx";
import dayjs from 'dayjs';

const Data = (props) => {
    const {dataPengajuans, page, limit, allPage, allData, nextPage, prevPage, changeSearch, search} = props;
    const navigate = useNavigate();

    return (
        <>
            {/* BEGIN: Sales Report */}
            <div className="grid grid-cols-12 mt-5 box mb-8 py-4">
                {/* BEGIN: Inbox Content */}
                <div className="col-span-12 xl:col-span-12 2xl:col-span-12 px-4">
                    <div className="flex flex-wrap items-center justify-between w-full px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
                        <Button 
                            onClick={()=>{navigate('/formUser')}} 
                            variant="outline-secondary" 
                            className=" w-1/4">
                        <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Create New
                        </Button>
                        <div className="w-2/4 flex">
                            <div className="relative w-2/3 mx-2">
                                <FormInput
                                    type="text"
                                    className="pl-10"
                                    value={search}
                                    onChange={(e)=>changeSearch(e.target.value)}
                                    placeholder="Search By ID"
                                />
                                <Lucide
                                    icon="Search"
                                    className="absolute inset-y-0 left-0 w-5 h-5 my-auto ml-3 text-slate-400"
                                />
                            </div>
                            <Button 
                                variant="outline-secondary" 
                                className={`w-1/3 ${false ? 'hidden' : ''}`}
                                onClick={()=>changeSearch("")}
                            >
                                <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Clear
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-end flex-col-reverse px-5 pb-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                        <div className="flex items-center sm:ml-auto">
                            <div className="text-xs">
                                {page} of {allPage} page
                            </div>
                            <div
                                className="flex items-center justify-center w-5 h-5 ml-5 cursor-pointer"
                                onClick={()=>prevPage()}
                                >
                                <Lucide icon="ChevronLeft" className="w-4 h-4" />
                            </div>
                            <div
                                className="flex items-center justify-center w-5 h-5 ml-5 cursor-pointer "
                                onClick={()=>nextPage()}
                                >
                                <Lucide icon="ChevronRight" className="w-4 h-4" />
                            </div>
                            {/* <a
                                href="#"
                                className="flex items-center justify-center w-5 h-5 ml-5"
                            >
                                <Lucide icon="Settings" className="w-4 h-4" />
                            </a> */}
                        </div>
                    </div>
                    <div className="overflow-x-auto sm:overflow-x-visible">
                        {dataPengajuans && dataPengajuans.map((data, index) => (
                        <div 
                            key={index} 
                            className="intro-y"
                            onClick={()=>navigate(`/formView/${data.uuid}`)}
                        >
                            <div
                            className={clsx([
                                "transition duration-200 ease-in-out transform cursor-pointer sm:block border-b border-slate-200/60 dark:border-darkmode-400",
                                "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
                            ])}
                            >
                                <div className="flex justify-start px-5 py-3">
                                    <div className="w-[20%] sm:w-[10%]">
                                        {(index+1)+(limit*(page-1))}
                                    </div>
                                    <div className="w-[20%] sm:w-[10%]">
                                        {data.id}
                                    </div>
                                    <div className="truncate w-[50%] sm:w-[20%]">
                                        {data.user.name}
                                    </div>
                                    <div className="truncate w-[30%] sm:w-[20%]">
                                        {data.type_pengajuan.name}
                                    </div>
                                    <div className="truncate w-0 sm:w-[20%] hidden sm:block">
                                        {data.status.name}
                                    </div>
                                    <div className="truncate w-[20%] sm:w-[30%] hidden sm:block">
                                        {dayjs(data.tanggal).format('YYYY-MM-DD')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500">
                        
                        <div className="mt-2 sm:ml-auto sm:mt-0 text-xs">
                        total data: {allData}
                        </div>
                    </div>
                </div>
                {/* END: Inbox Content */}
            </div>
            {/* END: Sales Report */}
        </>
    )
}

export default Data