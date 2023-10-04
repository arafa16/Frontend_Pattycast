import React from 'react'
import { FormLabel } from '../../../base-components/Form'

const FormView = (props : any) => {
    const {dataUser} = props;

    return (
        <>
            <div className="px-5 pt-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                        <FormLabel htmlFor="input-wizard-2" className=' w-1/3'>Nama</FormLabel>
                        <div className='w-2/3'>: {dataUser && dataUser.name}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                        <FormLabel htmlFor="input-wizard-4">Email</FormLabel>
                        <div className='w-2/3'>: {dataUser && dataUser.email}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                        <FormLabel htmlFor="input-wizard-5">is Admin</FormLabel>
                        <div className='w-2/3'>: {dataUser && dataUser.isAdmin ? 'yes' : 'no'}</div>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6 flex justify-between">
                        <FormLabel htmlFor="input-wizard-5">is Active</FormLabel>
                        <div className='w-2/3'>: {dataUser && dataUser.isActive ? 'yes' : 'no'}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormView