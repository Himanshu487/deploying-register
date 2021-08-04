import React, { useState } from "react";

function App()
{
  const[details,setdetails]=useState({
    username:"",
    password:"",
    confirmpassword:"",
    Email:""
  })

  function handlechange(event)
  {

    const {value,name}=event.target;

    setdetails((prevValue)=>{
    
      if(name==="username")
      {
        return{
          username:value,
          password:prevValue.password,
          confirmpassword:prevValue.confirmpassword,
          Email:prevValue.Email
        }
      }
      else if(name==="password")
      {
        return{
          username:prevValue.username,
          password:value,
          confirmpassword:prevValue.confirmpassword,
          Email:prevValue.Email
        }
      }

      else if(name==="confirmpassword")
      {
        return{
          username:prevValue.username,
          password:prevValue.password,
          confirmpassword:value,
          Email:prevValue.Email
        }
      }

      else if (name==="Email")
      {
      return{
        username:prevValue.username,
        password:prevValue.password,
        confirmpassword:prevValue.confirmpassword,
        Email:value
      }
    }

    });

  }




  return(
<div>
<h1>Registration</h1>
<p>Register yourself with us</p>

<div className="container">
<form>
<input className="box1" onChange={handlechange}  name="username" placeholder="Enter your username" type="text" value={details.username}/>
<br/>
<input className="box2" onChange={handlechange} name="password" placeholder="Enter your password" type="text" value={details.password}/>
<input className="box3" onChange={handlechange} name="confirmpassword" placeholder="confirm your password" type="text" value={details.confirmpassword}/>

<br/>
<input className="box4" onchange={handlechange} name="Email" placeholder="Enter the E-mail id" type="text" value={details.Email}/>
<button className="btn1">verify</button>

<br/>
<button className="btn">Register</button>
<button className="btn2">cancel</button>
</form>

</div>
</div>

  )
}

export default App;