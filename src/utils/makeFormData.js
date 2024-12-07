export const makeFormData = (obj) => {
  const formdata = new FormData()
  
  for(let [key,value] of Object.entries(obj)){
    formdata.append(key,value)
  }
  
  return formdata
}