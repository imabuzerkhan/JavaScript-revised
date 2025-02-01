// pratice react form in length type 

import React from 'react'
import { useState } from 'react'
const SinginForm = () => {
  const [user , Setuser] = useState({
      Firstname: "",
      Lastname : "" ,
      Email : "" ,
      Phonenumber : ""
      
      
    
  
  })
  


const handlevent = (e)=>{
  // const {name , value} = e.target

 Setuser( (prev) =>  ({...prev , [e.target.name]:e.target.value }))

}

const handleForm = (e) => {
  e.preventDefault(); // ✅ Fixed capitalization

  console.log(user);
};

  return (
    <>
    <h1>React form </h1>
    <div className="main-d">
      <form action="" onClick={handleForm} >
       <label >FirstName:
        <input type="text" 
        name='Firstname'
        placeholder='Enter the name'
        required
        value={user.Firstname}
        onChange={handlevent}
        />
       </label>

       <label >LastName:
        <input type="text" 
        name='Lastname'
        placeholder='Enter the Lastname'
        required
        value={user.Lastname}
        onChange={handlevent}
        />
       </label>

       <label >Email:
        <input type="email" 
        name='Email'
        placeholder='Enter the Email'
        required
        value={user.Email}
        onChange={handlevent}
        />
       </label>


       <label >PhoneNumber:
        <input type="number" 
        name='Phonenumber'
        placeholder='Enter the name'
        required
        value={user.Phonenumber}
        onChange={handlevent}
        />
       </label>


<button>Sumbit</button>


      </form>
    </div>
    
    
    
    </>
  )
}

export default SinginForm
