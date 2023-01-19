import React from "react";
import img1 from "../Assets/men7.jfif";
import img2 from "../Assets/men8.jfif";

const GridM1 = () => {
  return (
    <>
    <h1 style={{fontWeight:"bold", fontSize:"20px",marginTop:"30px"}}>WHAT'S HOT RIGHT NOW</h1>

    <div className="gridm1" style={{ display: "flex",justifyContent:"space-between", marginTop:"30px" }}>

      <div style={{ width: "49%" }}><img className="img1" alt="" src={img1} />
      <p style={{textDecoration:"underline"}}>Nike Air Max</p>
      </div>
        <div style={{ width: "49%" }}><img className="img2" alt=""  src={img2} />
        <p style={{textDecoration:"underline"}}>classic</p>
</div>


    </div>
  </>
  );
};

export default GridM1;
