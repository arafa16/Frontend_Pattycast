import React from 'react'
import FormCoa from './attribute/FormCoa'
import Judul from './attribute/Judul'

const FormCreate = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Coa'}
                />
                <FormCoa />
            </div>
        </div>
    </div>
  )
}

export default FormCreate