import React from 'react'
import FormUpdate from './attribute/FormUpdate'
import Judul from './attribute/Judul'

const UpdateUser = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={`Data User`}
                />
                <FormUpdate />
            </div>
        </div>
    </div>
  )
}

export default UpdateUser