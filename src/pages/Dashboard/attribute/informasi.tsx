import Lucide from "../../../base-components/Lucide";
import Tippy from "../../../base-components/Tippy";
import Litepicker from "../../../base-components/Litepicker";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

const Informasi = () => {
    const [generalReportFilter, setGeneralReportFilter] = useState<string>();
    
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 mt-6">
                <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                    Dashboard 
                </h2>
                <div className="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
                    <Lucide
                    icon="Calendar"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
                    />
                    <Litepicker
                    value={generalReportFilter}
                    onChange={setGeneralReportFilter}
                    options={{
                        autoApply: false,
                        singleMode: false,
                        numberOfColumns: 2,
                        numberOfMonths: 2,
                        showWeekNumbers: true,
                        dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                        },
                    }}
                    className="pl-10 sm:w-56 !box"
                    />
                </div>
                </div>
                <div
                className={clsx([
                    "relative mt-12 intro-y sm:mt-4",
                    "before:content-[''] before:w-[96%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60",
                ])}
                >
                <div className="grid grid-cols-12 gap-0 py-0 divide-x divide-y box xl:py-5 xl:divide-y-0 divide-dashed divide-slate-200 dark:divide-white/5">
                    <div
                    className={clsx([
                        "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                        "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                        "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                        "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                        "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                    ])}
                    >
                    <div data-content>
                        <div className="flex">
                        <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-primary bg-primary/20 border-primary/20">
                            <Lucide
                            className="w-[1.3rem] h-[1.3rem]"
                            icon="PieChart"
                            />
                        </div>
                        <div className="ml-auto">
                            <Tippy
                            as="div"
                            className="flex text-xl items-center pl-2 cursor-pointer text-success"
                            content="5.2% Higher than last month"
                            >
                            0
                            </Tippy>
                        </div>
                        </div>
                        <div className="mt-6 text-xl font-medium leading-7">
                        Pengajuan
                        </div>
                    </div>
                    </div>
                    <div
                    className={clsx([
                        "relative py-5 xl:py-0 px-5 sm:!border-t-0 col-span-12 sm:col-span-6 xl:col-span-3",
                        "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                        "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                        "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                        "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                    ])}
                    >
                    <div data-content>
                        <div className="flex">
                        <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-pending bg-pending/20 border-pending/20">
                            <Lucide
                            className="w-[1.3rem] h-[1.3rem]"
                            icon="CreditCard"
                            />
                        </div>
                        <div className="ml-auto">
                            <Tippy
                            as="div"
                            className="flex text-xl items-center pl-2 cursor-pointer text-danger"
                            content="2% Lower than last month"
                            >
                            0
                            </Tippy>
                        </div>
                        </div>
                        <div className="mt-6 text-xl font-medium leading-7">
                        Proses
                        </div>
                    </div>
                    </div>
                    <div
                    className={clsx([
                        "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                        "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                        "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                        "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                        "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                    ])}
                    >
                    <div data-content>
                        <div className="flex">
                        <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-warning bg-warning/20 border-warning/20">
                            <Lucide
                            className="w-[1.3rem] h-[1.3rem]"
                            icon="ShoppingBag"
                            />
                        </div>
                        <div className="ml-auto">
                            <Tippy
                            as="div"
                            className="flex text-xl items-center pl-2 cursor-pointer text-success"
                            content="4.1% Higher than last month"
                            >
                            0
                            </Tippy>
                        </div>
                        </div>
                        <div className="mt-6 text-xl font-medium leading-7">
                        Selesai
                        </div>
                    </div>
                    </div>
                    <div
                    className={clsx([
                        "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
                        "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
                        "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
                        "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
                        "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
                    ])}
                    >
                    <div data-content>
                        <div className="flex">
                        <div className="flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem] text-success bg-success/20 border-success/20">
                            <Lucide
                            className="w-[1.3rem] h-[1.3rem]"
                            icon="HardDrive"
                            />
                        </div>
                        <div className="ml-auto">
                            <Tippy
                            as="div"
                            className="flex text-xl items-center pl-2 cursor-pointer text-danger"
                            content="1% Lower than last month"
                            >
                            0
                            </Tippy>
                        </div>
                        </div>
                        <div className="mt-6 text-xl font-medium leading-7">
                        All
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* END: General Report */}
            </div>
        </>
    )
}

export default Informasi