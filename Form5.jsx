import React, { useState } from "react";

const Form5 = () =>{
    const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        mess :""
    });
    
    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const{value,name} = event.target;
        setFullName((preValue) =>{
            console.log(preValue);
            return{
                ...preValue,
                [name]:value,
            }
        })
    };  
    const onSubmits = (event) =>{
        event.preventDefault();
        alert("form submitted");
    };
    return(
        <>
        <div className="main_div">
         <form onSubmit={onSubmits}>
          <div>
              <h1>Hello {fullName.fname} {fullName.lname}</h1>
              <p>{fullName.email}</p>
              <p>{fullName.phone}</p>
              <input type="text" placeholder="Enter Your Name" name="fName" onChange={inputEvent} value={fullName.fname}/>
              <input type="text" placeholder="Enter Last Name" name="lName" onChange={inputEvent} value={fullName.lname}/>
              <input type="email" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email}/>
              <input type="number" placeholder="Enter Last Number" name="phone" onChange={inputEvent} value={fullName.phone}/>
              <input type="text" placeholder="Enter Last Message" name="mess" onChange={inputEvent} value={fullName.mess}/>
              <button type="submit">Submit Me</button>
          </div>
         </form>
         </div>
        </>
    );
}
export default Form5;