import React from "react";
import Lucide from "../../../base-components/Lucide";
import Button from "../../../base-components/Button";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import _ from "lodash";

const Data = (props) => {
    const {statusPengajuans, clickStatus, status, allData, nextPage, prevPage, page, allPage} = props;
    const navigate = useNavigate();
    return (
        <>
            {/* BEGIN: Sales Report */}
            <div className="grid grid-cols-12 mt-5 box mb-8">
                {/* BEGIN: Inbox Side Menu */}
                <div className="col-span-12 p-5 border-b xl:col-span-3 2xl:col-span-2 xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 rounded-l-md">
                <div>
                    <div
                        className={`flex items-center px-3 py-2 font-medium rounded-md cursor-pointer ${status === '' ? "text-white bg-primary" : "hover:text-white hover:bg-primary" } dark:bg-darkmode-800`}
                        onClick={()=>clickStatus('')}
                    >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        All
                        {/* {loading ? <LoadingIcon icon="ball-triangle" color="white" className="w-3 h-5 mx-5" /> : ''} */}
                    </div>
                    <div
                        className={`flex items-center px-3 py-2 font-medium rounded-md cursor-pointer ${status === 1 ? "text-white bg-primary" : "hover:text-white hover:bg-primary" } dark:bg-darkmode-800`}
                        onClick={()=>clickStatus(1)}
                    >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        active
                        {/* {loading ? <LoadingIcon icon="ball-triangle" color="white" className="w-3 h-5 mx-5" /> : ''} */}
                    </div>
                    <div
                        className={`flex items-center px-3 py-2 font-medium rounded-md cursor-pointer ${status === 0 ? "text-white bg-primary" : "hover:text-white hover:bg-primary" } dark:bg-darkmode-800`}
                        onClick={()=>clickStatus(0)}
                    >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        non active
                        {/* {loading ? <LoadingIcon icon="ball-triangle" color="white" className="w-3 h-5 mx-5" /> : ''} */}
                    </div>
                    
                </div>
                </div>
                {/* END: Inbox Side Menu */}
                {/* BEGIN: Inbox Content */}
                <div className="col-span-12 xl:col-span-9 2xl:col-span-10">
                <div className="flex flex-wrap items-center justify-between w-full px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
                    <Button 
                        onClick={()=>{navigate('/formStatusPengajuan')}} 
                        variant="outline-secondary" 
                        className=" w-1/4">
                    <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Create New
                    </Button>
                </div>
                <div className="flex items-end flex-col-reverse px-5 pb-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
                    <div className="flex items-center sm:ml-auto">
                        <div className="text-xs">{page} of {allPage} page</div>
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
                    {statusPengajuans.rows && statusPengajuans.rows.map((data, index) => (
                    <div 
                        key={index} 
                        className="intro-y"
                        onClick={()=>navigate(`/viewStatusPengajuan/${data.uuid}`)}
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
                            <div className="truncate w-[50%] sm:w-[50%]">
                                {data.name}
                            </div>
                            <div className="truncate w-[30%] sm:w-[20%]">
                                {data.code}
                            </div>
                            <div className="truncate w-0 sm:w-[20%] hidden sm:block">
                                {data.isActive ? 'active' : 'non active'}
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

export default Data;