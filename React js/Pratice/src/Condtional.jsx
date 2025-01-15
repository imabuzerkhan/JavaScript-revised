import React from 'react'

const Condtional = () => {
  let age = 16
  return (
    <div>
      {/* write conditional statment */}
      <h1>You are trying to vote now</h1>
      <h2>you can {age>=18 ? "votenow" : "Not vote"} </h2>
      
      
    </div>
  )
}

export default Condtional
