import React from 'react'
import StorageType from './StorageType'
import { FaFile, FaImages, FaMusic, FaRandom, FaVideo } from 'react-icons/fa';
import { MdAllInclusive } from 'react-icons/md';

const Storage = ({imageCount,
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
    return (
        <div className='storage'>
                  <StorageType icon={<MdAllInclusive/>} title="All" usedStorage={totFileSize} totFiles={fileCount} color={"orange"}/>

                  <StorageType icon={<FaImages/>} title="Images" usedStorage={totImageSize} totFiles={imageCount} color={"cyan"}/>
                  <StorageType icon={<FaFile/>} title="Documents" usedStorage={totDocSize} totFiles={docCount} color={"indigo"}/>
                  <StorageType icon={<FaVideo/>} title="Videos" usedStorage={totVideoSize} totFiles={videoCount} color={"orange"}/>
                  <StorageType icon={<FaMusic/>} title="Musics" usedStorage={totMusicSize} totFiles={musicCount} color={"blue"}/>
                  <StorageType icon={<FaRandom/>} title="Others" usedStorage={totOtherSize} totFiles={otherCount} color={"green"}/>
                </div>
    )
}

export default Storage
