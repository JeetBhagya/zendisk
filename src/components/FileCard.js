import React from 'react'
import { FaFile, FaMusic, FaRandom } from 'react-icons/fa'
import './FileCard.css'
const FileCard = ({file,type}) => {
    
    if(type==="videos")return (
        
        <div className='fileCard'>
               
    <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} 
    target="_blank"
      rel="noopener noreferrer" >
            <video src={"https://ipfs.infura.io/ipfs/" + file.fileHash} className='videoCard'/>
        
        <div className="fileName">
            {file.fileName}
        </div>
            </a>
        </div>
    )
    else if(type==="images")
    return (
        <div className='fileCard'>
        <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} 
        target="_blank"
        target="_blank"
      rel="noopener noreferrer" >
        <img src={"https://ipfs.infura.io/ipfs/" + file.fileHash} className='imageCard'/>
        <div className="fileName">
            {file.fileName}
        </div>
        </a>
    </div>
    )
    else if(type==="documents")
    return (
        <div className='fileCard'>
        <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} 
        target="_blank"
      rel="noopener noreferrer" >
      <FaFile/>
        <div className="fileName">
            {file.fileName}
        </div>
        </a>
    </div>
    )
    else if(type==="musics")
    return (
        <div className='fileCard'>
       <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} 
       target="_blank"
      rel="noopener noreferrer" >
      <FaMusic/>
        <div className="fileName">
            {file.fileName}
        </div>
        </a>
    </div>
    )
    else 
    return (
        <div className='fileCard'>
      <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} 
      target="_blank"
      rel="noopener noreferrer" >
        <FaRandom/>
        <div className="fileName">
            {file.fileName}
        </div>
        </a>
    </div>
    )
}

export default FileCard
