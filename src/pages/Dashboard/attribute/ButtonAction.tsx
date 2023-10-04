import React from 'react'
import Button from "../../../base-components/Button";
import {useNavigate} from 'react-router-dom'
const ButtonAction = (props : any) => {
    const {linkEdit, linkBack, linkCreatePtjb} = props;
    const navigate = useNavigate();

    const clickEdit = () => {
        navigate(linkEdit);
    }

    const clickBack = () => {
        navigate(linkBack);
    }

    return (
        <>
            <div className='flex justify-end px-4 mt-10'>
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
                    className={`w-24 ml-2`}
                    onClick={()=>navigate(`${linkCreatePtjb}`)}
                >
                    <p className='text-white'>Create PTJB</p>
                </Button>
                <Button 
                    size='sm' 
                    variant="primary" 
                    className="w-24 ml-2"
                    onClick={()=>clickEdit()}
                >
                    edit
                </Button>
            </div>
        </>
    )
}

export default ButtonAction