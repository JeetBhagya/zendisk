import React from 'react'
import { Link } from 'react-router-dom'

const SideBarItem = ({title,icon,activeItem,toggleActive}) => {
   
    return (
        <Link to={`/${title==='home'?"":title}`}>
        <div className={`side_bar_item ${title===activeItem?'active':null}`} onClick={()=>toggleActive(title)}>
            {icon}
        </div>
        </Link>
    )
}

export default SideBarItem
