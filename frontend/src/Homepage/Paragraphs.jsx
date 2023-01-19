import React from "react";
import "./paragraph.css";
const Paragraphs = () => {
  return (
    <div
      className="Paragraphs"
      style={{
        fontSize: "14px",
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="Paragraphs-div" style={{ padding: "5px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "20px", textAlign:"left" }}>
          FINISH LINE: THE INTERSECTION OF STYLE & SPORT.
        </h1>
        <br />

        <p style={{ textAlign: "justify" }}>
          Shoes, sneakers, runners, trainers, or kicks––whatever you call them,
          we have you covered with the latest footwear to fit your style. Check
          out new arrivals from premium brands like Nike, adidas, Jordan, Vans,
          Puma and more.
        </p>
        <br />
        <p  style={{ textAlign: "justify" }}>
          With on-trend hoodies, jackets, joggers and matching sets, we’ve got
          you covered with the hottest sportswear. Whether you’re shopping for
          yourself or your friends, we carry the best gifts for runners, top
          gifts from The North Face, Nike and adidas, as well as high-heat new
          arrivals from your favorite brands. We stock the freshest sports gear
          and shoes to keep you at the top of your game. Complete any look with
          a crossbody bag or New Era hat, and keep kicks fresh with premium shoe
          cleaning kits.
        </p>
        <br />
        <p  style={{ textAlign: "justify" }}>
          Stay up-to-date on the latest sneaker drops and sneaker trends when
          you follow our blog and social handles. From running shoes to
          basketball shoes, classic high-tops and retro sneakers, Finish Line is
          your one-stop shop. Plus, you can always buy online and pickup
          in-store, so you can get your favorite sneakers even faster with free,
          same-day pickup at your local Finish Line!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p  style={{ textAlign: "justify" }}>
          Jordan Retro Shoes <br />
          Jordan Retro 1 <br />
          Nike VaporMax <br />
          Nike Air Max <br />
          Nike Air Max 90 <br />
          Nike Air Max 97 <br />
          Nike Air Max 270 <br />
          Nike Air Force 1 <br />
          Nike LeBron <br />
          Nike LeBron
        </p>
        <p  style={{ textAlign: "justify" }}>
          adidas Boost
          <br /> adidas Ultraboost <br />
          adidas NMD <br />
          adidas Superstar
          <br /> New Balance Shoes
          <br /> On Running Shoes <br />
          Vans Shoes <br />
          Steph Curry Shoes
          <br /> Reebok Sneakers
          <br />
          Timberland Boots
        </p>
      </div>
    </div>
  );
};

export default Paragraphs;
