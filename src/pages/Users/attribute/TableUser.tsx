import React from 'react'
import Button from '../../../base-components/Button';
import { FormInput } from '../../../base-components/Form';
import Lucide from '../../../base-components/Lucide';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const TableUser = (props : any) => {
    const {users, changeStatus, status, limit, page, allPage, nextPage, prevPage, search, setSearch, allData} = props;
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
                        onClick={()=>changeStatus('')}
                        >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        All
                    </div>
                    <div
                        onClick={()=>changeStatus(1)}
                        className={`flex items-center px-3 py-2 mt-2 cursor-pointer rounded-md  ${status === 1  ? "text-white bg-primary" : "hover:text-white hover:bg-primary" } dark:bg-darkmode-800`}
                        >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        Active
                    </div>
                    <div
                        onClick={()=>changeStatus(0)}
                        className={`flex items-center px-3 py-2 mt-2 cursor-pointer rounded-md  ${status === 0  ? "text-white bg-primary" : "hover:text-white hover:bg-primary" } dark:bg-darkmode-800`}
                        >
                        <Lucide icon="Star" className="w-4 h-4 mr-2" /> 
                        Non Active
                    </div>
                    
                </div>
                </div>
                {/* END: Inbox Side Menu */}
                {/* BEGIN: Inbox Content */}
                <div className="col-span-12 xl:col-span-9 2xl:col-span-10">
                <div className="flex flex-wrap items-center justify-between w-full px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
                    <Button 
                        onClick={()=>{navigate('/createUser')}} 
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
                    </div>
                </div>
                <div className="overflow-x-auto sm:overflow-x-visible">
                    {users && users.map((data : any, index : any) => (
                    <div 
                        key={index} 
                        className="intro-y"
                        onClick={()=>navigate(`/viewUser/${data.uuid}`)}
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
                            <div className="truncate w-[50%] sm:w-[20%]">
                                {data.name}
                            </div>
                            <div className="truncate w-[30%] sm:w-[40%]">
                                {data.email}
                            </div>
                            <div className="truncate w-0 sm:w-[20%] hidden sm:block">
                                {`${data.isAdmin ? 'admin' : 'user'}`}
                            </div>
                            <div className="truncate w-[20%] sm:w-[20%] hidden sm:block">
                                {`${data.isActive ? 'active' : 'non active'}`}
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

export default TableUser