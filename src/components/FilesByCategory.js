import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa'
import FileCard from './FileCard';
import "./FilesByCategory.css";
import Loader from './Loader';
import RecentFiles from './RecentFiles';
import TopFixedBar from './TopFixedBar';
const FilesByCategory = ({loading,files,account,type}) => {
    const [_files, _setFiles] = useState([])
    useEffect(() => {
        let _type = type.slice(0, -1)
        
        if(!loading)
        {
         
            if(type==="musics")
            _setFiles(()=>files.filter((file)=>file.fileType.includes("audio")))

            else if(type==="others")
            _setFiles(()=>files.filter((file)=>!file.fileType.includes("music") &&
             !file.fileType.includes("audio") && !file.fileType.includes("document") 
             && !file.fileType.includes("pdf") && !file.fileType.includes("doc") 
             && !file.fileType.includes("ppt") && !file.fileType.includes("htm") 
             && !file.fileType.includes("odt") && !file.fileType.includes("xls") 
             && !file.fileType.includes("ods") && !file.fileType.includes("txt") 
             && !file.fileType.includes("video") && !file.fileType.includes("image") ))
             else if(type==="documents")
            _setFiles(()=>files.filter((file)=>file.fileType.includes(_type) || file.fileType.includes("pdf") || file.fileType.includes("doc") 
            || file.fileType.includes("ppt") || file.fileType.includes("htm") 
            || file.fileType.includes("odt") || file.fileType.includes("xls") 
            || file.fileType.includes("ods") || file.fileType.includes("txt") 


            )
            )

            else
            _setFiles(()=>files.filter((file)=>file.fileType.includes(_type) ))
            
   
       }
    }, [files, loading, type])
//     useEffect(()=>{
// alert(_files.length)
//     },[_files.length])
    if(!loading)
    return (
        <div className='filesByCategory'>
       <TopFixedBar account={account}>
       <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
            <div className="sortBy">
             Date Created
             <div className="button">
                 <FaChevronUp/>
             </div>
            </div>
       </TopFixedBar>
            <div className="bottom">
            <div className="files">
{
    
    type!=="all"?_files.map((file)=><FileCard file={file} type={type}/>):
    (<RecentFiles files={files} isRecent={false}/>)
         
}

            </div>
            </div>
        </div>
    )
    else
    return <Loader/>
}

export default FilesByCategory
