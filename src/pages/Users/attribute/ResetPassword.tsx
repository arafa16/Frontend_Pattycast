import React, {useState, useRef, useEffect} from 'react'
import Button from '../../../base-components/Button';
import { Dialog, Menu } from '../../../base-components/Headless';
import Lucide from '../../../base-components/Lucide';
import { FormInput} from '../../../base-components/Form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { resetDataUser, UpdatePassword } from '../../../stores/features/daftarSlice';
import { useParams } from 'react-router-dom';

const ResetPassword = (props) => {
    const {viewModal, setViewModal, id} = props;
    const [password, setPassword] = useState('');
    const sendButtonRef = useRef(null);

    const dispatch = useDispatch();

    const {dataUser, isDataUserLoading, isDataUserError, isDataUserSuccess, messageDataUser} = useSelector(
        (state) => state.daftar
    )

    useEffect(()=>{
        if(isDataUserSuccess && messageDataUser){
            dispatch(resetDataUser());
            setViewModal(false);
            setPassword("");
        }
    },[isDataUserSuccess, messageDataUser])

    const updatePassword = (e) => {
        e.preventDefault();
        dispatch(UpdatePassword({
            id,
            password
        }));
    }

  return (
    <>
        {/* BEGIN: Modal Content */}
        <Dialog
            open={viewModal}
            onClose={() => {
                setViewModal(false);
            }}
            initialFocus={sendButtonRef}
        >
            <Dialog.Panel>
                <Dialog.Title>
                    <h2 className="mr-auto text-base font-small">
                    Reset Password
                    </h2>
                </Dialog.Title>
                <form onSubmit={updatePassword}>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-12">
                        <FormInput
                            id="modal-form-1"
                            type="text"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="password"
                        />
                        </div>
                    </Dialog.Description>
                    <Dialog.Footer>
                        <Button
                            type="button"
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => {
                                setViewModal(false);
                            }}
                            className="w-20 mr-1"
                        >
                        Cancel
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            type="submit"
                            className="w-48 "
                        >
                        update password
                        </Button>
                    </Dialog.Footer>
                </form>
                
            </Dialog.Panel>
        </Dialog>
        {/* END: Modal Content */}
    </>
  )
}

export default ResetPassword