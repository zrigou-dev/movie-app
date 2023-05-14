import React, { useState, useEffect } from "react";
import "./SlideHero.css";   
import mainSliderPhotos from "../../MainSliderPhotos";
import logo from '../../img/logo.png'



function SlideHero() {
    const [sortedArray, setSortedArray] = useState(mainSliderPhotos);

useEffect(() => {
  const newArrSlid = mainSliderPhotos.slice().sort(() => Math.random() - 0.5);
  setSortedArray(newArrSlid);
},[]);

  return  (  
  <div className="slid-hero">
    <div className="black-shadow"></div>
    <div className="shadow-img"></div>
     <img src={sortedArray[0].src} alt="background hero" className="img-hero-slid"/>
     <div className="container">
      <div className="contenet-hero">
        <h2> <span>Welcome To </span><img src={logo} alt="logo" /></h2>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
     </div>
  </div>
  )
}

export default SlideHero;
