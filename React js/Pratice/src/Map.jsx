import React from 'react'
import { students } from './studentsData'

const Map = () => {
  return (
  <>
  {
    students.map((data) => {
      return(
       <div key={data.id} >
        <h1>{data.firstName}</h1>
        <h2>{data.age}</h2>
        {/* <h2>{data.address}</h2> */}


       </div>
      )
    })
  }
  
  
  
  
  
  
  </>
  )
}

export default Map
