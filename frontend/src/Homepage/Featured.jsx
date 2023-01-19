import React from "react";
import Boot from "../Assets/boot.jpg";
const Featured = () => {
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        FEATURED COLLECTIONS
      </p>
      <img style={{ width: "100%", marginTop: "20px" }} src={Boot} />
    </div>
  );
};

export default Featured;
