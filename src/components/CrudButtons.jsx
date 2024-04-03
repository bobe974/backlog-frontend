import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../icons/deleteIcon.png';
import updateIcon from '../icons/updateIcon.png';
import inspectIcon from '../icons/inspectIcon.png'

function CrudButtons({ gameId }) {
    return (
        <>
            <div className='flex items-center justify-center'>
            <Link to={`/inspectGame/${gameId}`} className="mr-2">
                <img src={inspectIcon} alt="Delete Icon" className='w-6 h-6'/>
            </Link>
            <Link to={`/editGame/${gameId}`} className="mr-2">
                <img src={updateIcon} alt="Update Icon" className='w-6 h-6'/>
            </Link>

            <Link to={`/deleteGame/${gameId}`}>
                <img src={deleteIcon} alt="Delete Icon" className='w-6 h-6'/>
            </Link>
            </div>    
        </>
    );
}

export default CrudButtons;
