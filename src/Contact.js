import React from 'react';
import {useState} from "react";
import './App.css';

const Contact=()=> {
  const[data,setData]=useState({
    fullName:"",
    number:"",
    email:"",
    text:""
  });
  const inputChange=(event)=>{
    const {name,value}=event.target;
    console.log(value);
    setData(
      (previous_value)=>{
        return{
          ...previous_value,
          [name]:value,
        };  
      }
    );
    

  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`   
    ${data.fullName}
    My Mobile Number is ${data.number}
    My Email Id is ${data.email}
    My message is ${data.message}`);
  }

  return (
    <>
   <div className="my-5">
     <h1 className="text-center">Contact</h1>
   </div>
   <div className="container contact-div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
         <form onSubmit={formSubmit}>
         <div className="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Full Name</label>
         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={data.fullName} name="fullName" onChange={inputChange} />
         <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
         <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Phone Number" value={data.number} name="number" onChange={inputChange} />
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"  value={data.email} name="email" onChange={inputChange}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={data.text} name="text" onChange={inputChange}></textarea>
</div>
<div className="">
  <div className="mb-3">
    <button className="btn btn-outline-primary" type="submit" >Submit form</button>
  </div>
</div>

         </form>
       </div>
     </div>
   </div>

    </>
  );
}

export default Contact;
