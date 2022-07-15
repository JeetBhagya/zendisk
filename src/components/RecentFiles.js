import moment from 'moment';
import React from 'react'
import { convertBytes } from './helpers';
import './RecentFiles.css';
const RecentFiles = ({files,isRecent}) => {
    return (
        <div className="recent_files">
       {isRecent && <h2>Recent Files </h2>}
        <table>
          <thead>
<tr>
<th className='fileName'>Name</th>
<th>Description</th>

<th>Date Created</th>
<th>Size</th>
<th>Access Type</th>
</tr>
          </thead>
          <tbody>
          {
            files.map((file)=>(
              <tr>
              <a   href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">       
<td className='fileName'>

                           
                           
                          
<div className='fileType indigo'>{file.fileType.toUpperCase()}</div>
<span>
{file.fileName}
</span>

</td>
</a>
<td>
{file.fileDescription}
</td>
<td>
{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}
</td>
<td>
{convertBytes(file.fileSize)}
</td>
<td>
  {file.isPrivate?"Private":"Public"}
</td>
</tr>
            ))
          }

          </tbody>
        </table>
      </div>

    )
}

export default RecentFiles
