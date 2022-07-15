import React from 'react'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'

const UploadFileModal = ({openModal,captureFile,uploadFile}) => {
    const [_private,_setPrivate] = useState(true);
 const [fileDesc,setFileDesc] = useState("")
 const [tags,setTags] = useState([])
    return (
        <div className='uploadFileModal'>
        <div className="close" onClick={openModal}>
            <MdClose/>
        </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                uploadFile(fileDesc,tags,_private)
            }}>
                <input type="file" name="" id="" placeholder='Choose File' onChange={captureFile} required/>
                <input type="text" name="" id="" placeholder='Enter File Description' onChange={(e)=>setFileDesc(e.target.value)} value={fileDesc} required/>
                <input type="text" name="" id="" placeholder='Enter Tags Separted By Comma' onChange={(e)=>setTags(e.target.value)} value={tags} required/>
                <label class="form-switch">
  <input type="checkbox" onClick={()=>_setPrivate(!_private)} checked={_private}/>
  <i></i>
  Private
</label>
                <button>Upload File</button>
            </form>
        </div>
    )
}

export default UploadFileModal
