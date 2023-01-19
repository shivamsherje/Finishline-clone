import React from "react";
import img1 from "../Assets/women7.jfif";

const GridW1 = () => {
  return (
    <>
      <h1 style={{fontWeight:"bold", fontSize:"20px",marginTop:"30px"}}>WHAT'S HOT RIGHT NOW</h1>

      <div className="gridm1" style={{ marginTop:"30px" }}>
        <img className="img1" style={{width:"100%"}} src={img1}  alt=""  />    
      </div>
    </>
  );
};

export default GridW1;
