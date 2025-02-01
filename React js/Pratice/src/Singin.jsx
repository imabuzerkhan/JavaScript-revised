// pratice react form in length type 

import React from 'react'
import { useState } from 'react'
const Singin = () => {
  const [Firstname , SetFirstname] = useState("")
  const [Lastname , SetLastname] = useState("")
  const [Email , SetEmail] = useState("")
  const [Phonenumber , SetPhonenumber] = useState("")


const handlevent = (e)=>{
  const {name , value} = e.target

  switch(name){
    case "Firstname" : SetFirstname(value)
    break;
    case "Lastname" : SetLastname(value)
    break;
    case "Email" : SetEmail(value)
    break;
    case "Phonenumber" : SetPhonenumber(value)
    break;
  }

}

const handleForm = (e) => {
  e.preventDefault(); // ✅ Fixed capitalization

  const formData = {
    Firstname: Firstname,
    Lastname : Lastname ,
    Email : Email ,
    Phonenumber : Phonenumber
    
    // ✅ Capturing user input correctly
  };

  console.log(formData);
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
        value={Firstname}
        onChange={handlevent}
        />
       </label>

       <label >LastName:
        <input type="text" 
        name='Lastname'
        placeholder='Enter the Lastname'
        required
        value={Lastname}
        onChange={handlevent}
        />
       </label>

       <label >Email:
        <input type="email" 
        name='Email'
        placeholder='Enter the Email'
        required
        value={Email}
        onChange={handlevent}
        />
       </label>


       <label >PhoneNumber:
        <input type="text" 
        name='Phonenumber'
        placeholder='Enter the name'
        required
        value={Phonenumber}
        onChange={handlevent}
        />
       </label>


<button>Sumbit</button>


      </form>
    </div>
    
    
    
    </>
  )
}

export default Singin
