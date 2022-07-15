// import DStorage from '../abis/DStorage.json'
// import React, { Component } from 'react';
// import Navbar from './Navbar'
// import Main from './Main'
// import Web3 from 'web3';
// import './App.css';
import SideBar from './SideBar';
import Body from './Body';
import UploadFileModal from './UploadFileModal';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes ,
  useLocation
} from "react-router-dom";
// import { useEffect } from 'react';
// import { useState } from 'react';

// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


// const App = () => {

//   const [account,setAccount] = useState('');
//   const [zenDisk,setZenDisk] = useState(null);
//   const [files,setFiles] = useState([]);
//   const [filesCount,setFilesCount] = useState(0);
//   const [loading,setLoading] = useState(false);
//   const [type,setType] = useState(null);
//   const [name,setName] = useState(null);
//   const [buffer,setBuffer] = useState(null);
//   const [isClosed,setIsClosed] = useState(true);
  


//   const loadWeb3 = async()=>{
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }
//   }

//   const loadBlockchainData = async()=> {
//     const web3 = window.web3
  
//     // Load account
//     const accounts = await web3.eth.getAccounts()
//      setAccount(accounts[0])
//     // Network ID
//     const networkId = await web3.eth.net.getId()
//     const networkData = DStorage.networks[networkId]
//     if(networkData) {
//       // Assign contract
//       const _zenDisk = new web3.eth.Contract(DStorage.abi, networkData.address)
//       // this.setState({ dstorage })
//       console.log("Zendisk",_zenDisk);
//       setZenDisk(()=>_zenDisk)
//       // Get files amount
//       const _filesCount = await zenDisk?.methods.fileCount().call()
//       console.log("_filesCount",_filesCount);

//       // this.setState({ filesCount })
//       setFilesCount(()=>_filesCount)
//       // Load files&sort by the newest
//       for (var i = filesCount; i >= 1; i--) {
//         const file = await zenDisk?.methods.files(i).call()
//        setFiles([...files, file])
//       }
//     } else {
//       window.alert('DStorage contract not deployed to detected network.')
//     }
//   }

//   // Get file from user
//  const captureFile = event => {
//     event.preventDefault()

//     const file = event.target.files[0]
//     const reader = new window.FileReader()

//     reader.readAsArrayBuffer(file)
//     reader.onloadend = () => {
     
//         setBuffer(Buffer(reader.result))
//         setType(file.type);
//         setName(file.name)
      
//       console.log('buffer', buffer)
//     }
//   }
//  const closeModal = ()=>{
//   //  alert('hello')
//     setIsClosed(false)
//   }
//   const openModal = ()=>{
//     //  alert('hello')
//       setIsClosed(true)
//     }
//   const uploadFile = async(description) => {
//     // const web3 = window.web3
  
//     // // Load account
//     // const accounts = await web3.eth.getAccounts()
//     //  setAccount(accounts[0])
//     // // Network ID
//     // const networkId = await web3.eth.net.getId()
//     // const networkData = DStorage.networks[networkId]
//     // if(networkData) {
//       // Assign contract
//       // const _zenDisk = new web3.eth.Contract(DStorage.abi, networkData.address)
//     console.log("Submitting file to IPFS...")

//     // Add file to the IPFS
//     ipfs.add(buffer, (error, result) => {
//       console.log('IPFS result', result.size)
//       if(error) {
//         console.error(error)
//         return
//       }

//       setLoading(true)
//       // Assign value for the file without extension
//       if(type === ''){
//        setType('none')
//       }
//       zenDisk.methods.uploadFile(result[0].hash, result[0].size, type, name, description).send({ from: account }).on('transactionHash', (hash) => {
       
//        setLoading(false)
//        setType(null)
//        setName(null)
//        window.location.reload()
//       }).on('error', (e) =>{
//         window.alert('Error')
//         setLoading(false)
//       })
//     })
//   // }
//   }
//   useEffect(() => {
    
//        loadWeb3();
//        loadBlockchainData();
    
 
//   }, [loadBlockchainData,zenDisk])
//   return (
//     <div className='App'>
//    { !isClosed && <UploadFileModal openModal={openModal} uploadFile={uploadFile} captureFile={captureFile}/>}
//       <SideBar account={account} />
//       { loading
//         ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
//         : <Body
//         account={account}
//             files={files}
//             captureFile={captureFile}
//             uploadFile={uploadFile}
//             closeModal = {closeModal}
//           />
//       }
//     </div>
//   );
// }

