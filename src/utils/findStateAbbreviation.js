import {StateAbbreviations} from '../data/constant'

export const findStateAbbreviation = (state) => {
  
  if (!state) 
  return
  
  const {abbreviation} = StateAbbreviations.find(obj => obj.name === state)
  
  return abbreviation
}