import { useState } from 'react'

export const useForcedRender = () => {
  const [forced,setState] = useState(false)
  
  return ([forced,() => setState(!forced)])
};