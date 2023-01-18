import React from "react";
import "./Scroll.css";
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

const Scroll1 = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
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
            width: "80%",
            margin: "auto",
          }}
        >
          <Bar />
        </div>
      </div>
      <hr style={{width:"80%", margin:"auto"}}/>

    </>
  );
};

export default Scroll1;
