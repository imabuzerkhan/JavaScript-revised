import React from 'react'

// const SeriesData = (props) => {
  const SeriesData = ({data}) => {
    // destructure the code
    const {id , firstName , age } = data
  
    return(
       <div key={id} >
        <h1>{firstName}</h1>
        <h2>{age}</h2>
        {/* <h2>{data.address}</h2> */}


       </div>
      )
    
    
 

}

export default SeriesData
