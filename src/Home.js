import React from 'react';
import image from "./programmer_images.PNG";

import './App.css';
import { NavLink } from 'react-router-dom';
import Common from "./Common";

const Home=()=> {
  return (
    <>
    <Common name="Yukta Gautam's" sub="Portfolio" details="MERN stack Devloper|
                Pythonista|Software Engineer|Open Source Contributor" imgsrc={image} views="./Service" btnName="Know More"/>
   
    </>
  );
}

export default Home;
