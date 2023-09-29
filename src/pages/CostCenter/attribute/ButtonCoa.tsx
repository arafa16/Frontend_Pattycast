import React from 'react'
import Button from "../../../base-components/Button";
import {useNavigate} from 'react-router-dom'

const ButtonCoa = (props) => {
    const {linkBack, linkUpdate, deleteCostCenter} = props;
    
    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-end px-4 mt-10'>
                <Button 
                    size='sm' 
                    variant="secondary" 
                    className="w-24 ml-2"
                    onClick={()=>navigate(linkBack)}
                >
                    back
                </Button>
                <Button 
                    size='sm' 
                    variant="danger" 
                    className="w-24 ml-2"
                    onClick={()=>deleteCostCenter()}
                >
                    delete
                </Button>
                <Button 
                    size='sm' 
                    variant="primary" 
                    className="w-24 ml-2"
                    onClick={()=>navigate(linkUpdate)}
                >
                    edit
                </Button>
            </div>
        </>
    )
}

export default ButtonCoa