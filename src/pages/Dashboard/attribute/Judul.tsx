import React from 'react'

const Judul = (props) => {
    const {textJudul} = props;
  return (
    <>
        <div className="px-5 mb-20">
            <div className="text-lg font-medium text-center">
                {textJudul}
            </div>
        </div>
    </>
  )
}

export default Judul