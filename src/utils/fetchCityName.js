import axios from 'axios'

export const fetchCityName = async (lat,long) => {
  try {
  const {data:{address}} = await axios.get(
    `https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_GEO_KEY}&lat=${lat}&lon=${long}&format=json`
    )
    return address
  } catch (e) {
    throw new Error(e)
  }
}