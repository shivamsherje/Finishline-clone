import React from "react";

import img7 from "../Assets/Screenshot (194).png";
import img8 from "../Assets/Screenshot (195).png";
import img9 from "../Assets/Screenshot (197).png";
import img10 from "../Assets/Screenshot (199).png";
import img11 from "../Assets/Screenshot (200).png";

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

const Scroll2 = () => {
  return (
    <>
      <div style={{marginTop:"30px"}}>
        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
          TRENDING OUTFITS
        </h1>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", overflowX: "scroll", padding: "5px" }}>
          <Bar />
        </div>
      </div>
      <br />
      <br />

      <hr />
    </>
  );
};

export default Scroll2;
