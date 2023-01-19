import React from "react";
import img1 from "../Assets/women8.png";
import img2 from "../Assets/women9.png";

const GridW2 = () => {
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "30px" }}>
      TRENDING
      </h1>

      <div
        className="gridm1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div style={{ width: "49%" }}>
          <img className="img1" src={img1} alt="" />
          <p style={{ textDecoration: "underline" }}>Active Wear</p>
        </div>
        <div style={{ width: "49%" }}>
          <img className="img2" src={img2} alt=""/>
          <p style={{ textDecoration: "underline" }}>Comfy Kicks</p>
        </div>
      </div>
    </>
  );
};

export default GridW2;
