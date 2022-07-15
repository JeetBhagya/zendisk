pragma solidity ^0.5.0;
// pragma abicoder v2;
pragma experimental ABIEncoderV2;
contract DStorage {
  string public name = 'DStorage';
  uint public fileCount = 0;
  mapping(uint => File) public files;
  // uint imageFileCount = 0;
  // uint videFileCount = 0;
  // uint musicFileCount = 0;
  // uint docFileCount = 0;
  // uint otherFileCount = 0;
  struct File {
    uint fileId;
    string fileHash;
    uint fileSize;
    string fileType;
    string fileName;
    string fileDescription;
    string[] tags;
    bool isPrivate;
    address[] shareTo;
    uint uploadTime;
    address payable uploader;
  }

  event FileUploaded(
    uint fileId,
    string fileHash,
    uint fileSize,
    string fileType,
    string fileName, 
    string fileDescription,
    string[] tags,
    bool isPrivate,
    address[] shareTo,
    uint uploadTime,
    address payable uploader
  );

  constructor() public {
  }

  
  
//  function memcmp(bytes memory a, bytes memory b) internal pure returns(bool){
//         return (a.length == b.length) && (keccak256(a) == keccak256(b));
//     }
//     function strcmp(string memory a, string[] b) internal pure returns(bool){
//       for(uint i=0;i<b.length();i++)
//       {
//         if(memcmp(bytes(a), bytes(b[i])))
//         return true;

//       }
//       return false;
//     }
  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription,string[] memory _tags,address[] memory _shareTo,bool _isPrivate) public {
    // Make sure the file hash exists
    require(bytes(_fileHash).length > 0);
    // Make sure file type exists
    require(bytes(_fileType).length > 0);
    // Make sure file description exists
    require(bytes(_fileDescription).length > 0);
    // Make sure file fileName exists
    require(bytes(_fileName).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0)); 
    
    // Make sure file size is more than 0
    require(_fileSize>0);

    // Increment file id
    fileCount ++;
    // if(_fileType=="IMAGE/PNG" || _fileType=="IMAGE/JPEG" || _fileType=="IMAGE/SVG" 
    // || _fileType=="IMAGE/AVIF" || _fileType=="IMAGE/APNG" || _fileType=="IMAGE/WEBP" 
    // || _fileType=="IMAGE/GIF" || _fileType=="IMAGE/BPM" || _fileType=="IMAGE/ICO"|| _fileType=="IMAGE/TIFF" )
    
    // if(strcmp(_fileType,["IMAGE/PNG","IMAGE/JPEG","IMAGE/SVG","IMAGE/GIF","IMAGE/WEBP","IMAGE/AVIF","IMAGE/APNG","IMAGE/BMP","IMAGE/ICO","IMAGE/TIFF"]))
    // {
    //   imageFileCount++;
    // }
    // Add File to the contract
    files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription,_tags,_isPrivate,_shareTo, now, msg.sender);
    // Trigger an event
    emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription,_tags,_isPrivate,_shareTo, now, msg.sender);
  }
}