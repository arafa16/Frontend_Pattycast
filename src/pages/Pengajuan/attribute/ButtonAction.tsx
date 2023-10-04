import React from 'react'
import Button from "../../../base-components/Button";
import LoadingIcon from '../../../base-components/LoadingIcon';
import {useNavigate} from 'react-router-dom'

const ButtonAction = (props : any) => {
    const {linkEdit, linkBack, linkCreatePtjb, status, clickChangeStatus, isPengajuanLoading} = props;
    const navigate = useNavigate();

    const clickEdit = () => {
        navigate(linkEdit);
    }

    const clickBack = () => {
        navigate(linkBack);
    }

    return (
        <>
            <div className='flex justify-end px-4'>
                <Button 
                    size='sm' 
                    variant="secondary" 
                    className="w-24 ml-2"
                    onClick={()=>clickBack()}
                >
                    back
                </Button>
                <Button 
                    size='sm' 
                    variant="primary" 
                    className={`w-24 ml-2 ${status === 4 ? '' : 'hidden'}`}
                    onClick={()=>navigate(`${linkCreatePtjb}`)}
                >
                    <p className='text-white'>Create PTJB</p>
                </Button>
                <Button 
                    size='sm' 
                    variant="success" 
                    className={`w-24 ml-2 ${status === 4 ? '' : 'hidden'}`}
                    onClick={()=>clickChangeStatus(5)}
                >
                    <p className='text-white'>PTJB Check</p>
                </Button>
                <Button 
                    size='sm' 
                    variant="success" 
                    className={`ml-2 ${status < 2 ? '' : 'hidden'}`}
                    onClick={()=>clickChangeStatus(2)}
                >
                    <p className='text-white'>kirim pengajuan</p> {isPengajuanLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-3 h-5 mx-5" /> : ''} 
                </Button>
                <Button 
                    size='sm' 
                    variant="primary" 
                    className={`w-24 ml-2 ${status < 2 ? '' : 'hidden'}`}
                    onClick={()=>clickEdit()}
                >
                    edit
                </Button>
            </div>
        </>
    )
}

export default ButtonAction