// export default App


   
import DStorage from '../abis/DStorage.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Web3 from 'web3';
import './App.css';
import FilesByCategory from './FilesByCategory';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]
    if(networkData) {
      // Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      // this.setState({ filesCount })
      
      this.setState({ filesCount })
      // Load files&sort by the newest
      let imageCount = 0;
      let videoCount = 0;
      let docCount = 0;
      let musicCount = 0;
      let otherCount = 0;
      let fileCount = 0;
      let totImageSize = 0;
      let totVideoSize = 0;
      let totDocSize = 0;
      let totMusicSize = 0;
      let totOtherSize = 0;
      let totFileSize = 0;

      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        console.log(i,file.fileSize);
        // alert(file.fileType)
        totFileSize+=file.fileSize;
       

        if(file.fileType.includes("image"))
        {

          imageCount++;
          totImageSize+=file.fileSize;
        }
        else if(file.fileType.includes("video"))
        {
          videoCount++;
          totVideoSize+=file.fileSize
        }
        else if(file.fileType.includes("audio"))
        {
          musicCount++;
          totMusicSize+=file.fileSize
        }
        else if(file.fileType.includes("document") || file.fileType.includes("pdf") || file.fileType.includes("doc") 
        || file.fileType.includes("ppt") || file.fileType.includes("htm") 
        || file.fileType.includes("odt") || file.fileType.includes("xls") 
        || file.fileType.includes("ods") || file.fileType.includes("txt") )
        {
          docCount++;
          totDocSize+=file.fileSize
        }
        else{
          otherCount++;
          totOtherSize+=file.fileSize
        }
        this.setState({
          files: [...this.state.files, file],
          imageCount,
          videoCount,
          docCount,
          otherCount,
          musicCount,
          totImageSize,
          totVideoSize,
          totDocSize,
          totMusicSize,
          totOtherSize,
          fileCount:filesCount,
          totFileSize
        })
      }
      

    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
  }
  closeModal = ()=>{
    this.setState({isClosed:false})
  }
  openModal = ()=>{
    this.setState({isClosed:true})
  }
  // Get file from user
  captureFile = event => {
    event.preventDefault()

    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadFile = (description,tags,isPrivate) => {
    console.log("Submitting file to IPFS...")

    // Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result.size)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      // Assign value for the file without extension
      if(this.state.type === ''){
        this.setState({type: 'none'})
      }
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description,tags.split(','),[],isPrivate).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({
         loading: false,
         type: null,
         name: null
       })
       window.location.reload()
      }).on('error', (e) =>{
        window.alert('Error')
        this.setState({loading: false})
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false,
      type: null,
      name: null,
      imageCount:0,
      videoCount:0,
      docCount:0,
      otherCount:0,
      musicCount:0,
      totImageSize:0,
      totVideoSize: 0,
      totDocSize: 0,
      totMusicSize: 0,
      totOtherSize: 0,
      fileCount:0,
      totFileSize:0,
      isClosed:true
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.captureFile = this.captureFile.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  render() {
    return (
      <Router>
      <div className='App'>
       
    
  

          { !this.state.isClosed && <UploadFileModal openModal={this.openModal} uploadFile={this.uploadFile} captureFile={this.captureFile}/>}
           <SideBar account={this.state.account} />
           
           <Routes>
          <Route exact path="/" element={         
              
              <Body
              loading={this.state.loading}
             account={this.state.account}
               files={this.state.files}
               imageCount = {this.state.imageCount}
               totFileSize = {this.state.totFileSize}
               fileCount = {this.state.fileCount}
         videoCount = {this.state.videoCount}
         docCount={this.state.docCount}
         otherCount={this.state.otherCount}
         musicCount={this.state.musicCount}
         totImageSize={this.state.totImageSize}
         totVideoSize={this.state.totVideoSize}
         totDocSize={this.state.totDocSize}
         totMusicSize={this.state.totMusicSize}
         totOtherSize={this.state.totOtherSize}
                 captureFile={this.captureFile}
                  uploadFile={this.uploadFile}
                closeModal = {this.closeModal}
                />
              }>
      
 
            
          </Route>
          <Route exact path="/all" element={<FilesByCategory type="all" account={this.state.account} files={this.state.files} loading={this.state.loading} />}/>
            
   
          <Route exact path="/images" element={<FilesByCategory type="images" account={this.state.account} files={this.state.files}loading={this.state.loading}/>}/>
          <Route exact path="/videos" element={<FilesByCategory type="videos" account={this.state.account}  files={this.state.files}loading={this.state.loading}/>}/>
          <Route exact path="/documents" element={<FilesByCategory type="documents" account={this.state.account } files={this.state.files}loading={this.state.loading}/>}/>
          <Route exact path="/others" element={<FilesByCategory type="others" account={this.state.account}  files={this.state.files}loading={this.state.loading}/>}/>
          <Route exact path="/musics" element={<FilesByCategory type="musics" account={this.state.account}  files={this.state.files}loading={this.state.loading}/>}/>
        
     
          {/* <Route path="/videos">
          <FilesByCategory type="videos"/>

          </Route
          <Route path="/documents">
          <FilesByCategory type="documents"/>

          </Route>
          <Route path="/musics">
          <FilesByCategory type="musics"/>

          </Route>
          <Route path="/others">
          <FilesByCategory type="others"/>

          </Route> */}
        </Routes>
           
           </div>
           </Router>

    );
  }
}

export default App;

