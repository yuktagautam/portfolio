import React from "react";
import { NavLink } from "react-router-dom";

const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center ">
     <div className="container-fluid">
       <div className="row">
         <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h2 className="brand-name"><b>{props.name}
              </b>
              <br/>

              
    <strong className="insider">{props.sub}</strong></h2>
            <div className="my-3">
    <h5 className="insider">{props.details}</h5>
            </div>
            <div className="my-3">
    <NavLink to={props.views}  className="btn-get-started">{props.btnName}</NavLink>

            </div>
            </div>
            <div className="col-md-6 order-1 order-lg-2  pt-5 d-flex justify-content-center flex-column">
              <img src={props.imgsrc} alt="image"/>
            </div>

            </div>
          </div>
         </div>
       </div>

     
   </section>
        </>
    );


}
export default Common;