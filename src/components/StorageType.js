import React from 'react'
import { convertBytes } from './helpers';
import  './StorageType.css';
import { Link } from 'react-router-dom';
const StorageType = ({icon,title,usedStorage, totFiles,color}) => {
    return (
        <Link to={`/${title.toLowerCase()}`}>
        <div className={`file_card`} >
            <div className={`file_card_top`}>
               <div className={`round ${color}`} > {icon}</div>
                <h3>{title}</h3>
            </div>
            <div className='file_card_bottom'>
            <div className={`used_storage ${color}`}>{convertBytes(usedStorage)} Used</div>
            <div className="tot_files">{totFiles} Files</div>

</div>
        </div>
        </Link>
    )
}

export default StorageType
