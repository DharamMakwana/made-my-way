export const cleanObject = (obj) => {
    for (let propName in obj){
    if (!obj[propName]){
    delete obj[propName];
    }
  }
    return obj
}