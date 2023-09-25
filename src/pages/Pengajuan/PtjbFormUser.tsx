import React from 'react'
import FormPtjb from './attribute/FormPtjb'
import Judul from './attribute/Judul'

const PtjbFormUser = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul="Form PTJB"
                />
                <FormPtjb />
            </div>
        </div>
    </div>
  )
}

export default PtjbFormUser