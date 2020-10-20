import React from "react";
import {NavLink} from "react-router-dom";
import fullStack from "../src/images/full_stack.png";
const Card=(props)=>{
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
           <div className="card">
             <img src={props.image1} className="card-img-top" alt="something new"/>
             <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <h3 className="card-text">{props.data2}</h3>

               
               </div>
            </div>
          </div>
          </>
    );


}
export default Card;