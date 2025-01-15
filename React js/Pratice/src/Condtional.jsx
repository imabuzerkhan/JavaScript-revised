import React from 'react'

const Condtional = () => {
  let age = 16
  // let canWatch = "Not vote"
  // if(age>= 18) canWatch = " Vote now"

  const voting = ()=>{
    if(age>=18) return "you can vote now";
    return "you can't vote now"
  }

  return (
    <div>
      {/* write conditional statment */}
      <h1>You are trying to vote now</h1>
      {/* <h2>you can {age>=18 ? "votenow" : "Not vote"} </h2> */}
      {/* Another way */}
      {/* <h2>{canWatch}</h2> */}
       {/* Another way */}
       <h2>{voting()}</h2>
      
      
    </div>
  )
}

export default Condtional
