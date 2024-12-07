import axios from 'axios'
import {makeFormData} from './makeFormData'

export const multipleImagesUploadToCloudinary =
async (fileList,uid,url,folderPath) => {
    
  const FilelistsArray = Array.from(fileList)
  
  const constantObj = {
  upload_preset: 'Anshul',
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD
  }
  
  const PromiseArray =
  FilelistsArray
  .filter((file)=>file.size<10485710)
  .map(file => {
    const data = makeFormData({
      ...constantObj,
      folder: `users/${uid}/${folderPath}`,
      file
    })
    return axios.post(`${url}`,data)
  })
  
  const result = await Promise.all(PromiseArray)
  
  return result.map(({data:{url}}) => url)
}
