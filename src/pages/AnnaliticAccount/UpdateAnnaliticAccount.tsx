import Judul from './attribute/Judul'
import FormUpdate from './attribute/FormUpdate'

const UpdateAnnaliticAccount = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-12">
            <div className="py-10 mt-5 intro-y box sm:py-20">
                <Judul 
                    textJudul={'Update Cost Center'}
                />
                <FormUpdate />
            </div>
        </div>
    </div>
  )
}

export default UpdateAnnaliticAccount