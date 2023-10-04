import React from 'react'
import Button from "../../../base-components/Button";
const ButtonAction = (props : any) => {
    const {clickBack, clickDelete, clickUpdate, setViewModal} = props;
    return (
        <>
            <div className='flex justify-end px-4 pt-10'>
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
                    onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setViewModal(true);
                    }}
                >
                    change password
                </Button>
                <Button 
                    size='sm' 
                    variant="secondary" 
                    className="w-24 ml-2"
                    onClick={()=>clickUpdate()}
                >
                    edit
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