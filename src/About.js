import React from 'react';
import './App.css';
import image from "./girl_program1.png";
import Common from "./Common";

const About=()=> {
  return (
    <>
   <Common name="Student at Guru Gobind Singh Indraprasth University" sub="BPIT" details="Btech UnderGraduate|Computer Science" imgsrc={image} views="./Home" btnName="Know More"/>
    </>
  );
}

export default About;
