import React, { useEffect, useState } from "react";
import "./Signing.css";
import Statuslogo from "../Assets/statuslogo.svg";
import Logo from '../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Signing() {
  const [data, setData] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Navigate = useNavigate()

  const GetData = () => {
    axios.get(`https://shivam-vercel-db-eh2q.vercel.app/sportslineuser`)
      .then((res) => setData(res.data))
  }
  useEffect(() => {
    GetData()
  }, [])

  let x = false
  const LoginFunc = () => {
    data.map((ele) => {
      if (ele.email === email && ele.password === password) {
        x = true;
      }
    })
    if (x) {
      alert("Login Success")
      localStorage.setItem("isAuth", true)
      localStorage.setItem("userLogin", JSON.stringify(data[data.length - 1]))
      Navigate('/userprofile')
      window.location.reload()
    } else {
      alert("Something Wrong")
    }
  }
  const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))
  // const User = JSON.parse(localStorage.getItem("userLogin"))




  const gotoRegister = () => {
    Navigate('/register')
  }


  if (checkIsAuth === true) {
    Navigate('/userprofile')
  } else {
    return (
      <>
        <div className="logo">
          <img style={{ width: "270px" }} src={Logo} alt="logo" />
        </div>
        <hr style={{ color: "#ECF1F2" }}></hr>

        <div className="cover1">
          <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Sign In</h2>

          <input
            style={{ padding: "10px" }}
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={LoginFunc}
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
              onClick={gotoRegister}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="logo">
        <img style={{ width: "270px" }} src={Logo} alt="logo" />
      </div>
      <hr style={{ color: "#ECF1F2" }}></hr>

      <div className="cover1">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Sign In</h2>

        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={LoginFunc}
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
            onClick={gotoRegister}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};


