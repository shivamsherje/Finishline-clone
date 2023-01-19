import React from "react";
import img7 from "../Assets/Screenshot (194).png";
import img8 from "../Assets/Screenshot (195).png";
import img9 from "../Assets/Screenshot (197).png";
import img10 from "../Assets/Screenshot (199).png";
import img11 from "../Assets/Screenshot (200).png";

import "./Scroll.css"

const ScrollW1 = () => {
  const list = [img7, img8, img9, img10, img11];


  const Bar = () => {
    return (
      <>
        {list.map((item) => {
          return (
            <>
              <img
                style={{
                  display: "flex",
                  marginRight: "50px",
                  borderRadius: "10px",
                  height: "450px",
                }}
                src={item}
                alt=""
              />
            </>
          );
        })}
      </>
    );
  };


  return (
    <>
      <div style={{ width: "100%", margin: "auto", marginTop:"30px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>
          TRENDING OUTFITS
        </h1>
      </div>
      <div>
        <div
          className="scrollbar"
          style={{
            scrollbarwidth: "none",
            display: "flex",
            overflowX: "scroll",
            padding: "5px",
            width: "95%",
            margin: "auto",
            height:"460px"
          }}
        >
          <Bar />
        </div>
      </div>
      <hr style={{ width: "95%", margin: "auto" }} />
    </>
  );
};

export default ScrollW1;
