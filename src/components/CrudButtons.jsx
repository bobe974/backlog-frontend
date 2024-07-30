import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../icons/deleteIcon.png';
import updateIcon from '../icons/updateIcon.png';
import inspectIcon from '../icons/inspectIcon.png';
import GlobalApi from '../services/GlobalApi';

function CrudButtons({ game, refreshTable }) {
    const handleDelete = () => {
        GlobalApi.deleteGame(game.id).then((response) => {
            if (response.status === 204) {
                console.log("supprimé");
                //refresh
                refreshTable();
            }
        });
    };

    return (
        <div className='flex items-center justify-center space-x-2'>
            <Link to={`/inspectGame/${game.id}`} className="w-9 h-9 flex items-center justify-center">
                <img src={inspectIcon} alt="Inspect Icon" className='w-6 h-6' />
            </Link>
            <Link to={`/editGame/${game.id}`} className="w-9 h-9 flex items-center justify-center">
                <img src={updateIcon} alt="Update Icon" className='w-6 h-6' />
            </Link>
            <button onClick={handleDelete} className="w-9 h-9 flex items-center justify-center">
                <img src={deleteIcon} alt="Delete Icon" className='w-6 h-6' />
            </button>
        </div>
    );
}

export default CrudButtons;
