import {useState} from 'react'

import {SearchInput} from './components/SearchInput'
import {SearchCard} from './components/SearchCard'

import Lochness from '../../assets/illustrations/Lochness'
import DogNewsPaper from '../../assets/illustrations/DogNewsPaper'

import styled from 'styled-components'

const SearchPage = () => {
  
 const [data,setData] = useState('initial')
 
  return (
    <Wrapper>
    <SearchInput
    setData={setData}
    />
    <ScrollArea>
    {data==='initial'&&<Lochness/>}
    {
    Array.isArray(data)
    &&
    (
    Boolean(data.length)
    ?
    data.map(doc => <SearchCard key={doc.place_id} info={doc}/>)
    :
    <DogNewsPaper />
    )}
    </ScrollArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`
const ScrollArea = styled.div`
     width: 100%;
     height: 410px; 
     overflow: auto;
     
     display: flex;
     flex-direction: column;
     align-items: center;
     
     gap: 8px;
`

export default SearchPage



const da = {
  status: true,
        address: "VNGSU dumas road Surat",
        labels: [
          "🏟️ Sports/Events"
        ],
        otherimages: [
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214975/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/ul7kw8kfjxujp4zqtu6d.jpg",
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214974/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/jxon6xnizvjux69xpcmh.jpg",
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214975/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/whpjgvjdpiouqkftxwxg.jpg",
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214975/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/kcmkpviexlp5jta7mjcx.jpg",
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214975/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/lr6cc6ikq7l01cfr32a3.jpg",
          "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214975/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/otherImages/vsciejzniyseskt79ruv.jpg"
        ],
        createdat: {
          "seconds": 1663214984,
          "nanoseconds": 741000000
        },
        cityname: "Surat",
        likesby: [
          "XbjeU6baD1bwdqwuMk6X5DLDc8W2",
          "Hq0A23yA83biDeilgucZPIqbLxu2"
        ],
        geopoints: null,
        likescounter: 2,
        createdby: "XbjeU6baD1bwdqwuMk6X5DLDc8W2",
        place_id: "l82j8obw",
        placename: "VNSGU conventional hall",
        thumbnail: "http://res.cloudinary.com/dvpjtayzu/image/upload/v1663214982/users/XbjeU6baD1bwdqwuMk6X5DLDc8W2/thumbnails/ct55qa4rvkrtiep8etrl.jpg"
      }
