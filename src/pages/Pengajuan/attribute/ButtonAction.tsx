import React from 'react'
import Button from "../../../base-components/Button";
import {useNavigate} from 'react-router-dom'
const ButtonAction = (props) => {
    const {linkEdit, linkBack, status} = props;
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
                    variant="success" 
                    className={`text-white ml-2 ${status < 2 ? '' : 'hidden'}`}
                    onClick={()=>clickBack()}
                >
                    kirim pengajuan
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