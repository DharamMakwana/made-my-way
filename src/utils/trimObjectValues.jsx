export const trimObjectValues = (obj) =>
{
  for(let key in obj){
    obj[key] = typeof obj[key] === 'string' ? obj[key].trim() : obj[key]
  }
  
  return obj
}