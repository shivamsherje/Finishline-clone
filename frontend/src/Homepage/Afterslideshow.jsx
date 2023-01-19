import React from "react";
import "./Afterslideshow.css"
const Afterslideshow = () => {
  return (
    <div className="Afterslideshow" style={{  width:"90%", margin:"auto", display:"flex" , padding:"30px", textAlign:"center",justifyContent:"center", marginTop:"30px", marginBottom:"30px"}}>
      <div id="firstdiv" className="Afterslideshow-divs">Men's Shoes</div>
      <div className="Afterslideshow-divs">Women's Shoes</div>
      <div className="Afterslideshow-divs">Boys' Shoes</div>
      <div className="Afterslideshow-divs">Girls' Shoes</div>
      <div className="Afterslideshow-divs">Men's Clothing</div>
      <div className="Afterslideshow-divs">Women's Clothing</div>
      <div id="lastdiv" className="Afterslideshow-divs">Sale</div>
    </div>
  );
};

export default Afterslideshow;
