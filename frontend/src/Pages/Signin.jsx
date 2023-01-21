import React from "react";
import "./Signing.css";
import Statuslogo from "../Assets/statuslogo.svg";
import Logo from '../Assets/logo.png'

export default function Signing() {
  return (
    <>
      <div className="logo">
        <img style={{ width: "270px" }} src={Logo} alt="logo" />
      </div>
      <hr style={{ color: "#ECF1F2" }}></hr>

      <div className="cover1">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>SIGN IN</h2>

        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder="Enter Your password"
        />

        <button
          className="button"
          style={{
            padding: "10px",
            fontWeight: "bold",
            backgroundColor: "aqua",
            color: "black",
            border: "none",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          SIGN IN
        </button>

        <p style={{ fontSize: "12px" }}>
          This site is protected by reCAPTCHA and the Google ,{" "}
          <span style={{ textDecoration: "underline" }}> Privacy Policy</span>,
          and{" "}
          <span style={{ textDecoration: "underline" }}>
            {" "}
            Terms and Services Apply
          </span>
          <br />
        </p>
        <p style={{ textDecoration: "underline" }}>Forgot your password?</p>

        <p>
          <span style={{ fontWeight: "bold" }}>
            Earn 10 points for every $1 you spend.
          </span>
          <br />
          Get Points. Gain Access. Boost your STATUS.
        </p>
      </div>

      <div className="tagline">
        <img style={{ margin: "auto" }} src={Statuslogo} alt="logo" />
        <p style={{ fontWeight: "bold" }}>
          ONE ACCOUNT. <br /> MORE ACCESS.
        </p>
      </div>

      <div className="bottombox">
        <div className="cover2">
          <h3 style={{ fontWeight: "bold" }}>Don't have account?</h3>
          <button
            className="button"
            style={{
              padding: "10px",
              fontWeight: "bold",
              backgroundColor: "aqua",
              color: "black",
              border: "none",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};


