import React from 'react'
import { students } from './studentsData'
import SeriesData from './List'

const Map = () => {
  return (
  <>
  {
    students.map((data) => {
   return <SeriesData key={data.id} data={data} />
      
    })
  }
  
  
  
  
  
  
  </>
  )
}

export default Map
