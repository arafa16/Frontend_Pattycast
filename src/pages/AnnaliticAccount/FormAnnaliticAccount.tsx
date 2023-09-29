import React from 'react'
import Form from './attribute/Form'
import Judul from './attribute/Judul'

const FormAnnaliticAccount = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Form Annalitic Account'}
                />
                <Form />
            </div>
        </div>
    </div>
  )
}

export default FormAnnaliticAccount