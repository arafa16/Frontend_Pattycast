import React from 'react'
import { FormLabel } from '../../../base-components/Form'

const FormView = (props) => {
    const {dataCostCenters} = props;

    console.log(dataCostCenters, 'data costcenter')

    return (
        <div className="px-5 pt-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-4">CoA</FormLabel>
                    <div className='w-2/3'>: {dataCostCenters && dataCostCenters.name}</div>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Code</FormLabel>
                    <div className='w-2/3'>: {dataCostCenters && dataCostCenters.code}</div>
                </div>

                <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                    <FormLabel htmlFor="input-wizard-5">Code</FormLabel>
                    <div className='w-2/3'>: {dataCostCenters && dataCostCenters.isActive ? 'active' : 'non active'}</div>
                </div>
            </div>
        </div>
    )
}

export default FormView