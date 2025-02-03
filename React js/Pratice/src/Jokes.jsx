import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Jokes = () => {
  const [joke , Setjoke] = useState([])
  // using useEffect for our api 
  useEffect(()=>{
    axios.get("/api/jokes").then((response)=>{
      Setjoke(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <div>
      <h1>Welcome to JokesHub</h1>
      <h2>JOkes:{joke.length}</h2>
    
    {
      joke.map((jokes)=>{
        return(
          <div key={jokes.id} >
            <h1>{jokes.Title}</h1>
          </div>
        )
      })
    }

    </div>
  )
}

export default Jokes
