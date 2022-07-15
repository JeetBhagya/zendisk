import React from 'react'
import  './SideBar.css';
import SideBarItem from './SideBarItem';
import { FaHome,FaFileUpload,FaBookmark } from "react-icons/fa";
import { MdGroup,MdChat,MdNotifications } from "react-icons/md";
import { useState } from 'react';

const SideBar = () => {
    const [activeItem,setActiveItem] = useState("home");
    const toggleActive = (val)=>{
        setActiveItem(val);
        }
    return (
        <div className='side_bar'>
            <SideBarItem title={"Home"} icon={<FaHome/>} title="home" activeItem={activeItem} toggleActive={toggleActive} />
            <SideBarItem title={"Home"} icon={<FaFileUpload/>} title="upload" activeItem={activeItem} toggleActive={toggleActive} />
            <SideBarItem title={"Home"} icon={<FaBookmark/>} title="bookmark" activeItem={activeItem} toggleActive={toggleActive}/>
            <SideBarItem title={"Home"} icon={<MdGroup/>} title="group"  activeItem={activeItem} toggleActive={toggleActive}/>
            <SideBarItem title={"Home"} icon={<MdChat/>} title="chat"  activeItem={activeItem} toggleActive={toggleActive}/>
            <SideBarItem title={"Home"} icon={<MdNotifications title='notifications' activeItem={activeItem} toggleActive={toggleActive}/>}  />
            
        </div>
    )
}

export default SideBar
