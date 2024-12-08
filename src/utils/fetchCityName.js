import axios from 'axios'

export const fetchCityName = async (lat,long) => {
  try {
  const {data:{address}} = await axios.get(
    `https://us1.locationiq.com/v1/reverse?key=pk.1488039b72662cb13d2eda4aee61891a&lat=${lat}&lon=${long}&format=json`
    )
    return address
  } catch (e) {
    throw new Error(e)
  }
}
