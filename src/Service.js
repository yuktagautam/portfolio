import React from "react";
import Card from "./Card";
import './App.css';
import Sdata from "./Sdata.jsx";

const Service=()=> {
  return (
    <>
   <div classsName="my-5">
     <h1 className="text-center">Our Services</h1>
   </div>
   <div className="contanier-fluid mb-5">
     <div className="row">
       <div className="col-10 mx-auto">
         <div className="row gy-4">

         {
           Sdata.map((val,index)=>{
             return (
               <Card key={index} image1={val.image1} title={val.title}/>
             );
           })
         }
          </div>
       </div>
     </div>
     </div> 
    </>
  );
}

export default Service;
