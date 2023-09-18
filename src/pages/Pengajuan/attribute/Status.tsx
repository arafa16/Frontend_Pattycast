import React from 'react'
import Button from "../../../base-components/Button";

const Status = (props) => {
    const {statuses, status} = props;
  return (
    <>
        <div className="relative mt-20 mb-10 before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
            {/* <div className="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                <Button variant="primary" className="w-7 h-7 rounded-full">
                1
                </Button>
                <div className="ml-3 lg:w-32 lg:mt-3 lg:mx-auto">
                Draft
                </div>
            </div> */}
            {statuses.map((data, index)=>(
                <div 
                    className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
                    key={index}
                >
                    <Button
                        
                        variant={`${status !== data.code ? "secondary" : "primary"}`}
                        className={` ${status !== data.code 
                                        ? 'w-7 h-7 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'
                                        : 'w-7 h-7 rounded-full'}
                                    `}
                    >
                        {data.code}
                    </Button>
                    <div className="ml-3 lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                    {data.name}
                    </div>
                </div>
            ))}
            
        </div>
    </>
  )
}

export default Status