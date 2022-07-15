import Identicon from 'identicon.js';
import React from 'react'
import { FaSearch, FaUpload } from 'react-icons/fa';
import  './Body.css';
import Loader from './Loader';
import RecentFiles from './RecentFiles';
import Storage from './Storage';
import TopFixedBar from './TopFixedBar';
const Body = ({ loading, files,account,

    captureFile,uploadFile,closeModal,imageCount,
    totFileSize,
    fileCount,
    videoCount,
    docCount,
    otherCount,
    musicCount,
    totImageSize,
    totVideoSize,
    totDocSize,
    totMusicSize,
    totOtherSize}) => {
      if(!loading)
    return (
        <div className='Body'>
      <TopFixedBar account={account}>
      <h1>Dashboard</h1>
                  <button onClick={()=>closeModal()}>
                    <FaUpload/>
                    Upload File
                  </button>
      </TopFixedBar>
<div className="bottom">
               <Storage  
               totFileSize={totFileSize}
    fileCount={fileCount}
               imageCount={imageCount}
          videoCount={videoCount}
          docCount={docCount}
          otherCount={otherCount}
          musicCount={musicCount}
          totImageSize={totImageSize}
          totVideoSize={totVideoSize}
          totDocSize={totDocSize}
          totMusicSize={totMusicSize}
          totOtherSize={totOtherSize}/>
               <RecentFiles files={files.slice(0,3)} isRecent={true}/>
                        </div>
            </div>
    )
    else{
      return <Loader/>
    }
}

export default Body
