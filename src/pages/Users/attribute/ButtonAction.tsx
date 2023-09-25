import React from 'react'
import Button from "../../../base-components/Button";
const ButtonAction = (props) => {
    const {clickBack, clickDelete} = props;
    return (
        <>
            <div className='flex justify-end px-4'>
                <Button 
                    size='sm' 
                    variant="danger" 
                    className="w-32 ml-2"
                    onClick={()=>clickDelete()}
                >
                    delete
                </Button>
                <Button 
                    size='sm' 
                    variant="primary" 
                    className="w-32 ml-2"
                    // onClick={()=>clickBack()}
                >
                    change password
                </Button>
                <Button 
                    size='sm' 
                    variant="secondary" 
                    className="w-24 ml-2"
                    onClick={()=>clickBack()}
                >
                    back
                </Button>
            </div>
        </>
    )
}

export default ButtonAction