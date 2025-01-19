import React from 'react'

// const SeriesData = (props) => {
  const SeriesData = ({data}) => {
    // destructure the code
    const {id , firstName , age } = data
  
    return(
       <div key={id} >
        <h1>{firstName}</h1>
        <h2>{age}</h2>
        {/* <p>{data.address}</p> */}


       </div>
      )
    
    
 

}

export default SeriesData
