// export function convertBytes(bytes) {
//    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//    if (bytes === 0) return '0 Byte';
//    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
// }
export function convertBytes(bytes, decimals = 2) {
   if (bytes === 0) return '0 Bytes';

   const k = 1024;
   const dm = decimals < 0 ? 0 : decimals;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}