import React from "react";
import "./Aftergrid3.css"
const AfterGrid3 = () => {
  return (
    <div className="Afterslideshow" style={{  width:"100%", margin:"auto", display:"flex" , padding:"30px", textAlign:"center",justifyContent:"center", marginTop:"30px", marginBottom:"30px"}}>
      <div id="firstdiv" className="Afterslideshow-divs">Nike Vapormax</div>
      <div className="Afterslideshow-divs">Jordan Retro</div>
      <div className="Afterslideshow-divs">Nike Air Max</div>
      <div className="Afterslideshow-divs">Nike Air Force 1</div>
      <div className="Afterslideshow-divs">adidas NMD</div>
      <div className="Afterslideshow-divs">Nike Air Max 97 </div>
      <div id="lastdiv" className="Afterslideshow-divs">LeBron</div>
    </div>
  );
};

export default AfterGrid3;

