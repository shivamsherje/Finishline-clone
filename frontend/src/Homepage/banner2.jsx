import React from "react";
import img1 from "../Assets/img17.jfif";
import img2 from "../Assets/img18.jfif"
const Banner2 = () => {
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px", marginBottom:"50px" }}>
      <img style={{ width: "100%", marginTop: "20px" }} src={img1} />
      <img style={{ width: "100%", marginTop: "20px" }} src={img2} />

    </div>
  );
};

export default Banner2;
